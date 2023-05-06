// oop 
let person={
    name:'surya',
    age:'21',
    interest:'web developement',
    address:{
        city:'chennai',
        state:'tamilnadu',

    },

    greeting:function()
    {
        let msg =`my name is ${this.name}, i love ${this.interest}`;
        document.write(msg);
    }
}
document.write(person.name+"<br>");
document.write(person.address.city+"<br>");

person.greeting();