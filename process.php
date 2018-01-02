<?php
$email = $_POST["email"];
 
$EmailTo = "info@civis.vote";
$Subject = "New Message Received";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 }
 
?>