function largestprimefactor(num) {
    for (let i = 2; i <= num; i++) {
        while(num % i == 0 && num !== i) {
            num /=i;
        }
    }
    return num


}
console.log(largestprimefactor(600851475143))