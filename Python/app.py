import pymysql

conn = pymysql.connect(host='localhost', port=3303, user='root', database='test')
cur = conn.cursor()

cur.execute("show tables")
cur.execute("create table corona(statecode int primary key, statename varchar(30),totalcases int,activecases int,recoveredcases int,deathcases int);")
print(cur.fetchall())