class Palindrome
{
    public static void main(String args[])
    {
        Palindrome check = new Palindrome();
        check.findpalindrome();
    }
    void findpalindrome()
    {
        int no=121,rev=0,rem,temp;
        temp=no;
        while(temp>0)
        {
            rem=temp%10; // 1
            rev=rev*10+rem;
            temp=temp/10;
        }
        
        if(no==rev)
        {
            System.out.println(no+" is a palindrome");
        }
        else
        {
            System.out.println(no+" is not a palindrome");
        }
    }
}