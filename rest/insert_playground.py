import sys
import web
from db_request import insert_playground, get_all_code

urls = (
    '/contract', 'Contract'
)
app = web.application(urls, globals())

def InsertLinks():
    contracts = get_all_code()
    for contract in contracts:
        url = f"http://8.218.127.18:3000/contract?name={contract.name}&addr={contract.address}"
        insert_playground(contract.name, contract.address, url)
        print(f"Insert contract {contract.name} successfully.")

if __name__ == "__main__":
    InsertLinks()
    
