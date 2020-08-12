//const fn = (a = 1 , b = a + 1) =>{
   // result = a + b
 //   return console.log('Sum is ' , result)
//}
//fn(12 , 23)

//function sumAll (...all) {
  //  let result = 0
    //for(let num of all){
      //  result +=num
   // }
    //return  result
//}
//res = sumAll(1,2,3,5,6,7,7,)
//console.log(res)

const cars = ['BMW' , 'AUDI' , 'MERSEDES' , 'HONDA']
cars[cars.length] = 'PORSCHE'
cars.push('SUBARU')
cars.unshift('LADA')

const LastCar = cars.pop()

const especialItem = cars.shift()
const lengthFirstItem =  cars.shift().length
console.log(cars , especialItem , lengthFirstItem)

console.log(LastCar)

const LengthOfAudi = cars[0].length

console.log(LengthOfAudi)
console.log(cars.reverse())

const Text = 'Hello , Im ,studing, JavaScript'
const reverseText = Text.split('')//.join(' ') // reverse().join(' ')
console.log(reverseText)

const people = [
    {name : 'Nikita' , budget : 3500},
    {name : 'Irina' , budget : 4100},
    {name : 'Anton' , budget : 3800},
    {name : 'DIma' , budget : 5000}
]


console.log('All list : ' , people)
const index = people.findIndex(function(person) {
return person.budget > 4000 ? 'More' : 'Less'
})

console.log('Person who has budget 4100 is :' , people[index])

let FinderPerson
for(const person of people){
    console.log(person)
    if(person.budget === 3500){
        FinderPerson = person
    }
    
}
//console.log('Person who find ' , FinderPerson)

const personFind = people.find((personFind) =>{
return personFind.budget === 5000
})

///console.log(personFind)

people.unshift( {name :'Uriy' , budget : 5600})
//people.pop({name : 'Bogdan' , budget : 2140})

//console.log(people)
//const Name = people.name
//function FindTheName(Name) {
  // 
    //for(Name of people)
    //{
      //  if(Name === people.name)
        //{
//            console.log(Name)
  //      }
    //}
 //   if(Name === people.name[0]){
   //     console.log('Developer' , )
    //}
    //else{
      //  console.log('Unknown name')
    //}
    ///
//}
//FindTheName(prompt())

const IS =  people.includes('Nikita')
//console.log(IS)

const UpperCaseCars = cars.map(car =>{
    return car.toUpperCase()
})

//console.log(UpperCaseCars)

const newArray = [1,2,3,4,5,6,7]

const Pow = newArray.map(num =>{
    return num**2
    
})
//console.log(Pow)
for(let Num of newArray){
    if(Num > 5){
        Num = 666
        console.log(newArray)
        console.log(Num)
    }
    
}

const Pow2 = newArray.filter(num =>{
    return num > 5
})
//console.log(Pow2)


const cities = [
    {names : 'Kharkow' , count : 54000},
    {names : 'Kiev' , count : 60000},
    {names : 'Donetsk' , count : 34000},
    {names : 'Lviv' , count : 8000}
]

const AllCitizen =  cities.reduce(function(acc , city){
    if(city.count > 10000 && city.names.includes('K')){
        acc +=city.count
    }
    
    return acc
} , 0)
//console.log(cities)
//console.log('All citizen in all cities' , AllCitizen)

const person = {
    name : 'Nikita',
    age : 19,
    isStudent : true,
    height : 178,
    'complex key' : 'complex value',
    greet (number){
    if(number > 0 && number < 10){
        number++
        console.log('Number is more than 10 ' , number)
    }
    else{
        number--
        console.log('Number less than 10 ' , number)
    }
    },
    info(){
        //console.log('The name of student is : ' , this.name )
    }
}

if(person.dateOfBirth > Date.now()){
person.age++
}
//console.log('All info' , person)

const{name , age : MyAge , height} = person

//console.log(name , MyAge , height)
//person.greet(prompt())

for(let key in person){

    if(person.hasOwnProperty(key)){
     ////   console.log('key :' , key)
  ///      console.log('value :' , person[key])
    }
}
const keys =  Object.keys(person)
//console.log(keys)

person.info()
const university = {
    city : 'Kh',
    count : 10000,
    countOfteaches : 1000,
    street : 'Nauki avenue'
}
const logger = {
    keys(){
  //      console.log('Its a method for output our keys ' , this)
    },
    keysAndvalue(){
        Object.keys(this).forEach(key =>{
    //        console.log(`"${key} :" ${this[key]}`)
        })
    }
}
logger.keys()
logger.keysAndvalue.call(person)

const timeout = setTimeout(()=>{
//console.log('We call timeout')
} , 3000)

clearTimeout(timeout)
let inter = 1000
const interval = setInterval(() => {
  //  console.log('Interval')
}, inter);
//console.log(interval)

clearInterval(interval)
const myFun = (callback , wait = 2000)=>{
    setTimeout(callback , wait)
}

myFun(() => {
    console.log('After 2 seconds')
} , 2000)

const delay = (wait = 1000)=>{
    const promise = new Promise((resolve , reject)=>{
        setTimeout(() => {
    reject('Somethink is wrong')
        }, wait)
    })
return promise
}

delay(2500)
.then(()=>{
    console.log('After 2 seconds. Then')
})
.catch(err => console.error('Error' , err))
.finally(()=>{
    console.log('Finally')
})

const heading = document.getElementById('hello')
console.dir(heading)


function AddChangeTo (node ){
   
    node.style.color = 'orange'
    node.style.backgroundColor = 'black'
    node.style.textAlign = 'center'
    node.style.padding = '2rem'
    
}
AddChangeTo(heading )
 
//const heading2 = document.getElementById('H2')
const heading2 = document.querySelector('h2')
AddChangeTo(heading2 )

heading.onclick = ()=>{
    heading.style.color = 'green'
}

function Dynamic (node){
    node.onclick = () =>{
    if(node.style.color === 'orange'){
        node.style.color = 'black'
        node.style.backgroundColor = 'white'
    }
    else{
        node.style.color = 'orange'
        node.style.backgroundColor = 'black'
    }
 }
}

Dynamic(heading)

heading2.addEventListener('dblclick' , () =>{
    if(heading2.style.color === 'orange'){
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    }
    else{
        heading2.style.color = 'orange'
        heading2.style.backgroundColor = 'black'
    }
})