#!/usr/bin/env python3

from flask import Flask, request
import sys


app = Flask(__name__)

@app.route('/')
def hello():
    return "hello"


@app.route('/api', methods=['POST'])
def addrecord(name):
    return {}
