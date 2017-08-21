<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Прайс</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/media.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
</head>

<body>
	<?php $punkt = 'price'; require_once "header.php"; ?>
	<main>
		<div id="price">
			<div class="price_wrap">
				<div class="price_text">
					<h2>Прайс</h2>
					<p>Стоимость одного объекта (школа, д/сад,
						больница) в системе составляет от
						(зависит от наличия интеллектуальных
						приборов учета)<br><br>
						<span>15 000</span> руб.<br><br>
						С предоставлением всей информации потребителю и заинтересованным органам
						через Интернет.</p>
				</div>
				<div class="price_applic">
					<p>Для приобретения нашего продукта
						напишите нам и с Вами
						обязательно свяжутся</p>
					<div class="price_mail">
						<img src="img/mail_green.png">
						<a href="mailto:Energo-effekt-kirov@yandex.ru">Energo-effekt-kirov@yandex.ru</a>
					</div>
					<div class="price_phone">
						<img src="img/phone_green.png">
						<a href="#">+7(922)664-88-81</a>
					</div>
				</div>
			</div>
			<div class="economy">
					<h3>Экономия до 30% от стоимости годового энергопотребления</h3>
					<p>Окупаемость затрат на создание системы происходит за <span>2-3</span> квартала</p>
				</div>
				<div class="economy_icon">
					<img src="img/ec1.png" id="water">
					<img src="img/ec2.png">
					<img src="img/ec3.png">
					<img src="img/ec4.png">
				</div>
			</div>
		</div>
	</main>
	<?php require_once "footer.php"; ?>
</body>
</html>