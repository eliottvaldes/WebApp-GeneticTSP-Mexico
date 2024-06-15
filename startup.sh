#!/bin/bash

# Número de procesos de trabajo
WORKERS=3

# Dirección y puerto de enlace
HOST="0.0.0.0"
PORT=${PORT:-5000}

# Nombre del módulo (sin .py) y la variable de la aplicación Flask
MODULE_NAME="app"
VARIABLE_NAME="create_app()"

# Iniciar Gunicorn
exec gunicorn --workers=$WORKERS --bind=$HOST:$PORT $MODULE_NAME:$VARIABLE_NAME --timeout 180 --log-level=info --log-file=- --access-logfile=- --error-logfile=-
