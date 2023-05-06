let no =1;
do
{
    document.write(no+"<br>");
    no=no+1;
}
while(no<=10);

let i =1;
let num=10;
for(i=1;i<=10;i++)
{
    document.write("<br>"+i+" "+"<br>");
}

document.write("<br>"+" for in loop");
const person ={
    name:'surya', age:21};
for ( let key in person)
{
    document.write("<br>"+"key :"+person[key]+"<br>");
}

let colors =['red','blue','green'];
for(let key in colors)
{
    document.write("<br>"+colors[key]+"<br>");
}

document.write("<br>"+ "  for of loop"+"<br>");
let fruits =['apple','orange','mango'];

for (let snacks of fruits)
{
    document.write("<br>"+"snacks :"+ snacks);
}
