
import java.util.*;
public class ArmstrongNumber
{

	
	public static void main(String[] args) {
		int count;
		int result;
		Scanner in =  new Scanner(System.in);
		ArmstrongNumber call  = new ArmstrongNumber();
		System.out.println("Enter a number");
		int number =in.nextInt();
		count=call.count_digits(number);
		

	}
	int count_digits(int num)
	{
		int count=0;
		while(num!=0)
		{
			count++;
			num=num/10;
		}
		return count;
	}
	int findpower(int base , int power)
	{
		int val=1;
		while(power!=0)
		{
			val=val*base;
			power--;
		}
		
		return val;       
	}
}
