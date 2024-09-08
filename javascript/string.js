                                 //str1[0] str2[1]
// function mutation (arr){  //["nello","neo"]
//     let newstr=[srt1[0],str2[1]];

//     for(i=0;i<arr.length;i++){ 
//        newstr.push(arr[i].toLowerCase());
//     }
//     for(let j=0;j<newstr.length;j++){//[4]
//       for(let k=0;k<newstr.length;k++){//[2]
//         if(newstr[j] == newstr[k]){
//           return ("true");
//         }
//         else{
//           return ("false");
//         }
//       }
//     }
//   }                       //arr[0] arr[1]
function mutation(arr) {//["hello","neo"]
  const arrStr2 = arr[1].toLowerCase().split('');//neo
  for(let i = 0; i<arrStr2.length; i++){//2
  if(!arr[0].toLowerCase().includes(arrStr2[i])){//hello //neo
    return false
  }
  }
  return true;
}
console.log(mutation (["hello","neo"]));