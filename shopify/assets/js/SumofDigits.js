function SumofDigits()
{
    let no=12345;
    let  sum=0;
    let  rem=0;

    while(no!=0)
    {
      rem=no%10; // 5 // 4  3 2 1
      sum=sum+rem; // 0+5 =5 , 5+4 =9 ,  9+3 =12  12 +2 = 14 14+1 =15
    }
    document.write("sum is :"+sum);
}
SumofDigits();