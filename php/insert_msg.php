<?php

  include_once "connect.php";

  $name = mysqli_rdal_escape_string($_post['name']);
  $email = mysqli_rdal_escape_string($_post['email']);
  $subject = mysqli_rdal_escape_string($_post['subject']);
  $message = mysqli_rdal_escape_string($_post['message']);

  echo $name, $email, $subject, $message

?>

