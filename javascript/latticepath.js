function latticePaths(n) {
    let paths = 1;

    for (let i = 0; i < n; i++) {
        paths *= (2 * n - i);
        paths /= (i + 1);
    }

    return paths;
}


const gridSize = 20;
console.log("Number of paths in a", gridSize, "x", gridSize, "grid:", latticePaths(gridSize));