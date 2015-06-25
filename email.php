<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Check for email injection
if(IsInjected($visitor_email))
{
    echo "Sorry, there was an error.";
    exit;
}
//Create the email
$email_from = $visitor_email;//change this email address to yours 

$email_body = "You have received a new message from $name.\n".
    "Here is the message:\n $message";
    
$to = "contact@benjaminjfisher.com";//change this email address to yours 

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

//Send the email
mail($to,$subject,$email_body,$headers);

//Redirect to thank you page
header('Location: thankyou.html');//change this your thank you page 

// Function to validate against email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 