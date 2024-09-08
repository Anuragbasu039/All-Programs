function factorial(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }

}
function binominal(a,b){
    if(a<b)
    {
        return 0;
    }
        return factorial(a)/(factorial(b)*factorial(a-b));
}

const a = 9;
const b = 5;
const result = binominal(a, b);
console.log(result);


  
