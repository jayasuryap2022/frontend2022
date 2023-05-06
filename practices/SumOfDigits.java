public class SumOfDigits {
    public static void main(String[] args) {
        SumOfDigits sum = new SumOfDigits();
        sum.findsum();
    }
    void findsum()
    {
        int num=12345;
        int sum=0;
        int rem=0;
        int count=0;
        while(num>0)
        {
            rem=num%10;
            sum=sum+rem;
            count=count+1;
            num=num/10;
        }
        System.out.println("sum of digits of a number is "+sum);
        System.out.println("total count of digits is :"+count);
    }
    
}
