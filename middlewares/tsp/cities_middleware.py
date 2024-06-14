from flask import request, jsonify

def validate_tsp_request(func):
    def wrapper(*args, **kwargs):
        data = request.get_json()
        required_fields = ['population_size', 'mutation_prob', 'generations', 'iterations', 'start_city']
        
        # verify that all required fields are present in the request
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({
                'ok': False,
                'error': f'Missing fields: {", ".join(missing_fields)}'
            }), 400
        
        # validate the population_size field is a number between 50 and 500
        try:
            population_size = int(data['population_size'])
            if population_size < 50 or population_size > 500:
                raise ValueError()
        except ValueError:
            return jsonify({
                'ok': False,
                'error': 'population_size must be an integer value between 50 and 500'
            }), 400
            
        # validate the mutation_prob field is a number between 0 and 1
        try:
            mutation_prob = float(data['mutation_prob'])
            if mutation_prob < 0 or mutation_prob > 1:
                raise ValueError()
        except ValueError:
            return jsonify({
                'ok': False,
                'error': 'mutation_prob must be a float value between 0 and 1'
            }), 400
            
        # validate the generations field is a number between 1 and 500
        try:
            generations = int(data['generations'])
            if generations < 1 or generations > 500:
                raise ValueError()
        except ValueError:
            return jsonify({
                'ok': False,
                'error': 'generations must be an integer value between 1 and 500'
            }), 400
            
        # validate the iterations field is a number between 1 and 10
        try:
            iterations = int(data['iterations'])
            if iterations < 1 or iterations > 10:
                raise ValueError()
        except ValueError:
            return jsonify({
                'ok': False,
                'error': 'iterations must be an integer value between 1 and 10'
            }), 400
        
        # validate the start_city field
        try:
            city_idx = int(data['start_city'])
            if city_idx < 0 or city_idx >= 36:
                raise ValueError()                        
        except ValueError:
            return jsonify({
                'ok': False,
                'error': 'start_city must be an integer value between 0 and 35'
            }), 400
        
        # Crear el objeto configuration
        configuration = {
            'population_size': int(data['population_size']),
            'mutation_prob': float(data['mutation_prob']),
            'generations': int(data['generations']),
            'iterations': int(data['iterations']),
            'start_city': int(data['start_city'])
        }
        
        # Pasar el objeto configuration a la función controladora
        return func(configuration=configuration, *args, **kwargs)
    
    wrapper.__name__ = func.__name__
    return wrapper
