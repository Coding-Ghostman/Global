import sqlite3

conn = sqlite3.connect('C:\\Users\\gambl\\OneDrive\\Desktop\\Global\\Python\\Database\\Doge.db')
cur = conn.cursor()

# cur.execute('CREATE TABLE CORONA(STATECODE INT NOT NULL, STATENAME VARCHAR(100), ACTIVE_CASES INT, RECOVERED_CASES INT, DEATH_CASES INT)')

# cur.execute('INSERT INTO CORONA(STATECODE, STATENAME, ACTIVE_CASES, RECOVERED_CASES, DEATH_CASES) VALUES(3, "Kerala", 6000, 4000,300 )')

cur.execute('select * from CORONA')
row = cur.fetchall()
print(row)