//learn map, reduce, filter method

const arr = [2, 5, 8, 4, 3, 9]

const output1 = arr.map(x => x*2);  //map

console.log(output1);

const output2 = arr.filter(x => x%2===0);  //filter

console.log(output2);

const output3 = arr.reduce(function(acc,curr) {  //reduce
    acc = acc + curr;
    return acc;
},0);

console.log(output3);

