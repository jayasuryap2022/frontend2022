const person={
    name:"surya",

}
person.age=21;
person.greeting = function()
{
   delete person.greeting;
   delete person.age;
}
console.log(person);