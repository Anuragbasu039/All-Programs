function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }
    
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return "YES";
    } else {
        return "NO";
    }
}
const result = kangaroo(0, 2, 5, 3);
console.log(result); //Answer output:-NO
