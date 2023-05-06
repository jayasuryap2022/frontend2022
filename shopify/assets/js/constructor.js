/*
function createPerson()
{
    return {
        name,
        greeting()
        {
            document.write(` my name is ${this.name}`);
        }
    };
}
*/
// pascal  Myfirst name
//  constructor 


function Person(name)
{
    this.name=name;
    this.greeting=function()
    {
        document.write(` my name is ${this.name}`);

    }
}
let person = new Person("surya");
person.greeting();
// new =  {}

