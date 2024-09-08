function kn(n){
    let sqr=0;
    {
        
        sqr=n*n;
        if(sqr>=1 && sqr<=99){
            kn2=(sqr%10);
            kn1=Math.floor(sqr/10)
             kn=kn1+kn2;
            console.log (Math.floor(kn));
        }
        else if(sqr>=100 && sqr<=9999){
            kn2=(sqr%100);
            kn1=Math.floor(sqr/100);
             kn=kn1+kn2;
            console.log (Math.floor(kn)); 
        }
        else if(sqr>=10000 && sqr<=999999){
            kn2=(sqr%1000);
            kn1=(Math.floor(sqr/1000));
             kn=kn1+kn2;
            console.log (Math.floor(kn)); 

    }
    }
    }
let A=45
let B=503
kn(A)
kn(B)

