# WEP APPLICATION FOR TRAVELING SALESMAN PROBLEM (TSP) USING GENETIC ALGORITHM TO FIND THE SHORTEST PATH BETWEEN CITIES IN MEXICO

## Project Description
In this project, we will implement a full web application for solving the traveling salesman problem (TSP) using a genetic algorithm. The web application will allow users to select a set of cities in Mexico and find the shortest tour that visits each city exactly once and returns to the starting city. The web application will display the map of Mexico with the cities marked, the shortest tour found by the genetic algorithm, and the length of the tour in kilometers.

The web application will be implemented using the following technologies:
- Flask: A Python web framework for building backend applications.
- HTML/CSS: For building the frontend user interface.
- Vue.js: A JavaScript framework for building interactive web applications.

The web application will have the following features:
- Select cities: Users can select a set of cities in Mexico from a list.
- Solve TSP: Users can click a button to solve the TSP for the selected cities using a genetic algorithm.
- Display tour: The web application will display the map of Mexico with the cities marked and the shortest tour found by the genetic algorithm.
- Display length: The web application will display the length of the shortest tour found by the genetic algorithm in kilometers.


## Problem Description
The traveling salesman problem (TSP) is a classic optimization problem where the goal is to determine the shortest tour of a collection of n “cities” (i.e., nodes), starting and ending in the same city and visiting each city exactly once. The TSP is a well-known NP-hard problem in combinatorial optimization, and it has been widely studied in the literature. The TSP has many practical applications, such as vehicle routing, logistics, and network design. In this project, we will use a genetic algorithm to solve the TSP for a set of cities in Mexico.


## Genetic Algorithm
Genetic algorithms are a class of optimization algorithms inspired by the process of natural selection. Genetic algorithms are based on the principles of evolution and genetics, and they are used to solve optimization problems by mimicking the process of natural selection. Genetic algorithms are particularly well-suited for optimization problems that involve a large search space and have multiple local optima.


### TSP Solver
The TSP solver will be implemented using a genetic algorithm. Edge recombination crossover will be used to create offspring from the parents, and inversion mutation will be used to introduce random changes to the offspring. The fitness of a tour will be calculated as the total distance traveled by the salesman when visiting each city in the tour. The data for the cities in Mexico will be obtained from a public source and it will be preprocessed to get the necessary information to get the Cities and their coordinates to calculate the distance between each of them.

The genetic algorithm will use the following components and operators:
- Initialization: Generate an initial population of tours randomly.
- Selection: Select parents from the population based on their fitness.
- Crossover: Create offspring by combining the genetic material of the parents.
- Mutation: Introduce random changes to the offspring to explore new solutions.
- Elitism: Preserve the best tours from the previous generation in the next generation.
- Termination: Stop the algorithm when a stopping criterion is met (e.g., a maximum number of generations).

### Data Source
'Ciudades de México'. Capa descargada de [http://tapiquen-sig.jimdofree.com](http://tapiquen-sig.jimdofree.com). 
Carlos Efraín Porto Tapiquén. Geografía, SIG y Cartografía Digital. Valencia, España, 2020.
Basado en capas de Environmental Systems Research Institute (ESRI). Distribución Gratuita.
