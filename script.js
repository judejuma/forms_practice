
var InputYear, temp;
function s()
{
  InputYear = parseInt(document.getElementById("year").value);
  if(InputYear)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if((InputYear%4==0) && (InputYear%100!=0))
      document.getElementById("response").innerHTML = "a Leap";
    else if(InputYear%400==0)
      document.getElementById("response").innerHTML = "a Leap";
    else
      document.getElementById("response").innerHTML = "not a Leap";
  }
}