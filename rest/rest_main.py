import sys
import web
from db_request import get_contract

urls = (
    '/contract', 'Contract'
)
app = web.application(urls, globals())

class Contract:
    def GET(self):
        web.header('Access-Control-Allow-Origin', '*')
        web.header('Access-Control-Allow-Credentials', 'true')
        input_param = web.input()
        if not input_param.name or not input_param.addr:
            return ""
        contract = get_contract(input_param.name, input_param.addr)   
        return contract.code

if __name__ == "__main__":
    app.run()
    
