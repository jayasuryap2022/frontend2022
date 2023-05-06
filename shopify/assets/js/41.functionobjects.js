function Person(name)
{
  this.name=name;
  this.greeting=function()
  {
    console.log(`my name is $(this.name)`);
  }
}
// person.call({},'latha')
// person.apply({},["latha",'21'])

const person =  new Person("surya");