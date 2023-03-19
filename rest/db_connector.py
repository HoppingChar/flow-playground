import pymysql

mysql_host = "8.218.127.18"
mysql_port = 3306
db         = "nft"
user       = "root"
password   = "Rootali123!@#"


class DBConnector:
    def __init__(self):
        self.conn = self._connect()
        self.cursor = self.conn.cursor()
        
    def __del__(self):
        self._disconnect()

    def _connect(self):
        conn = pymysql.connect(
            host=mysql_host, port=mysql_port, db=db, user=user, password=password
        )
        print(f"[Database] Connection Established!")
        return conn
        
    def _disconnect(self):
        self.cursor.close()
        self.conn.close()
        print(f"[Database] Connection Closed!")

    def _reconnect(self):
        pass

    def execute(self, sql):
        result = self.cursor.execute(sql)
        return result

    def commit(self):
        self.conn.commit()

    def fetchall(self):
        return self.cursor.fetchall()


