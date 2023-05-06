class EBCalculator
{
       public static void main(String args[])
       {
            EBCalculator reader =new EBCalculator();
            int bill= reader.calculate_units();
            System.out.println( "one"+bill);
            int amount=500; 
          //  int balance = amount - bill;
           //  System.out.println(balance);
               reader.pay(amount,bill);
            
       }
       int  calculate_units() // method signature 
       {
            int units =150;
            int price=2;
            System.out.println( "Three"+(units * price));
            return units* price;
            //System.out.println("happy new year ");
       }
       void pay(int amt , int bill_1)
         {
             System.out.println("two"+(amt-bill_1));
         }
       
// java is statically typed programming language 
 }
