
function calculateAge(year)
{
    return 2020 - year
}

function logInfoAbout(name , year)
{
    const Age = calculateAge(year)
    if(Age > 0)
    {
        console.log('Name' + name + ' ' + 'Age' + Age)
    }
    else
    {
        console.log('Input uncorrect info')
        
    }
    
}

const person={
  name:'Nikita',
  lastName:'Kleimenov',
  age:19,
  languages:['russian','english','ukraine'],
  hasWife:false,
  citizen:'Ukraine',
  hello:function (){
      console.log('Hello')
  }
}
console.log(person.age)
person.hello()

