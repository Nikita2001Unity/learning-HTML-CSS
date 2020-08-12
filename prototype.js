// // // // const person = {
// // // //     name : 'Nikita',
// // // //     age : 19,
// // // //     greet : function(){
// // // //         console.log('Hello, world')
// // // //     }
// // // // }
// // // // Object.prototype.sayHello = () =>{
// // // //     console.log('My \n  name is ' , person.name)
// // // // }

// // // // const car = {
// // // //     marka : 'BMW',
// // // //     power : 300,
// // // //     auto : true,
// // // //     color : 'yelow'
// // // // }

// // // //  const lena = Object.create(person) 
 
// // // //  lena.name = 'Elena'

// function hello(){
//     console.log('Hello ' , this)
// }

// const person = {
//     name : 'Nikita',
//     age : 19,
//     sayHello : hello.bind(hello),
//     logInfo : function (job , phone) {
//         console.group(`${this.name} : info`)
//         console.log(`Name is ${this.name} `)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is : ${job}`)
//         console.log(`Phone is : ${phone}`)
//         console.groupEnd()
//     }
// }

// const lena = {
//     name : 'Elena',
//     age : 20
// }

// const LenaInfoLog =  person.logInfo.bind(lena , 'Frontend' ,'8-800-555-35-35' )
// LenaInfoLog()

// const array = [1,2,3,4,5]
// console.log(array)
// function multiply(arr ,n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

// // Array.prototype.multiply = function(n){
// //     return this.map(function(i){
// //         return i * n
// //     })
// // }

// // console.log(array.multiply(20))
// // const newArr = [2,4,6,8,10]
// // console.log( newArr.multiply(20))

// function createCalcFunction(n){
//     return function(){
//         if(n === 0 ){
//             console.log('Number can`t equels zero')
//             return createCalcFunction()
//         }
//         console.log('result ' , 1000 * n)
//     }
// }

// const calc = createCalcFunction(10)
// calc()

// function Incrementor(n) {
//     return function (num) {
//        console.log(`result is ${n + num}`) 
//     }
// }

// const incr = Incrementor(12)
// incr(10)

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
    
// }

// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))

// function logPerson() {
//     console.log(`Person : ${this.name} , ${this.age} , ${this.job}`)
// }
// const person1 = {
//     name : 'Nikita',
//     age : 19,
//     job : 'programmer'
// }
// const person2 = {
//     name : 'Irina',
//     age : 19,
//     job : 'cooker'
// }
// function bind(context , fn) {
//     return function (...args) {
//         fn.apply(context , args)
//     }
// }

// bind(person1 , logPerson)()

// console.log('Start')
// function timeout2sec () {
//     console.log('Timeout 2 sec')
// }

// setTimeout(timeout2sec, 2000)

 //console.log('Request data...')

// setTimeout(()=>{
// 
// const backendData = {
//     server : 'aws',
//     port : 2000,
//     status : 'working'
// }

// setTimeout(()=>{
//     backendData.modifed = true
//     console.log('Data recived' , backendData)
// } , 2000)
// } , 2000)

// const p = new Promise(function(resolve , reject){
// setTimeout(()=>{
//     console.log('Preparing data...')
//     const backendData = {
//              server : 'aws',
//              port : 2000,
//              status : 'working'
//          }
//          resolve(backendData)
// } , 2000)
// })

// p.then((data)=>{
// return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         data.modified = true
//         reject(data)
//     } , 2000)
//   })
// })
// .catch(err => console.error('Error ' , err))
// .then(clientData =>{
//     console.log('Data recived' , clientData)
// })

// function first() {
//     setTimeout(()=>{
//         alert('First')
//     } , 1000)
// }

// function second() {
//     console.log('Second')
// }

// first()
// second()

// const sleep = ms =>{
//   return new Promise(resolve =>{
//       setTimeout(()=> resolve() , ms)
//   })
// }

// // sleep(2000).then(()=> alert('After 2 sec'))
// // sleep(4000).then(()=> alert('After 4 sec'))


// Promise.all([sleep(2000) , sleep(5000)]).then(() =>{
// alert('After 2 and after 5 second')
// })

// Promise.race([sleep(2000) , sleep(5000)]).then(() =>{
//     alert('After 2 and after 5 second')
//     })


// function RandomNumber() {
//     var num = 5
//     return new Promise((resolve , reject) =>{
//         console.log('Complete')
//         if(num === 5){
//             resolve ('Success ')
//         }
//         else{
//             reject('Something is wrong')
//         }
//     })
// }



// RandomNumber().then(successCallBack , failureCallback )

// const person = Object.create(
//     {} ,  
//     {
//     name : {
//         value : 'Nikita',
//         enumerable : true,
//         writable : true,
//         configurable : true
//     },
//     birthYear : {
//         value : 2001,
//         writable : false,
//         enumerable : true,
//         configurable : false
//     },
//    age : {
//         get(){
//           return new Date().getFullYear - this.birthYear
//         },
//         set(value){
//             if(value === 17)
//             {
//                 value = this.birthYear
//                 console.log ('Value' , value)
//             }
//             else{
//                 console.log('Wrong data')
//             }
        
//         }
//    }
    
// }
// )


// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('Keys ' , key , person[key])

//     }
// }

// const person = Object.create({} , {
//     name:{
//         value:'Nikita',
//         enumerable : true,
//         configurable : true,
//         writable : true
//     },
//     birthYear : {
//         value : 2001
//     },
//     age :{
//         get(){
// return new Date().getFullYear() - this.birthYear
//         },
//         set(){

//         }
//     }

// })

// person.name = 'Nik'

// for(var key  in person){
//     console.log('Key'  , key , 'value' , person[key]) 
// }  
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail : true
// }


// class Animal{
//     static type = 'ANIMAL'
//     constructor(oprions){
//         this.name = oprions.name;
//         this.age = oprions.age;
//         this.hasTail = oprions.hasTail;
//     }

//     voice(){
//         console.log('Im an animal')
//     }
// }

// const animal = new Animal({
//     name : 'Animal',
//     age: 4,
//     hasTail:true
// })
// class Cat extends Animal{

// constructor(oprions){
//     super(oprions)
//     this.color = oprions.color
// }

// voice(){
//     super.voice()
//     console.log('Im a cat')
// }
// get ageInfo(){
//     return this.age * 7
// }
// set ageInfo (newAge ){
// this.age = newAge
// }
// }

// const cat = new Cat({
//     name : 'Cat',
//     age : 7,
//     hasTail : true, 
//     color : 'red'
// })

// class Conponent{
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }
//     hide(){
//           this.$el.style.display = 'none'
//     }
//     show(){
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Conponent{
//     constructor(options){
// super(options.selector)

// this.$el.style.width = 
//     }
// }

// const box1 = new Box({
//     selector : '#box1',
//     size : '100',
//     color: 'red '

// })

const delay = ms=>{
    return new Promise(r =>
    
        setTimeout(()=>r(),ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//    return delay(2000).then(()=>{
//       return fetch(url)

//     }).then(response => response.json())
// }

// fetchTodos()
// .then(data =>{
//     console.log('Data' , data)
// })
// .catch(e => console.error(e))

async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
   await delay(2000)
   const respons = await  fetch(url)
   const data = await respons.json()
   console.log('data ' , data)
}

fetchAsyncTodos()
