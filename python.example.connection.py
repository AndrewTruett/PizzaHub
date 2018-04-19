#!/usr/bin/env python
import sys
import random
import datetime

# Run `pip install mysql-connector` or follow the instructions at
#`https://dev.mysql.com/doc/connector-python/en/connector-python-installation.html`
import mysql.connector
from mysql.connector import errorcode

config = {
    "user": 'FakeStudent',
    "password": 'password',
    "host": '127.0.0.1',
    "database": 'FakeStudent'
}

def create_random_date():
    return datetime.date(
            random.randint(2000, 2017), # Year
            random.randint(1, 12),      # Month
            random.randint(1, 28))      # Day

def create_random_name():
    last = ("Turing", "Church", "Curry", "Hopper", "Lovelace", "Derp")
    first = ("Allan", "Haskell", "Alonzo", "Grace", "Ada", "Emily")
    return " ".join((random.choice(first), random.choice(last)))

def create_random_record(num):
    for i in range(num):
        name = create_random_name()
        date = create_random_date()
        yield (name, date)

def query(cursor):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()

    query = ("SELECT Name, EmplId, HireDate FROM Test;")
    cursor.execute(query)
    print("*" * 80)
    for (name, emplid, date) in cursor:
        print(f"{emplid} : {name}, {date}")
    print("*" * 80)

def create(cursor):
    for info in create_random_record(10):
        query = "INSERT INTO Test (Name, HireDate) VALUES (%s, %s);"
        cursor.execute(query, info)

def main():
    if len(sys.argv) != 2 or sys.argv[1] not in {"create", "query"}:
        print(f"USAGE: {sys.argv[0]} (create|query)")
        sys.exit(-1)

    try:
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        if sys.argv[1] == "create":
            create(cursor)
            # Make sure data is committed to the database
            cnx.commit()
        else:
            query(cursor)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cnx.close()

if __name__ == '__main__':
    main()

