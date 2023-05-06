class Price
{
public static void main(String args[])
{
 Price total = new Price();
total.offers();

}
void offers()
{
  double totalPrice =120.0;
  double discountPrice=0.0;
  if(totalPrice>100.0)
   {
    discountPrice= totalPrice -(totalPrice * 0.1); // apply 10% discount
   }
   else
   {
     discountPrice = totalPrice; // no discount
   }
   
   System.out.println("Total price:$"+totalPrice);
   System.out.println("Discounted price : $" + discountPrice);

}
} 

