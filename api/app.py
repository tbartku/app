#!/usr/bin/env python
# encoding: utf-8
import json
from flask_cors import CORS
from flask import Flask, jsonify
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})

app.run()
