const AppTSP = Vue.createApp({
    name: 'AppTSP',
    data() {
        return {
            delimiters: ['{% raw %}', '{% endraw %}'],
            page: 'checkBackend',
            loadingMessage: 'Cargando',
            isBtnEnabled: false,
            enviroment: null,
            loadingMessages: [
                "La inteligencia artificial (IA) puede aprender a jugar videojuegos por sí sola.",
                "El término 'Big Data' se refiere a conjuntos de datos tan grandes que las aplicaciones tradicionales de procesamiento de datos no pueden manejarlos.",
                "El aprendizaje automático es un subcampo de la IA que permite a las máquinas aprender de los datos sin ser explícitamente programadas.",
                "La primera forma de comunicación entre una computadora y un humano fue a través de tarjetas perforadas.",
                "En 1950, Alan Turing desarrolló una prueba para medir la inteligencia de una máquina, conocida como la Prueba de Turing.",
                "Deep Blue, una computadora de IBM, derrotó al campeón mundial de ajedrez Garry Kasparov en 1997.",
                "La IA se utiliza para recomendar contenido personalizado en plataformas como Netflix y YouTube.",
                "El algoritmo PageRank, que fue la base del primer motor de búsqueda de Google, fue nombrado en honor a Larry Page.",
                "Python es uno de los lenguajes de programación más populares para la ciencia de datos.",
                "El término 'data science' (ciencia de datos) fue acuñado por primera vez en 2001 por William S. Cleveland.",
                "La nube de palabras es una técnica de visualización de datos utilizada para representar la frecuencia de palabras en un texto.",
                "Los primeros conceptos de redes neuronales se desarrollaron en la década de 1940.",
                "El robot Sophia, desarrollado por Hanson Robotics, fue el primer robot en recibir ciudadanía de un país (Arabia Saudita).",
                "La detección de fraude es una de las aplicaciones más importantes de la IA en las finanzas.",
                "El aprendizaje profundo es una técnica de aprendizaje automático que imita la forma en que los humanos adquieren ciertas formas de conocimiento.",
                "El primer MOOC (curso online masivo y abierto) se lanzó en 2008.",
                "La 'minería de datos' implica encontrar patrones y relaciones en grandes conjuntos de datos.",
                "El término 'Inteligencia Artificial' fue acuñado por John McCarthy en 1956.",
                "Los chatbots de IA se utilizan comúnmente para la atención al cliente en línea.",
                "El 'algoritmo genético' es una técnica de optimización inspirada en la teoría de la evolución de Charles Darwin.",
                "El 'Machine Learning as a Service' (MLaaS) está creciendo en popularidad, permitiendo a las empresas acceder a herramientas de IA sin una gran inversión inicial.",
                "El aprendizaje automático supervisado necesita datos etiquetados para entrenar los modelos.",
                "Los sistemas de recomendación son un ejemplo común de aprendizaje automático no supervisado.",
                "El reconocimiento de voz ha mejorado significativamente gracias a las redes neuronales profundas.",
                "El 'overfitting' ocurre cuando un modelo de aprendizaje automático se ajusta demasiado a los datos de entrenamiento.",
                "El análisis de sentimientos es una técnica común para entender las emociones en el texto.",
                "Los drones se están utilizando para recopilar datos para la investigación en ciencias de la Tierra.",
                "El primer lenguaje de programación de alto nivel fue Fortran, desarrollado en los años 50.",
                "El 'procesamiento de lenguaje natural' (PLN) es un campo de la IA que se centra en la interacción entre computadoras y lenguaje humano.",
                "El 'TensorFlow' de Google es una de las bibliotecas más populares para el aprendizaje automático.",
                "La 'realidad aumentada' en la educación puede ofrecer experiencias de aprendizaje más inmersivas.",
                "El análisis de redes sociales utiliza técnicas de ciencia de datos para estudiar las redes sociales.",
                "La primera cámara digital fue desarrollada en 1975 y tomó 23 segundos en capturar una imagen.",
                "El 'blockchain' está siendo explorado para asegurar la integridad de los datos en la investigación.",
                "El 'Internet de las Cosas' (IoT) conecta dispositivos cotidianos a internet para recopilar y compartir datos.",
                "El 'e-learning' ha aumentado la accesibilidad a la educación en todo el mundo.",
                "La 'ciencia de datos' combina estadísticas, análisis de datos, y conocimientos informáticos.",
                "El primer virus informático se llamó 'Creeper' y fue creado en 1971.",
                "Los 'datos abiertos' se refieren a datos que pueden ser utilizados y compartidos libremente por cualquiera.",
                "El 'seguimiento ocular' se utiliza en la investigación de la usabilidad para entender cómo los usuarios interactúan con los sitios web.",
                "El 'aprendizaje automático federado' permite entrenar modelos de IA en múltiples dispositivos sin compartir los datos.",
                "Los satélites artificiales generan enormes cantidades de datos para la observación de la Tierra.",
                "El 'big data' es crucial en la investigación del cambio climático para analizar tendencias y patrones.",
                "La 'gamificación' en la educación utiliza elementos de juego para aumentar la motivación y el compromiso de los estudiantes.",
                "El 'data mining' se utiliza en la medicina para descubrir patrones en grandes conjuntos de datos de salud.",
                "El 'aprendizaje automático explicativo' busca hacer que los modelos de IA sean más comprensibles para los humanos.",
                "El 'deepfake' es una técnica que utiliza IA para crear contenido falso pero realista.",
                "Las 'ciudades inteligentes' utilizan datos y tecnología para mejorar la infraestructura y los servicios.",
                "La 'telemedicina' permite a los pacientes recibir atención médica a distancia mediante la tecnología.",
                "Los 'vehículos autónomos' utilizan IA para navegar sin la intervención humana.",
                "La primera forma de inteligencia artificial fue un programa de ajedrez creado en 1951.",
                "El término 'Big Data' fue utilizado por primera vez en un artículo científico de 1997.",
                "Amazon Web Services fue una de las primeras empresas en ofrecer soluciones de cloud computing en 2006.",
                "El aprendizaje profundo es impulsado por redes neuronales con muchas capas.",
                "El primer MOOC (Curso Online Masivo y Abierto) se lanzó en 2008.",
                "Quantum computing utiliza los principios de superposición y entrelazamiento cuántico.",
                "El reconocimiento de voz se ha mejorado significativamente gracias a la IA.",
                "Los modelos de lenguaje GPT-3 de OpenAI pueden escribir textos similares a los humanos.",
                "El término 'data science' (ciencia de datos) fue acuñado por primera vez en 2001.",
                "Cloud computing permite a las empresas escalar recursos informáticos según la demanda.",
                "El primer procesador cuántico comercial fue lanzado por D-Wave Systems en 2011.",
                "La IA se ha utilizado para mejorar la eficiencia de las turbinas eólicas.",
                "Python es uno de los lenguajes de programación más populares en ciencia de datos.",
                "La minería de datos es un paso clave en el proceso de descubrimiento del conocimiento.",
                "El e-learning personalizado utiliza IA para adaptarse al estilo de aprendizaje del usuario.",
                "Los sistemas de recomendación, como los de Netflix, utilizan machine learning.",
                "La computación en la nube reduce costos y mejora la eficiencia de las TI.",
                "La criptografía cuántica promete una seguridad impenetrable basada en la física cuántica.",
                "La IA en medicina puede predecir enfermedades a partir de datos de pacientes.",
                "El machine learning puede predecir patrones climáticos complejos.",
                "El término 'machine learning' fue acuñado por Arthur Samuel en 1959.",
                "Los chatbots han revolucionado la atención al cliente en línea.",
                "Los algoritmos de IA pueden componer música y crear arte.",
                "La ciencia de datos utiliza estadísticas, machine learning e inteligencia empresarial.",
                "El aprendizaje automático supervisado requiere datos etiquetados para el entrenamiento.",
                "Quantum computing podría revolucionar la criptografía y la optimización.",
                "La nube ofrece servicios como IaaS, PaaS y SaaS.",
                "Google DeepMind's AlphaGo venció al campeón mundial de Go en 2016.",
                "Los vehículos autónomos utilizan IA para navegar y evitar obstáculos.",
                "Las plataformas de e-learning ofrecen accesibilidad y flexibilidad en la educación.",
                "El aprendizaje no supervisado descubre patrones ocultos en datos no etiquetados.",
                "La computación en la nube permite el trabajo colaborativo en tiempo real a distancia.",
                "La IA en la agricultura ayuda a optimizar la plantación y cosecha.",
                "El análisis predictivo en negocios utiliza ciencia de datos para predecir tendencias.",
                "Las redes neuronales convolucionales son efectivas en el reconocimiento de imágenes.",
                "El cloud gaming permite jugar juegos de alta calidad en dispositivos menos potentes.",
                "La primera película con un personaje principal generado por IA fue 'Final Fantasy' en 2001.",
                "Los superordenadores cuánticos podrían resolver problemas inabordables para las computadoras tradicionales.",
                "El procesamiento del lenguaje natural permite a las máquinas entender el texto humano.",
                "El big data es esencial en la investigación genómica para analizar secuencias de ADN.",
                "La IA en finanzas ayuda a detectar fraudes y automatizar el trading.",
                "El modelo de cloud computing híbrido combina la nube pública y privada.",
                "El aprendizaje reforzado involucra agentes que aprenden a tomar decisiones.",
                "Los cursos en línea masivos han democratizado el acceso a la educación de calidad.",
                "La computación cuántica usa qubits en lugar de bits tradicionales.",
                "La IA puede ayudar a traducir idiomas en tiempo real.",
                "La ciencia de datos es crucial para mejorar la atención sanitaria personalizada.",
                "Las plataformas de e-learning utilizan análisis de datos para mejorar los cursos.",
                "El almacenamiento en la nube ofrece una forma segura y accesible de guardar datos.",
                "La IA ha ayudado a descubrir nuevos materiales mediante la simulación computacional."
            ],
            tspChoosen: {
                id: 0,
                name: 'ciudades',
                key: 'cities',
                icon: 'fas fa-building'
            },
            tspOptions: [
                { id: 0, name: 'ciudades', key: 'cities', icon: 'fas fa-building' },
                { id: 1, name: 'aeropuertos', key: 'airports', icon: 'fas fa-plane' },
                { id: 2, name: 'centrales de autobuses', key: 'buses', icon: 'fas fa-bus' },
            ],
            tspParams: {
                population_size: 50,
                mutation_prob: 0.01,
                generations: 10,
                iterations: 1,
                start_city: 4,
            },
            tspDefaultParams: {
                population_size: 350,
                mutation_prob: 0.05,
                generations: 200,
                iterations: 1,
                start_city: 4,
            },
            results: [],
            data_cities: [],
            data_selected: [],
            data_buses: [],
            infoMessages: {
                'population_size': {
                    'title': 'Tamaño de la población',
                    'message': 'Especifica la cantidad de soluciones (permutaciones) iniciales a generar. Un número mayor puede mejorar la calidad de la solución final pero aumentará el tiempo de cómputo.',
                    'range': 'El rango de valores típicos oscila entre 50 y 500.'
                },
                'mutation_prob': {
                    'title': 'Probabilidad de mutación',
                    'message': 'Define la probabilidad de que una solución sufra mutaciones aleatorias en cada generación. Valores típicos oscilan entre 0.01 y 0.1.',
                    'range': 'Valores recomendados entre 0.01 (1%) y 0.1 (10%).'
                },
                'generations': {
                    'title': 'Cantidad de generaciones',
                    'message': 'Indica el número total de generaciones que el algoritmo evolucionará buscando la solución óptima. Un número mayor permite una búsqueda más exhaustiva.',
                    'range': 'El rango de valores típicos puede variar entre 100 y 500, dependiendo del tamaño de la población y del problema.'
                },
                'iterations': {
                    'title': 'Número de iteraciones',
                    'message': 'Número de veces que se ejecutará el algoritmo completo para buscar la mejor ruta. Repetir la ejecución puede ayudar a encontrar una mejor solución por variabilidad en la inicialización.',
                    'range': 'Generalmente, se utilizan entre 1 y 10 iteraciones para obtener resultados consistentes.'
                },
                'start_city': {
                    'title': 'Ciudad de inicio',
                    'message': 'Selecciona la ciudad desde la cual comenzará el recorrido. La elección de la ciudad de inicio puede influir significativamente en la ruta final y su distancia total.',
                    'range': 'Selecciona una ciudad de la lista de ciudades disponibles en el algoritmo.'
                }
            },
            currentLoadingMessage: null,
            showAleatoryMessages: false,
        }

    },
    mounted: async function () {
        await this.getEnviorment();
        await this.checkBackendStatus();
    },
    methods: {
        getEnviorment: function () {
            const port = (window.location.port) ? `:${window.location.port}` : '';
            this.enviroment = `${window.location.protocol}//${window.location.hostname}${port}`;
            console.log(`Current enviroment: ${this.enviroment}`);
        },
        checkBackendStatus: async function () {
            this.page = 'loader';
            this.loadingMessage = 'Verificando disponibilidad del backend...';
            this.cycleMessages();
            this.showAleatoryMessages = true;
            await axios.get(`${this.enviroment}/status`)
                .then((response) => {
                    if (response.data.ok) {
                        this.page = 'welcomePage';
                    } else {
                        this.page = 'backendNotAvailable';
                    }
                }).catch((error) => {
                    this.page = 'backendNotAvailable';
                }).finally(() => {
                    this.loadingMessage = 'Cargando';
                    this.showAleatoryMessages = false;
                });
        },
        createAlerts(icon, data) {
            const title = (icon != 'error') ? 'Success!' : 'Ups!';
            let html = '';
            data.forEach((msg) => {
                html += `<li>${msg}</li>`;
            });
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon,
                title,
                html,
            })

        },
        changeTspChoosen: async function (tsp) {
            this.page = 'tsp_selection';
            this.results = [];
            this.tspChoosen = this.tspOptions[tsp];

            if (await this.tspChoosen.key == 'cities') {
                if (this.data_cities.length == 0) {
                    await this.getDataCities();
                } else {
                    this.data_selected = await [...this.data_cities];
                }
            }
            if (this.tspChoosen.key == 'airports') {
                this.data_selected = [];
            }

            if (await this.tspChoosen.key == 'buses') {
                if (this.data_buses.length == 0) {
                    await this.getDataBuses();
                } else {
                    this.data_selected = await [...this.data_buses];
                }
            }

            this.showLocations();

        },
        setDefaultParams: function () {
            this.tspParams = { ...this.tspDefaultParams };
        },
        getDataCities: async function () {
            this.data_cities = [];
            this.loadingMessage = 'Cargando datos de ciudades...';
            this.page = 'loader';
            this.showAleatoryMessages = true;
            this.cycleMessages();
            await axios.get(`${this.enviroment}/api/tsp/${this.tspChoosen.key}/data`)
                .then((response) => {
                    this.data_cities = response.data.results;
                }).catch((error) => {
                    this.page = 'error_page';
                }).finally(() => {
                    this.page = 'tsp_selection';
                    this.data_selected = [...this.data_cities];
                    this.showAleatoryMessages = false;
                });
        },
        getDataBuses: async function () {
            this.data_buses = [];
            this.loadingMessage = 'Cargando datos de centrales de autobuses...';
            this.page = 'loader';
            this.showAleatoryMessages = true;
            this.cycleMessages();
            await axios.get(`${this.enviroment}/api/tsp/${this.tspChoosen.key}/data`)
                .then((response) => {
                    this.data_buses = response.data.results;
                }).catch((error) => {
                    this.page = 'error_page';
                }).finally(() => {
                    this.page = 'tsp_selection';
                    this.data_selected = [...this.data_buses];
                    this.showAleatoryMessages = false;
                });
        },
        runTSP: async function () {
            let mapContainer = document.getElementById('plotMap');
            // si existe el contenedor del mapa, eliminarlo
            if (mapContainer) {
                mapContainer.remove();
            }
            // tambien eliminar el h4
            document.getElementById('routeMapContainer').getElementsByTagName('h4')[0].innerText = '';

            this.results = [];
            this.loadingMessage = 'Ejecutando algoritmo TSP...';
            this.page = 'loader';
            this.showAleatoryMessages = true;
            this.cycleMessages();
            await axios.post(`${this.enviroment}/api/tsp/${this.tspChoosen.key}/solve`, this.tspParams)
                .then((response) => {
                    const data = response.data.results;
                    // validate if in data exist the key 'route', if true parse the route into a array
                    if (data[0].hasOwnProperty('route')) {
                        data.forEach((item) => {
                            item.route = JSON.parse(item.route);
                        });
                    }
                    this.results = [...data];
                }).catch((error) => {
                    this.createAlerts('error', [error.response.data.error]);
                }).finally(() => {
                    this.page = 'tsp_selection';
                    // validate if results is not empty
                    if (this.results.length < 1) {
                        this.showLocations();
                    } else {
                        this.createAlerts('success', ['Ejecución del algoritmo completada con éxito.']);
                    }
                    this.loadingMessage = 'Cargando';
                    this.showAleatoryMessages = false;
                });
        },
        createMap: function (routeOriginal, distance, index) {            
            const route = [...routeOriginal];
            const mapData = route.map((city, index) => {
                const cityData = this.data_selected[city];
                return {
                    posRuta: index + 1,
                    lat: cityData.latitud,
                    lng: cityData.longitud,
                    ciudad: cityData.estado,
                    recinto: cityData.nombre_recinto,
                    icon: (index == 0) ? 'fas fa-map-marker-alt' : (index == route.length - 1) ? 'fas fa-flag-checkered' : 'fas fa-map-pin',
                    color: (index == 0) ? 'red' : (index == route.length - 1) ? 'red' : 'green'
                };
            });

            let mapContainer = document.getElementById('plotMap');
            // si existe el contenedor del mapa, eliminarlo
            if (mapContainer) {
                mapContainer.remove();
            }

            let newMapContainer = document.createElement('div');
            newMapContainer.setAttribute('id', 'plotMap');
            newMapContainer.setAttribute('style', 'height: 70vh; margin-top: 5vh;');

            // colocar texto en el elemento h4 del contenedor id=routeMapContainer
            document.getElementById('routeMapContainer').getElementsByTagName('h4')[0].innerText = `Ruta óptima ${index} con distancia de ${distance.toFixed(2)} km`;

            // agregar el nuevo contenedor al final del <routeMapContainer>
            document.getElementById('routeMapContainer').appendChild(newMapContainer);


            // Inicializar el mapa en el contenedor
            let map = L.map('plotMap').setView([mapData[0].lat, mapData[0].lng], 13);

            // Añadir la capa base del mapa
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Añadir marcadores con iconos FontAwesome
            let latLngs = [];
            mapData.forEach(data => {
                // si es el primer marcador, usar un color diferente

                const htmlIcon = `<div style="font-size: 30px; color: ${data.color};"><i class="${data.icon}"></i></div>`;
                const marker = L.marker([data.lat, data.lng], {
                    icon: L.divIcon({
                        html: htmlIcon,
                        className: '', // importante quitar la clase por defecto para que no interfiera con el estilo
                        iconSize: [30, 30],
                        iconAnchor: [15, 30]
                    })
                });
                marker.addTo(map).bindPopup(`(${data.posRuta}) ${data.ciudad} - ${data.recinto}`);
                latLngs.push([data.lat, data.lng]);
            });

            // add the first marker to the end of the route
            latLngs.push([mapData[0].lat, mapData[0].lng]);

            // Dibujar la línea de la ruta
            const polyline = L.polyline(latLngs, { color: 'blue' }).addTo(map);
            map.fitBounds(polyline.getBounds());

            // mover la vista del mapa al centro de la ruta
            map.panTo(polyline.getBounds().getCenter());

            // hacer scroll en la página para mostrar el mapa
            window.scrollTo(0, document.body.scrollHeight);
        },
        showLocations: async function () {
            let mapContainer = document.getElementById('plotMap');
            // si existe el contenedor del mapa, eliminarlo
            if (mapContainer) {
                mapContainer.remove();
            }
            // tambien eliminar el h4
            document.getElementById('routeMapContainer').getElementsByTagName('h4')[0].innerText = '';
            Vue.nextTick(() => {
                let mapContainer = document.getElementById('locationMap');
                // si existe el contenedor del mapa, eliminarlo
                if (mapContainer) {
                    mapContainer.remove();
                }
                let newMapContainer = document.createElement('div');
                newMapContainer.setAttribute('id', 'locationMap');
                newMapContainer.setAttribute('style', 'height: 70vh;');
                // agregar el nuevo contenedor al final del <div id=locationContainer
                document.getElementById('locationContainer').appendChild(newMapContainer);

                // Inicializar el mapa en el contenedor colocando a mexico como centro
                let map = L.map('locationMap').setView([23.6345, -102.5528], 5);

                // Añadir la capa base del mapa
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // obtener el icono de tspChoosen
                let icon = this.tspChoosen.icon;

                // Añadir marcadores con iconos FontAwesome
                this.data_selected.forEach(data => {
                    const htmlIcon = `<div style="font-size: 20px; color: green;"><i class="${icon}"></i></div>`;
                    const marker = L.marker([data.latitud, data.longitud], {
                        icon: L.divIcon({
                            html: htmlIcon,
                            className: '', // importante quitar la clase por defecto para que no interfiera con el estilo
                            iconSize: [25, 25],
                            iconAnchor: [15, 25]
                        })
                    });
                    marker.addTo(map).bindPopup(`${data.estado} - ${data.nombre_recinto}`);
                });

            });
        },
        createInfoAlert: function (key) {
            // show a basic info alert with icon=info and message depending on the key using infoMessages
            Swal.fire({
                icon: 'info',
                title: this.infoMessages[key].title,
                html: `<p>${this.infoMessages[key].message}</p>
                <p><strong>Rango de valores:</strong> ${this.infoMessages[key].range}</p>`,
                showCloseButton: true,
                confirmButtonText: 'Entendido',
            });
        },
        backMainPage: function () {
            // verificar si hay elementos en el contenedor de mapa para elimianrlos
            let mapContainer = document.getElementById('locationMap');
            // si existe el contenedor del mapa, eliminarlo
            if (mapContainer) {
                mapContainer.remove();
            }

            mapContainer = document.getElementById('plotMap');
            // si existe el contenedor del mapa, eliminarlo
            if (mapContainer) {
                mapContainer.remove();
            }
            // tambien eliminar el h4
            document.getElementById('routeMapContainer').getElementsByTagName('h4')[0].innerText = '';
            this.results = [];
            this.page = 'welcomePage';
        },
        cycleMessages: function () {
            let index = Math.floor(Math.random() * this.loadingMessages.length);
            this.currentLoadingMessage = this.loadingMessages[index];

            // Guardamos el ID del intervalo para poder detenerlo más tarde
            const messageInterval = setInterval(() => {
                // Verificamos si showAleatoryMessages es true antes de cambiar el mensaje
                if (this.showAleatoryMessages) {
                    index = Math.floor(Math.random() * this.loadingMessages.length);
                    this.currentLoadingMessage = this.loadingMessages[index];
                } else {
                    // Detenemos el intervalo si showAleatoryMessages es false
                    clearInterval(messageInterval);
                }
            }, 7000); // intervalo de 7 segundos
        },

    }
}).mount('#app')