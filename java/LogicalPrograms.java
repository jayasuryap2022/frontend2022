class LogicalPrograms
{
    public static void main(String args[])
    {
      LogicalPrograms lp = new LogicalPrograms();
     // lp.find_divisors(10);
     // lp.find_count_of_divisors(120);
     // lp.find_prime(5);
       lp.find_multiple(5);
    }
/*
    void find_divisors(int no)
     {
        int div=2;
         while(div<no)
           {
               if(no%div==0)
                {
                   System.out.println(div);
                    
                }
                div=div+1;
           }
      }
*/+
  void find_count_of_divisors(int no)
     {
        int div=2;
        int count=0;
         while(div<no)
           {
               if(no%div==0)
                {
                   System.out.println(div);
                   count=count+1;   
                }
               div=div+1;
           }
           System.out.println("Total count is :"+count);
        }
     

       void find_prime(int no)
         {
            int div=2;
             int count=0;
             while(div<no)
           {
               if(no%div==0)
                {
                   System.out.println(div);
                   count=count+1;   
                }
               div=div+1;
           }
           System.out.println("Total count is :"+count);
           if(count==0)
           {
              System.out.println("Given number is  prime");
           }
           else
           {
              System.out.println("Given number is not  prime ");
           }
      }
       void find_multiple( int  no1)
          {
              int no2=1;
              while(no2<=5)
              {
                 System.out.println(no2 +"*2="+(no2*no1));
                 no2=no2+1;
              }
          }
 }


