from flask import Flask, request
from flask_cors import CORS, cross_origin
import pymysql
import json

app = Flask(__name__)
CORS(app)
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
@cross_origin
def addProduct():
    product = request.get_json()
    db = getConnection()
    cursor = db.cursor()
    sql = "INSERT INTO product_tb(name, desription, category, supplier, price) VALUES ('%s', '%s', '%s', '%s', '%d' )" % (product['name'],product['description'], product['category'],product['supplier'], int(product['price']))
    print(sql)
    
    try:
        cursor.execute(sql)
        print("scuucesfully entered")
        db.commit()
        db.close()
    except Exception as e:
        db.rollback()
        db.close()
    return product, 201

@app.route('/listProduct',methods=['GET'])
@cross_origin()
def listProduct():
    db = getConnection()
    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from product_tb")
    jsonStr = cursor.fetchall()
    jsonStrUpd = json.dumps(jsonStr)
    db.close()
    return jsonStrUpd

if __name__ == '__main__':
    app.run(debug=True)