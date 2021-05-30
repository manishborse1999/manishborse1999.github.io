// map method

var re=[20,3,4,5,8,7,6,1,2]

var res=re.map((element,index,arr)=>{
    return element>3;
})
console.log(re)
console.log(res)

var ress=re.map(function(element,index,arr){
    return `Element ${element} at position ${index} of array ${arr}`
})
console.log(ress)


// Challenge find sqrt of each element

let arr=[25,36,4,49,64,100];

let res=arr.map((element)=>{
    return Math.sqrt(element);
})
console.log(res)

// Challenge multiply each element by 2 and return those >10;

let arr=[2,3,4,5,6,7,8,9];

let res=arr.map((element)=>{
    return element*2;
}).filter((element)=>{
    return element>=10;
})
console.log(res)


// Reduce method
// Find sum of all elements
let arr=[2,3,4,5,6,7,8,9,10];

let res=arr.reduce((accumulator,element)=>{
    return accumulator+=element;
})

console.log(res)
 
// multiply element by 2 and take element >10 and return sum
let res=arr.map((element)=>{
    return element*2;
}).filter((element)=>{
    return element>10;
}).reduce((accumulator,element)=>{
    return accumulator+=element;
})

console.log(res)

// Challenge one element is already gievn and anothe array is give have to add that element and array elements 

let a=7;

let arr=[5,4,3];
let sum=arr.reduce((acc,currelement)=>{
    return acc+=currelement;
},a);
console.log(sum)


// Filter

const price=[200,300,400,500,430];

var res=price.filter(function(element){
    return element>200;
})
console.log(res)