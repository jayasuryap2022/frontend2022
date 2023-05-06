class Looping_Practice
{
   public static void main(String args[])
    {
    Looping_Practice lp = new Looping_Practice();
   // lp.print_reverse(9697);
    //lp.find_count_of_digits(12345);
      //lp.find_sum_of_digits(12345);
      //lp.print_reverse_number(1234);
      lp.find_palindrome(121);

    }
       void find_palindrome(int cake )
     {
        int rev=0;
        int no2=12321;
       while(cake>0) // 1234 
        {
          int rem=cake%10; // 4 3 2 1 
          rev=rev *  10 + rem; // 4 3 2 1
          cake=cake/10; //123 // 23 // 12 // 1
        }
        System.out.println(rev);
        System.out.println(cake);
       if(rev==no2)
          {
            System.out.println(" the given number is a palindrome");
          }
          else
          {
             System.out.println(" the given number is not a palindrome");
          }
     }
    void print_reverse(int cake )
    {
       while(cake>0)
        {
          System.out.println(cake%10);
          cake=cake/10;
        }
    }

    void find_count_of_digits(int cake)
    {    
          int count=0;
         while(cake>0)
          {
                count=count+1;
                cake=cake/10;    
          }
          System.out.println("count of digits is :"+count);
    }
     void find_sum_of_digits(int cake )
    {
         int sum=0;
         while(cake>0)
        {
          System.out.println(cake%10);
           sum=sum+cake%10;
          cake=cake/10;
        }
       System.out.println(" sum of digits is :"+sum);
    }
     void print_reverse_number(int cake )
    {
        int rev=0;
       while(cake>0) // 1234 
        {
          int rem=cake%10; // 4 3 2 1 
          rev=rev *  10 + rem; // 4 3 2 1
          cake=cake/10; //123 // 23 // 12 // 1
        }
       System.out.println("reverse is :"+rev);
    }
}

