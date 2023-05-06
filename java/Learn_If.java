class Learn_If
{
 public static void main  (String args[])
  {

    Learn_If li  = new Learn_If();
    li.find_highest_scorer(90,95);
  }
void  find_highest_scorer( int vk , int msd)
{   
  if(vk>msd)
 {
  System.out.println("virat");
 }
else if(msd>vk)
  {
  System.out.println(" dhoni ");
  }
else
{ 
 System.out.println("virat"+" dhoni");
}
}
}




