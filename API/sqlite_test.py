
import sqlite3
connection = sqlite3.connect('movies.db')
cursor = connection.cursor()
#cursor.execute('CREATE TABLE IF NOT EXISTS Movies (Title TEXT, Director TEXT, Year Int)')

famousFilms = [
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
