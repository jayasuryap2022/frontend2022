public class FactorOfNumber {
    public static void main(String[] args) {
        FactorOfNumber divisor = new FactorOfNumber();
        divisor.factorofnumber();

    }
    void factorofnumber()
    {
        int num=100;
        int div=2;
        while(div<num)
        {
            if(num%div==0)
            {
                System.out.println(div);

            }
            div++;
        }
    }
    
}
