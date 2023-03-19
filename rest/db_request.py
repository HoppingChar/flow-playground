from db_connector import DBConnector
from typing import List, Dict

db = DBConnector()

class Contract:
    def __init__(self):
        self.id = ""
        self.name = ""
        self.address = ""
        self.code = ""

    def __init__(self,
                id: str, 
                name: str, 
                address: str, 
                code: str):
        self.id = id
        self.name = name
        self.address = address
        self.code = code

    def ToString(self) -> str:
        return ""


def _retrieve_contract_from_db_entry(entry: tuple) -> Contract:
    id = entry[0]
    name = entry[1]
    address = entry[2]
    code = entry[3]
    return Contract(id, name, address, code)

def get_contract(contract_name: str, contract_addr: str) -> Contract:
    if len(contract_name) == 0:
        sql = f"SELECT * FROM flow_code "\
            f"WHERE contract_addr='{contract_addr}'"
    elif len(contract_addr) == 0:
        sql = f"SELECT * FROM flow_code "\
            f"WHERE contract_name='{contract_name}'"
    else:
        sql = f"SELECT * FROM flow_code "\
            f"WHERE contract_name='{contract_name}' AND contract_addr='{contract_addr}'"
    db.execute(sql)
    result = db.fetchall()

    entry = result[0]
    return _retrieve_contract_from_db_entry(entry)

def get_playground_url(contract_name: str, contract_addr: str):
    sql = f"SELECT * FROM playground "\
        f"WHERE contract_name='{contract_name}' AND contract_addr='{contract_addr}'"
    db.execute(sql)
    result = db.fetchall()

    entry = result[0]
    return entry[3]

def insert_playground(contract_name: str,
                      contract_addr: str,
                      playground_url: str):
    sql = f"INSERT INTO playground "\
          f"(contract_name, contract_address, playground_url) "\
          f"VALUES "\
          f"('{contract_name}', '{contract_addr}', '{playground_url}')"
    db.execute(sql)
    db.commit()

def get_all_code() -> List[Contract]:
    sql = f"SELECT * FROM flow_code"
    db.execute(sql)
    entries = db.fetchall()
    
    ret = []
    for entry in entries:
        contract = _retrieve_contract_from_db_entry(entry)
        ret.append(contract)
    return ret
        

