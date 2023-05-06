let x = (2 + 5) * 10;
console.log(x);

//  conditional statements 
/*
if else
switch case 
*/
/*
if(condition)console.log("condtion:true");
else
console.log("condition:false");

*/
/*
let isCloudy =true;
let isRaining =false;
if(isRaining || isCloudy )
{
    console.log("Dont forget to take umbrella");
}
else
{
    console.log(" sky is normal ! enjoy the weather");
}
*/

//  if hour is between 12 am to 1pm good morning

//  else if hour is between 1pm to 5pm - good afternoon
//  else hour is between 5pm to 12am - good evening

let hour = new Date().getHours();
if (hour >= 0 && hour <= 13)
    console.log("good morning");
else if (hour >= 13 && hour <= 17)
    console.log("good afternoon");
else
    console.log("good evening");

/*
switch(condition)
{
    case 1:console.log("1");
    break;
    case 2: console.log("2");
    break;
    default:

}

*/
/*
let grade = 'A';
switch (grade) {
    case 'A': case 'S':
        console.log("A grade");
        break;

    case 'B':
        console.log("B grade");
        break;
    case 'C':
        console.log("C grade");
        break;
    case 'D':
        console.log("D grade");
        break;
    default:
        console.log("Fail");

}
*/
let marks =60;
switch(true)
{
    case (marks>50):
        console.log("pass");
        break;
        case (marks>90):
        console.log("outstanding");
        break;
        case (marks <50):
            console.log("fail");
        default:
            console.log("next time");



}
