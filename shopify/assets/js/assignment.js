function submit()
{
  first.innerHTML =fname.value;
  last.innerHTML =lname.value;
  DOB.innerHTML=dob.value;
  rollno.innerHTML=regno.value;
  var marks=parseInt(tam.value)+parseInt(eng.value)+parseInt(mat.value)+parseInt(sci.value)+parseInt(soc.value);
  total .innerHTML =marks;
  var percent =(marks/5).toFixed(2);
  percentage.innerHTML=percent +"%";

  if(percent>=90)
  {
    grade.innerHTML="A+"
  }
  else if (percent>=80)
  {
    grade.innerHTML="A";
  }
  else if(percent>=70)
  {
    grade.innerHTML="B";
  }
  else if(percent>=60)
  {
    grade.innerHTML="C"
  }
  else
  {
    grade .innerHTML="Fail";
  }
  if(percent>=60)
  {
    result.innerHTML="pass";
  }
  else
  {
    result.innerHTML="fail";
  }
  
}