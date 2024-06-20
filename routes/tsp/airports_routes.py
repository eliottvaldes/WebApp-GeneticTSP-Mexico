from flask import Blueprint, request, jsonify
tsp_airports = Blueprint('tsp_airports', __name__)

from helpers.get_data_from_airports import get_data_from_airports
from middlewares.tsp.cities_middleware import validate_tsp_request
from controllers.tsp_airports_controller import run_tsp_algorithm


@tsp_airports.route('/data', methods=['GET'])
def get_data_tsp_airports():
    try:
        data = get_data_from_airports()        
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


@tsp_airports.route('/solve', methods=['POST'])
@validate_tsp_request
def solve_tsp(configuration):
    try:
        results = run_tsp_algorithm(configuration)
        if len(results) == 0:
            raise Exception('No results found')
        
        return jsonify({
            'ok': True,
            'results': results
            }), 200
        
    except Exception as e:
        return jsonify({
            'ok': False,
            'error': str(e)
        }), 500

