function weirdalgo(n){
    while(n!=1){
        if(n%2==0){
            n=n/2;
        }
        else{
            n=(n*3)+1;
        }
        console.log(n);
    }
}
let A=3
weirdalgo(A)