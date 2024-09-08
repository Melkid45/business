<?php
$to = "usertech78@yandex.ru";
$tema = "Обратная связь";
$message = "Имя: ".$_POST['fio']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>";
$message .= "Номер телефона: ".$_POST['phone']."<br>";
$headers = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers);
?>

<?php
echo "<script>self.location='https://bussinesmentor.ru/good.html';</script>";
?>