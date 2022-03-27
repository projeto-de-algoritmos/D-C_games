#!/usr/bin/env python3

from flask import Flask, request
from games import games
import graph
import sys

app = Flask(__name__)

@app.route('/')
def hello():
    return {'games': games}


@app.route('/api', methods=['POST'])
def calculate_recomendation():
    return graph.calculate_recomendation(request.json)

if __name__ == "__main__":
    app.run()
