#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS
from games import games
import graph
import sys

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/games')
def get_all_games():
    return {'games': games}


@app.route('/recomendation', methods=['POST'])
def calculate_recomendation():
    print(request.json)
    return graph.calculate_recomendation(request.json)

if __name__ == "__main__":
    app.run()
