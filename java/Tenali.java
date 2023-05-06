class Tenali
{
public static void main(String args[])
{
  Tenali story = new Tenali();
  //story.find_security(1024);
  //story.find_flowers(7);
    story.print_1();
}
   void print_1()
    {
      int count=0;
      while(count<10)
      {
       System.out.println(count);
        count=count+2;
      }
   
    }
 /* */
 void find_security(int beats)
 {
  int security =0;
  while(beats>1)
  {
    System.out.println("Each security gets:"+(beats/2));
     beats=(beats/2);
     security=security+1;
  }

   System.out.println("total no  of securities :"+security);
 }
 void find_flowers(int temples)
 {
   int flower_count=1;
   while(temples>0)
    {
     flower_count= flower_count*2;
     System.out.println("Flowers count each time "+flower_count);
     temples=temples-1;
    }
    System.out.println("Flowers count is :"+flower_count);
 }
}

