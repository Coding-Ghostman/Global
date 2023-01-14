from flask import Flask, request
from flask_cors import CORS, cross_origin
import pymysql
import json

app = Flask(__name__)
productList = []

def getConnection():
    db = pymysql.connect(host="localhost",port=3334 , user="root",database="Product")
    return db

@app.route('/testData')
def testData():
    return(
        {
            "id": "123",
            "name" : "mobile",
            "description" : "Samsung galaxy",
            "category" : "Smartphone",
            "supplier" : "phone shop",
            "price" : "20000"
            
        }
    )


@app.route('/addProduct', methods=['POST'])
def addProduct():
    product = request.get_json()
    db = getConnection()
    sql = "INSERT INTO Product(name, description, category, supplier, price) VALUES ('%s', '%s', '%s', '%s', '%d' )" % (product['name'],product['description'], product['category'],product['supplier'], int(product['price']))
    cursor = db.cursor()
    try:
        cursor.execute(sql)
        db.commit()
        db.close()
    except Exception as e:
        db.rollback()
        db.close()
    return product, 201

@app.route('/listProducts', methods=['GET'])
@cross_
def listProduct():
    db = getConnection()
    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from Product")
    productStr = cursor.fetchall()
    jsonProduct = json.dumps(productStr)
    db.close()
    return jsonProduct

if __name__ == '__main__':
    app.run(debug=True)