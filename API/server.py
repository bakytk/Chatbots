
#import redis
from flask import Flask

app = Flask(__name__)
#redis = redis.Redis(host='redis', port=6379, db=0)

@app.route('/')
def hello_world():
    return 'Hello, stranger!'
    
@app.route('/visitor') 
def visitor():
    #redis.incr('visitor')
    #visitor_num = redis.get('visitor').decode("utf-8")
    return "Visitor: %s" % (1)
    
@app.route('/visitor/reset')  
def reset_visitor():
    #redis.set('visitor', 0)
    #visitor_num = redis.get('visitor').decode("utf-8")
    return "Visitor is reset to %s" % (2)
