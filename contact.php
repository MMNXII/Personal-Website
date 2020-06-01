<?php

$errors = '';
$myemail = 'matthewneal6@yahoo.com';//<-----Put Your email address here.
if(empty($_POST['name_input'])  || 
   empty($_POST['email_input']) || 
   empty($_POST['message_input']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name_input']; 
$email_address = $_POST['email_input']; 
$message = $_POST['message_input']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}




if( empty($errors))

{

$to = $myemail;

$email_subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $email_address\n Message \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

// header('Location: contact-form-thank-you.html');

}

?>