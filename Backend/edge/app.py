from aiohttp import web
import socketio
import pickle5 as pickle
from fbprophet import Prophet
from pymongo import MongoClient
import pandas
from pandas import DataFrame
import datetime
import json

#db connections
client =  MongoClient("mongodb+srv://dbAAI:maverick123@aai.5wmq1.gcp.mongodb.net/AirportDB?retryWrites=true&w=majority")
db = client['AirportDB']
collection = db['Passenger']

#model loading
file1 = open('model_arrival2.pckl','rb')
model = pickle.load(file1)
file1.close()

#predictions
future = model.make_future_dataframe(periods=1440, freq='1min')
prediction = model.predict(future)[['ds','yhat']]
prediction = prediction[-1440:]
prediction = prediction.to_dict('records')


chart_data = list(collection.find({'timestamp':{"$gte": '2020-01-10 00:00:00',"$lte": '2020-01-11 00:00:00'}}))
print(chart_data[0])
chart_data2 = []
j=0
for i in range(0,len(prediction),10):
    j=i//10
    packet={'timestamp':chart_data[j]['timestamp'],'no_of_pass':chart_data[j]['no_of_pass'],'yhat':prediction[i]['yhat']}
    print(packet)
    chart_data2.append(packet)
                
alerts=[]
for x in chart_data2:
    if(x['yhat'] < x['no_of_pass']):
        packet = {'timestamp':x['timestamp'],'shortage':x['no_of_pass']-x['yhat'],'expected':x['no_of_pass']}
        alerts.append(packet)
        
frontend_socket = None
total_trolley_count = 60


# creates a new Async Socket IO Server
sio = socketio.AsyncServer()
# Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
# instance
sio.attach(app)

# we can define aiohttp endpoints just as we normally
# would with no change
async def index(request):
        return web.Response(text='server is online', content_type='text/html')

# If we wanted to create a new websocket endpoint,
# use this decorator, passing in the name of the
# event we wish to listen out for
@sio.on('connect')
async def print_message(sid,environ):
        Data = json.dumps(chart_data2).encode('utf-8')
        dump = json.dumps(alerts).encode('utf-8')
        sio.emit('chart_data',{'data':Data,'alerts':dumps},room=sid)
   
@sio.on('json')
async def json_print(sid,packet):
    sio.emit(f'device_{packet.name}',packet.data,room=frontend_socket)  
       

# We bind our aiohttp endpoint to our app
# router
app.router.add_get('/', index)

# We kick off our server
if __name__ == '__main__':
    web.run_app(app)