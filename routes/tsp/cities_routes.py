from flask import Blueprint, request, jsonify
tsp_cities = Blueprint('tsp_cities', __name__)

# import helper function to get data from cities
from helpers.get_data_from_cities import get_data_from_cities
# import middleware
from middlewares.tsp.cities_middleware import validate_tsp_request
# import controller function
from controllers.tsp_controller import run_tsp_algorithm

"""
@route: /data
@method: GET
@description: Get the data from the cities. Data includes the id,estado,ciudad,nombre_recinto,latitud,longitud
@response: JSON
"""
@tsp_cities.route('/data', methods=['GET'])
def get_data_tsp_cities():
    try:
        data = get_data_from_cities()        
        if len(data) == 0:
            raise Exception('No results found')        

        return jsonify({
            'ok': True,
            'results': data
            }), 200
        
    except Exception as e:
        return jsonify({
            'ok': False,
            'error': str(e)
        }), 500

@tsp_cities.route('/solve', methods=['POST'])
@validate_tsp_request
def solve_tsp(configuration):
    try:
        # run the tsp algorithm            
        results = run_tsp_algorithm(configuration)
        
        # validate the results are not empty
        if len(results) == 0:
            raise Exception('No results found')
        
        # return the results
        return jsonify({
            'ok': True,
            'results': results
            }), 200
        
    except Exception as e:
        return jsonify({
            'ok': False,
            'error': str(e)
        }), 500

