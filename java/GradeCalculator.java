class GradeCalculator
{
public static void main(String args[])
{
    GradeCalculator calc = new GradeCalculator();
    calc.result(90);
}
 void result(int mark)
  {
     if(mark>=90)
      {
      System.out.println("Grade: A");
      }
     else if (mark>=80)
      {
      System.out.println("Grade:B");
      }
      else if(mark>=70)
      {
      System.out.println("Grade:C");
      }
      else if (mark>=60)
      {
      System.out.println("Grade:D");
      }
      else
      {
      System.out.println("Grade:D");
      }
  }
}

