let arr1 = [
    [1,2,3],
    [3,4,5]
];
let arr2 = [1,2,3];

const cond = (elemento) => (elemento).toString() == (arr2).toString();

if(arr1.some(cond)){
  console.log('arr1 have arr2') // this way
}else{
  console.log('arr1 does not have arr2')
}
