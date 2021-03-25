<?php
$recepient = "Ваша почта@gmail.com";
$sitename = "Название сайта";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nEmail: $email \nТелефон: $phone \nСообщение: $text";

$pagetitle = "Новая заявка с сайта: \"$sitename\"";
mail($recepient, $pagetitle, $message);
?>