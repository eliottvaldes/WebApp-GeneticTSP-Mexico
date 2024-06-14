from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app) # use CORS to allow cross-origin requests
    
    # get all the blueprints
    from routes.base_routes import base_routes
    from routes.tsp.cities_routes import tsp_cities
    
    # register the blueprints
    app.register_blueprint(base_routes)
    app.register_blueprint(tsp_cities, url_prefix='/api/tsp/cities')
    
    # enable debug mode
    app.debug = True
    
    # return the app
    return app


app = create_app()

if __name__ == "__main__":
    app.run()

