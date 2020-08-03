import flask
from flask import Flask, request
import pandas as pd
import numpy as np
import re
from datetime import datetime
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
from flask_socketio import send, emit
import threading
from fbprophet import Prophet
import socketio
import pickle5 as pickle
from fbprophet import Prophet
from pymongo import MongoClient
import pandas
from pandas import DataFrame
import datetime
import json

app = Flask(__name__)

cors = CORS(app)
app.config['SECRET_KEY'] = 'secret!'

client =  MongoClient("mongodb+srv://dbAAI:maverick123@aai.5wmq1.gcp.mongodb.net/AirportDB?retryWrites=true&w=majority")
db = client['AirportDB']
collection = db['Passenger']

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

chart_data2 = chart_data2[0:20]    

alerts=[]
for x in chart_data2:
    if(x['yhat'] < x['no_of_pass']):
        packet = {'timestamp':x['timestamp'],'shortage':x['no_of_pass']-x['yhat'],'expected':x['no_of_pass']}
        alerts.append(packet)

@app.route('/')
def alert_handler():
    obj = {'data':chart_data2,'alerts':alerts}

    return json.dumps(obj).encode('utf-8')
   




