public class Reverse {
    public static void main(String[] args) {
        Reverse number = new Reverse();
        number.findreverse();
    }
    void findreverse()
    {
        int num=12345;
        int rev=0;
        while(num>0)
        {
           rev=num%10;
           System.out.println(rev);
           num=num/10;
        }
    


    }
    
}
