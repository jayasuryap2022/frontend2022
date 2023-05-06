class Calculator
{
     public static void main(String[] args)
     {
     Calculator calc =new Calculator(); // constructor 
     calc.add(); // method calling statement 
     calc.sub();
     calc.multiply(10,20);
     }
    void add() // method body / method definition 
     {
    System.out.println(10+20);

     }
    void sub()
     {
    System.out.println(20-10);
     }
     void multiply(int no1 , int no2 )
     {
      System.out.println(no1*no2);
     }


}

