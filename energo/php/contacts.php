<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Контакты</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/media.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
</head>

<body>
	<?php $punkt = 'contacts'; require_once "header.php"; ?>
		<main>
		<div id="contacts">
			<div class="contact_wrap">
				<div class="cont_wrap_left">
					<div class="contact_text">
						<h2>Контакты</h2>
						<p>Общество с ограниченной<br>
							ответственностью «ЭНЕРГО-ЭФФЕКТ»<br>
							610050 г. Киров</p>
					</div>
					<div class="contact_mail">
						<img src="img/mail_hov.png">
							<a href="mailto:Energo-effekt-kirov@yandex.ru">Energo-effekt-kirov@yandex.ru</a>
					</div>
					<div class="contact_phone">
						<img src="img/phone_hov.png">
							<a href="tel:+7(922)664-88-81">+7(922)664-88-81</a>
					</div>
				</div>
			<!--	<div class="contact_applic">
					<p>Для приобретения нашего продукта
						напишите нам и с Вами
						обязательно свяжутся</p>
					<div class="contact_mail">
						<img src="img/mail_hov.png">
						<a href="mailto:Energo-effekt-kirov@yandex.ru">Energo-effekt-kirov@yandex.ru</a>
					</div>
					<div class="contact_phone">
						<img src="img/phone_hov.png">
						<a href="#">+7(922)664-88-81</a>
					</div>
				</div>
			</div>-->
			<div class="contacts_logo">
				<img src="img/cont_logo.png">
			</div>
		</div>
		</main>
	<?php require_once "footer.php"; ?>
</body>
</html>