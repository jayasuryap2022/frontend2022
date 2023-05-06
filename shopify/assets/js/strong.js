function Factorial(fact)
{
  let val=1;
  let no=1;
  while(no<=fact)
  {
    val=val*1;
    no=no+1;
  }
  return val;
}
function Strongnumber(num)
{
  let sum =0;
  let temp =num;
  while(temp>0)
  {
    let rem=temp%10;
    sum=sum+Factorial(rem);
    temp=temp/10;
  }
  if(sum==num)
  {
    console.log(" the number is strong");
  }
  else
  {
    console.log(" number is not strong");

  }
}
Strongnumber(145);
