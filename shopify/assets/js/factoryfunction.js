//  factory function

function createPerson(name)
{
    return {
        name, //  name,
        greeting()
        {
            let msg =`my name is ${this.name}`;
            document.write(msg);
        }
    
        
           
        
    };
}
let names = createPerson("surya");
names.greeting();