class Exam
{
public static void main(String args[])
{
   Exam mark = new Exam(); 
   mark.grades();
}
void grades()
{
 int value =85;
  if(value>=90)
{
    if(value==100)
    {
     System.out.println("you scored 100");
    }
   else
   {
    System.out.println("you scored 90");
   }
}
   else if(value>=80)
   {
   System.out.println("you scored 80");
   }
   else if (value>=70)
   {
    System.out.println("you scored 70");
   }
    else if (value >=60)
    {
    System.out.println(" you scored 60");
    }
   else
    {
     System.out.println("better luck try next time ");
    } 
}
}

