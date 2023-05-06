function Program1()
{
    //11111
    var count=1;
    while(count<=5) // 1<5 2<5 3<5  4<5 5<5  6<5 fail
    {
    document.write(1 +" ");  //1 1 1 1 1
    count++; //1  2  3 4  5 6
    }


}
Program1();
document.write("<br>"+"---------------")
function Program2()
{
    // 12345
    let no=1;
    while(no<=5)
    { 
    document.write("<br>"+no +" "); // 1 2 3  4 5
    no=no+1; // 1+1 =2  2+1 =3  3+1 =4  4+1 = 5
    }
    


}
Program2();
document.write("<br>"+"---------------")

function Program3()
{
    let no=1;
    while(no<10)
    {
        document.write("<br>"+no+""); // 1 3 5  7 9 
        no=no+2; // 1+2 = 3 3+2 =5  5+2 =7  7+2 =9 
    }
}
Program3();
document.write("<br>"+"---------------")

function Program4()
{
    // 3 6 9 12 15
    let no=3;
    while(no<=15)
    {
       document.write("<br>"+no+" ");
    no=no+3;
    }
}
Program4();
document.write("<br>"+"---------------")

function Program5()
{
    //  multiples of 3
    let i =1;
    let j=3;
    while(i<=10)
    {
        document.write("<br>"+ i +" *3 " +" = "+ i*3  );
        i=i+1;
    }
}
Program5();
document.write("<br>"+"-----------------");
function Program6()
{
    var i=1;
    while(i<=10)
    {
        document.write("<br>"+ i +"*5"+"="+i * 5);
        i=i+1;
    }


}
Program6();
document.write("<br>"+"--------------");
function PrimeorNot()
{
    var count=0;
    var div =2;
    var no=5;
    while(div<no) // 
    {
        if(no%div==0)
        {
            count=count+1;
        }
        div=div+1;
    }
    if(count==0)
    {
        document.write(" it is prime ");
    }
    else
    {
        document.write("it is not a prime");
    }

}
document.write("<br>"+"<br>");
PrimeorNot();
document.write("<br>"+"-----------"+"<br>");

