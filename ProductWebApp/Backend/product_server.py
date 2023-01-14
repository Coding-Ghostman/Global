from flask import Flask, request

app = Flask(__name__)

@app.route('/addProduct', methods=['POST'])
def addProduct():
    product = request.get_json('product')
    return product, 201



if __name__ == '__main__':
    app.run(debug=True)