from flask import Flask, request
from Product import Product
import pymysql
import json

app = Flask(__name__)
productList = []

def getConnection():
    db = pymysql.connect(host="localhost",port=3334 , user="root",database="Product")

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
    productNew = Product(product['id'], product['name'], product['description'], product['category'], product['supplier'], product['price'])
    productList.append(productNew)
    return product, 201

@app.route('/listProducts', methods=['GET'])
def listProduct():
    productStr = json.dumps([obj.__dict__ for obj in productList])
    jsonProduct = json.dumps(productStr)
    return jsonProduct



if __name__ == '__main__':
    app.run(debug=True)