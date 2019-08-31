from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        if request.method == 'OPTIONS':
            response.headers['Access-Control-Allow-Methods'] = 'POST'
            headers = request.headers.get('Access-Control-Request-Headers')
            if headers:
                response.headers['Access-Control-Allow-Headers'] = headers
        return response

    from Stack.model import db
    db.init_app(app)
    #
    # from Stack.view import init_api
    # init_api(app)

    return app