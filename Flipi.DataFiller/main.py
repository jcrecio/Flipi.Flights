from kafka import KafkaConsumer
from pymongo import MongoClient
from json import loads
import time
import sys

# try:    
#     print('ERROR AFTER ME?????????????????????????????????????????????')
#     consumer = KafkaConsumer(
#     'fetchertopic',
#     bootstrap_servers=['bus_kafka:9093'],
#     auto_offset_reset='earliest',
#     enable_auto_commit=True,
#     group_id='fetcherconsumergroup',
#     value_deserializer=lambda x: loads(x.decode('utf-8')))
# except:
#     print("Unexpected error:", sys.exc_info()[0])

# try:
#     # db_client = MongoClient("mongodb://flightsdatabase:27017/")
#     # database = db_client.FlightsContainer
#     # flights = database.flights
# except:
#     print('INITIALIZATION ERROR ')

keepOnReading=True

while(keepOnReading):
    print('-----------------------------------------------------')
    print('Reading from Flipi.Bus')

    try:
        print('Generating a consumer')
        consumer = KafkaConsumer(
        'fetchertopic',
        bootstrap_servers=['bus_kafka:9094'],
        auto_offset_reset='earliest',
        enable_auto_commit=True,
        group_id='my-group',
        value_deserializer=lambda x: loads(x.decode('utf-8')))

        for message in consumer:
            message = message.value
            # flights.insert_one(message)
            print('{} added to {}'.format(message, 'aaa'))

    except:
        print("Unexpected error:", sys.exc_info()[0])
        time.sleep(1)


#     try:
#         consumer = KafkaConsumer(
#         'fetchertopic',
#         bootstrap_servers=['PLAINTEXT://localhost:9092'],
#         auto_offset_reset='earliest',
#         enable_auto_commit=True,
#         group_id='my-group',
#         value_deserializer=lambda x: loads(x.decode('utf-8')))

#         for message in consumer:
#             message = message.value
#             # flights.insert_one(message)
#             print('{} added to {}'.format(message, 'aaa'))

#     except:
#         print("Unexpected error:", sys.exc_info()[0])
#         time.sleep(1)
