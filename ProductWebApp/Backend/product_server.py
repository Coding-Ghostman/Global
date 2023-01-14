from flask import Flask, request
from Product import Product
import pymysql

app = Flask(__name__)
productList = []

def getConnection():
    db = pymysql.connect()


@app.route('/addProduct', methods=['POST'])
def addProduct():
    product = request.get_json()
    productNew = Product(product['id'], product['name'], product['description'], product['category'], product['supplier'], product['price'])
    productList.append(productNew)
    return product, 201

@app.route('/listProducts', methods=['GET'])
def listProduct():
    
    return jsonProduct



if __name__ == '__main__':
    app.run(debug=True)