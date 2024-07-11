var a=10;
var b=10;
var ans= a+b;
console.log('answer',a+b)

const arr=['wali','wasim','sahil',32];
console.log(arr)
console.log(arr[1])

var count=10;
for(var i=0;i<count;i++){
    console.log(i);
}

//object

const person={
    name:'john doe',
    age:30,
    isStudent:false,
};
console.log(person)

const aps=[32,34,56,78];
const result =aps.filter(checkage);

function checkage(aps){
    return aps>=18
}
console.log(result)

//user input
var prompt=require('prompt-sync');
const age=prompt("enter your age")
if(age<=18){
    console.log('you get 20% discount')
}
else{
    console.log('you get a laat')
}