import numpy
from helpers.edge_recombination_algorithm import create_child
from helpers.data_buses import distances
# ==============================================================
# ================== FUNCTIONS DEFINITION ======================
# ==============================================================

# ---------------FUNCTIONS FOR GENETIC ALGORITHM ----------------
def generate_individual(size_individual: int, start_city: int = 0) -> list:
    # generate a random permutation of the cities
    cities = list(range(size_individual))
    # remove the start city from the list of cities
    cities.remove(start_city)
    # shuffle the cities
    cities = [start_city] + list(numpy.random.permutation(cities))
    # return the individual
    return cities


def hybrid_algorithm(population: list = None, population_size: int = 50, size_individual: int = 11, start_city: int = 0, generations: int = 200, mutation_prob: float = 0.05) -> dict:
    if population is None:
        population = []
    
    # Inicializar la población solo si es la primera vez
    if not population:
        population = [generate_individual(size_individual, start_city) for i in range(population_size)]
        vof_initial_population = [calculate_route_distance(individual, distances) for individual in population]
    
    # Ejecutar el algoritmo para un número dado de generaciones
    for generation in range(generations):
        family = []
        
        # Generar la familia
        for i in range(int(len(population)/2)):
            p1 = numpy.random.randint(len(population))
            p2 = numpy.random.randint(len(population))
            child = create_child(population[p1], population[p2], size_individual, start_city)

            local_family_individuals = [population[p1], population[p2], child]
            local_family_vof = [vof_initial_population[p1], vof_initial_population[p2], calculate_route_distance(child, distances)]
            worst_individual_index = numpy.argmax(local_family_vof)

            # Agregar a la familia todos excepto el peor
            for j in range(3):
                if j != worst_individual_index:
                    family.append(local_family_individuals[j])
        
        # Mutación de la familia
        for i, individual in enumerate(family):
            if numpy.random.rand() < mutation_prob:
                family[i] = generate_individual(size_individual, start_city)
        
        # Preparar la siguiente generación
        population = family
        vof_initial_population = [calculate_route_distance(individual, distances) for individual in population]
    
    # Encontrar el mejor individuo al final de todas las generaciones
    vof_family = [calculate_route_distance(individual, distances) for individual in family]
    best_individual_index = numpy.argmin(vof_family)
    
    return {
        'individual': family[best_individual_index],
        'vof': vof_family[best_individual_index]
    }
        
    
# ---------------FUNCTIONS FOR ROUTE CALCULATION ----------------
# function to calculate the total distance of a specific route, including the return to the starting point
def calculate_route_distance(route, distances):
    if len(route) < 2:  # Si hay menos de dos ciudades, la distancia es 0
        return 0

    total_distance = 0
    # Calculate the distance for the main part of the route
    for i in range(len(route) - 1):
        total_distance += distances[route[i]][route[i + 1]]

    # Add distance from the last city back to the first city
    total_distance += distances[route[-1]][route[0]]
    
    return total_distance       
    
    
# ==============================================================    
# function to run the tsp algorithm    
def run_tsp_algorithm(configuration: dict = {})->list:
    # get the parameters from the configuration    
    population_size = configuration.get('population_size', 200)
    mutation_prob = configuration.get('mutation_prob', 0.05)
    generations = configuration.get('generations', 250)
    iterations = configuration.get('iterations', 1)        
    start_city = configuration.get('start_city', 4) # Mexico City   
    size_individual = len(distances)    

    results = []
    for _ in range(iterations):
        result = hybrid_algorithm([], population_size, size_individual, int(start_city), generations, mutation_prob)
        results.append({
            'route': str(result.get('individual')),
            'distance': result.get('vof')
        })
    
    #sort the results by distance. first element is the lowest distance
    results = sorted(results, key=lambda x: x.get('distance'))
    
    return results