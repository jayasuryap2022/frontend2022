
function find_count(no) 
{
    let  count = 0;
   while (no != 0) // 3
   {
      count = count++; //1  2 3
      no = no / 10; // 15  1 
   }
   return count;
}
function find_power(base,power) // 3 5 
{
   let val=1;
  while(power!=0)// !=0
  {
   val = val* base; // 1*3 =3 , 3 *3 = 9, 9*3 = 27 , 27*3 = 81, 81 *3 =243; 
   power = power-1; // 5 ,4 , 3 ,2  1

  }
  document.write(val);
}

function Armstrong(no, count) // 153 , 3
{
   while(no!=0)
   {
   var rem = no%10;
   sum=rem + find_power(rem,count);
   no = no/10;
   }

}
function ArmstrongorNot() 
{
   var no = 153;
   let temp=no;
   let count = find_count(no);
  // document.write(count);
  var result =Armstrong(no,count);
  if(no == result)
  {
   document.write("number is armstrong");
  }
  else
  {
   document.write(" number is not a  armstrong ");
  }

  
}
ArmstrongorNot();