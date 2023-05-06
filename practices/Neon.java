import java.util.Scanner;

class Neon
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        Neon call = new Neon();
        System.out.println("enter a number");
        int num=sc.nextInt();
        int square=num*num;
        int sum=call.find_sum(square);
        if(sum==num)
        {
            System.out.println("it is neon");
        }
        else
        {
            System.out.println("it is not a neon");
        }
    }
    int find_sum(int num)
    {
         int sum=0;
         while(num!=0)
         {
            sum=sum+num%10;//9
            num=num/10;
         }
         return sum;
    }
}