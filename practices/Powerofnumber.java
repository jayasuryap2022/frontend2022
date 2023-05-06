public class Powerofnumber {
    public static void main(String[] args) {
        Powerofnumber base =  new Powerofnumber();
        base.findpower();
    }
    void findpower()
    {
        
        int value=1;
        int base=3;
        int power=5;
        while(power>0)
        {
            value=value*base;
            power=power-1;
        }
        System.out.println("the value is :"+value);
    }
    
}
