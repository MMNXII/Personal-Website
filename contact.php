<?php

if (isset($_POST['submit'])) {
    
    $name = $_POST['name_input'];
    $mail = $_POST['email_input'];
    $message = $_POST['message_input'];

    $mailTo = 'matthewneal6@yahoo.com';
    $headers = 'From: ' .$mail;

    $txt = 'Email from ' .$name.'.\n\n'.$message;

    mail($mailTo, $txt, $headers);
    header('Location: index.php?mailsend');

}

?>