function palindrome()
{
    let no=121;
    let rem;
    let rev=0;
     temp=no;
    while(temp!=0)
    {
        rem=temp % 10; // 1 2 1
        rev = rev * 10 + rem; // 0 * 10 +1=1 *10+2 =12  , 12*10=120+1 =121 
        temp=temp/10; // 12 1

    }
    if(no==rev)
    {
        document.write(no+" is a palindrome");
    }
    else
    {
        document.write(no+" is not a palindrome");
    }
}
palindrome();





                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
