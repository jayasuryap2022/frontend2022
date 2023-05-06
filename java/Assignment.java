class Assignment
{
public static void main(String args[])
{
  Assignment today = new Assignment();
   today.one();
   today.two();
   today.three();
   today.four();
}
void four()
   {
      int value=1;
      while(value<=1331)
      {
         System.out.println(value);
         value=value*11;
      }
   }
void three()
{
    int count=3;
    while(count<=15)
    {
      System.out.println(count);
      count=count+3;
    }
}

void two()
   {
     int first=1;
     while(first<=13)
     {
       System.out.println(first);
       first=first+3;
     } 
   }

void one()
{
  int start=2;
  while(start<=10)
  {
   System.out.println(start);
   start=start+2;
  }
}

 
}
