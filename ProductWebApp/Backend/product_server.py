from flask import Flask, request
from Product import Product

app = Flask(__name__)
productList = []


@app.route('/addProduct', methods=['POST'])
def addProduct():
    product = request.get_json()
    
    return product, 201



if __name__ == '__main__':
    app.run(debug=True)