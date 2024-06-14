from flask import Blueprint, jsonify, render_template

base_routes = Blueprint('base_routes', __name__)

"""
@description: Ruta principal de la aplicación para mostrar la página de inicio
@method: GET
@return: render_template("index.html")
"""
@base_routes.route('/', methods=['GET'])
def route_index():   
    return render_template('index.html')
    

    
@base_routes.route('/status', methods=['GET'])
def route_status():
    # return the status of the server
    return jsonify({'ok': True, 'msg': 'App is running successfully'}), 200