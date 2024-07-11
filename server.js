// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{
//     return a+b
// }

// var add=(a,b)=>a+b;

// var result=add(2,7);
// console.log(result);


// (function(){
//     console.log('wali khan');
// })();

// callBack Function

// function callBack(){
//     console.log('wali khan is the call back');
// }
// const add=function(a,b,callBack){
//     var result=a+b;
//     console.log('result',result);
//     callBack();
// }
// add(3,12,function(){
//     console.log('added')
// });

// add(12,45,()=>console.log('added3'));


// use filesystem and operating system library

// var fs=require('fs');
// var os=require('os');

// var user= os.userInfo();
// console.log(user.username)

// fs.appendFile('greeting.txt','hii'+ user.username + '!\n',()=>{
//     console.log('file is created')
// });

const notes=require('./notes.js');
console.log('server is available')
var age=notes.age;
var result=notes.addnumber(age+1,4)
console.log(age)
console.log(result)

var loadas=require('lodash')

var data =['person','person',1,2,1,2,'name','age','2'];
var filter=loadas.uniq(data);
console.log(filter)
console.log(loadas.isString('wali khan'))

// JSON to object convert
const jsonString='{"name":"wali","age":"21","city":"bhopal"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject)
console.log(typeof jsonObject)

// object to json convert
const objectConvert={
    name:'wali',
    age:'21',
};
const jsonStringified=JSON.stringify(objectConvert)
console.log(jsonStringified)
console.log(typeof jsonStringified)