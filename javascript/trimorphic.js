function tripmorphic(num){
    let result= num ** 3;
    if(result.toString().endsWith(num.toString())){
        console.log("the number is tripmorphic");
    }
    else{
        console.log("the number is not tripmorphic");
    }
}
tripmorphic(5)
