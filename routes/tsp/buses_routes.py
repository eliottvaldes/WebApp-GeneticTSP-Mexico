from flask import Blueprint, request, jsonify
tsp_buses = Blueprint('tsp_buses', __name__)

from helpers.get_data_from_buses import get_data_from_buses
from middlewares.tsp.cities_middleware import validate_tsp_request
from controllers.tsp_buses_controller import run_tsp_algorithm


@tsp_buses.route('/data', methods=['GET'])
def get_data_tsp_buses():
    try:
        data = get_data_from_buses()        
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


@tsp_buses.route('/solve', methods=['POST'])
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

