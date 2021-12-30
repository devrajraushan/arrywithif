var my_form = document.getElementById("form");

function call()
{
    var x = [];
    x[0] = document.getElementById("user").value;
    x[1] = document.getElementById("user_text");
    x[2] = document.getElementById("user_two").value;
    x[3] = document.getElementById("textuser_two");
    x[4] = document.getElementById("user");
    x[5] = document.getElementById("user_two");
    /********* Start Email */
    x[6] = document.getElementById("email").value; /*g*/
    x[7] = document.getElementById("email"); /*h*/
    x[8] = document.getElementById("my_email");/*i*/

    call2(x[0],x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8]);
    return false;
}

function call2(first,b,last,d,e,f,myemail,my_email,email_text)
{
  if(first == "")
  {
      if(last == "")
      {
          d.innerHTML = "Last Name Is Empty";
          f.style.border = "1px solid red";
      }
      else{
          d.innerHTML = "";
          f.style.border = "1px solid green";
      }

      b.innerHTML = "First Name Is Empty";
      e.style.border = "1px solid red";
  }
  else{
      b.innerHTML= "";
  }

  if(first != "")
  {
      if(last == "")
      {
        d.innerHTML = "Last Name Is Empty";
        f.style.border = "1px solid red";
      }
      else {
        f.style.border = "1px solid green";
        d.innerHTML = "";
        //d.innerHTML = "Pass"; 
         /** Last Wala Fill karke
         submit par click karte hai tav par bhi green
         nhi hota hai matlab ye code work nhi karta hai
         ****/
        /*** 
         * @2 Kab Work karta hai jab dono fill hota hai tab */

      }
      //b.innerHTML = "very good";
      e.style.border = "1px solid green";
  }
  else{
    b.innerHTML = "First Name Is Empty";
  }

  /**********Email***** */

  if(myemail == "")
  {
      email_text.innerHTML = "Email Empty";
  }
  else
  {      
    email_text.innerHTML = "Pass";
    my_email.style.border = "1px solid green";
  }
  if(myemail.match("@gmail.com") ){
    email_text.innerHTML = "";       
  }
  else{
    email_text.innerHTML = "Invalid";
    my_email.style.border = "1px solid red";
  }

  
 
  


}
/****Password */

var box =document.getElementById("check");
var dear_pass = document.getElementById("pass");

function dev()
{
    if(box.checked == true)
    {
        dear_pass.type = "text";
    }
    else{
        dear_pass.type = "password";
    }
}