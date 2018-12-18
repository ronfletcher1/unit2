// # Returns count of possible paths to reach cell  
// # at row number m and column number n from the  
// # topmost leftmost cell (cell at 1, 1) 
function numberOfPaths(m, n){
    count = [[0 
        for(let i = 0; i < m; i++ range(m))]; 
        for(y in range(n))];
}
    // # Create a 2D table to store 
    // # results of subproblems 
     
    
    // # Count of paths to reach any  
    // # cell in first column is 1 
for(let i = 0; i < m; i++);
    count[i][0] = 1;
    
    // # Count of paths to reach any  
    // # cell in first column is 1 
for(j = 0; j < n; j++) 
    count[0][j] = 1;
    
    // # Calculate count of paths for other 
    // # cells in bottom-up  
    // # manner using the recursive solution 
for (i = 1; i < m; i++) { 
    for (j = 1; j < n; j++) 
  
    // By uncommenting the last part the code calculatest he total 
    // possible paths if the diagonal Movements are allowed 
    count[i][j] = count[i-1][j] + count[i][j-1]; //+ count[i-1][j-1]; 
} 
    return count[m-1][n-1]; 

  
// # Driver program to test above function  
var m = 3;
var n = 3;
console.log( numberOfPaths(m, n)) 