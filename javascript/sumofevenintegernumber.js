function sumeven (arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0)
        sum=sum+arr[i]
    }
    console.log(sum)
}
let A=[1,2,3,4,5,6,7,8,9,10]
sumeven(A) 