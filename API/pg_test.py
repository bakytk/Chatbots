
from sqlalchemy import create_engine, Table, MetaData

import os, sys
from dotenv import load_dotenv
load_dotenv()

DB_USER = os.getenv("DB_USER")
DB_PWD = os.getenv("DB_PWD")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")

conn_string = 'postgresql://'+DB_USER+':'+DB_PWD+'@'+DB_HOST+'/'+DB_NAME
engine = create_engine (conn_string)

with engine.connect() as connection:
	
	meta=MetaData(engine)
	test_table = Table('test_table', meta, autoload=True, autoload_with=engine)
	
	query= test_table.select()
	result_set = connection.execute(query)
	for r in result_set:
		print (r)

"""
famous_folks = [
('Pulp', 'Quentin', 1994),
('Future', 'Spielberg', 1985),
('Kingdom', 'Andersen', 2012)
]

cursor.executemany('INSERT INTO Movies VALUES (?,?,?)', famousFilms)

release=(1985,)
r = cursor.execute('SELECT * FROM Movies where year=?', release)
print (cursor.fetchall())


connection.commit()
connection.close()

"""
