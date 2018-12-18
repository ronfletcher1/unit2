function findRoutes(gridSize){
    // console.log(gridSize)
    let routeMatrix = [0]
    for (let i = 0; i <= gridSize; i++){
        routeMatrix.push(1);
    }

    for(let i = 1; i <= gridSize; i++){
        for(let j = 1; j ,= gridSize; j++){
            routeMatrix[j] = routeMatrix[j] + routeMatrix[i]
        }
        // console.log(gridSize)
        routes[i] = 2 * routeMatrix[i-1];
    }
}
gridSize = 4;
// console.log(gridSize)