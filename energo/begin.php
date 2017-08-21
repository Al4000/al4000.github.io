<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Начало работы</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	
</head>
<body>
	<?php $punkt = 'login'; require_once "header.php" ?>
	<main>
		<div class="login_wrap">
			<div class="big_logo">
				<img src="img/big_logo.png">
				<p>ДЛЯ НАЧАЛА РАБОТЫ ВВЕДИТЕ СВОЙ ЛОГИН И ПАРОЛЬ<br>
				И НАЧИНАЙТЕ ЭКОНОМИТЬ СВОИ ДЕНЬГИ</p>
			</div>
			<div class="buttons">
				<div class="login">
					<input type="text" placeholder="Логин" id="login" name="login">
				</div>
				<div class="password">
					<input type="text" placeholder="Пароль" id="pass" name="pass">
				</div>
				<div class="enter">
					<input type="button" id="enter" name="enter" value="Войти">
				</div>
			</div>
			<div class="login_text">
				<hr>
				<p>Если вы ещё не приобрели наш продукт напишите нам и<br>
				с вами обязательно свяжутся</p>
			</div>
			<div class="contact_mail">
				<img src="img/mail_hov.png">
				<a href="mailto:Energo-effekt-kirov@yandex.ru">Energo-effekt-kirov@yandex.ru</a>
			</div>
			<div class="show_price">
				<a href="#">
					<div class="price_btn">Посмотреть прайс</div>
				</a>
			</div>
		</div>
	</main>
	<?php require_once "footer.php"; ?>
</body>
</html>