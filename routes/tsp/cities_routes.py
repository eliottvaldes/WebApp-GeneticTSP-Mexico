from flask import Blueprint, request, jsonify
tsp_cities = Blueprint('tsp_cities', __name__)

# import middleware
from middlewares.tsp.cities_middleware import validate_tsp_request
# import controller function
from controllers.tsp_controller import run_tsp_algorithm

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

