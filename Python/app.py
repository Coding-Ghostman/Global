import json
from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS, cross_origin

import datetime

from Employee import Employee

app=Flask(__name__)
CORS(app)


x =datetime.datetime.now()

def get_connection():
    db = pymysql.connect(host="localhost",port=3306 , user="root",database="employee")
    return db

employees = []

@app.route('/data')
@cross_origin()
def get_time():
    return employees

@app.route('/addEmployee',methods=['POST'])
@cross_origin()
def addEmployee():
    emp = request.get_json()
    empnew = Employee(emp['id'],emp['name'],emp['dept'],emp['sal'])
    # empjson = json.dumps(empnew.__dict__)
    # employees.append(empnew)
    db = get_connection()
    cursor = db.cursor()
    sql = "INSERT INTO employee_tb(id, name, dept, salary) values('%d', '%s', '%s','%d')" % (int(emp['id']),emp['name'], emp['dept'], int(emp['sal']))
    try:
        # Execute the SQL command
        cursor.execute(sql)
        # Commit your changes in the database
        db.commit()
    except:
        # Rollback in case there is any error
        db.rollback()
    # disconnect from server
    db.close()
    
    return emp, 201

@app.route('/listEmployee',methods=['GET'])
@cross_origin()
def listEmployee():
    db = get_connection()
    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from employee_tb")
    jsonStr = cursor.fetchall()
    jsonStrUpd = json.dumps(jsonStr)
    print(jsonStrUpd)
    db.close()
    return jsonStrUpd

if __name__=='__main__':
    app.run(debug=True)