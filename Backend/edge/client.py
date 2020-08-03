import json
import socketio

sio = socketio.Client()

def send_ping():
    jsonData = {'aaa': 'json'}
    Data = json.dumps(jsonData).encode('utf-8')
    print(type(Data))
    sio.emit('json', Data)

@sio.event
def connect():
    print('connected to server')
    send_ping()

if __name__ == '__main__':
    sio.connect('http://localhost:8080',headers={"type":'frontend'})
