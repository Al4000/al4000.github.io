<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>ACKYE</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/media.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	
	<link href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
</head>
<body>
		<?php $punkt = 'ackye'; require_once "header.php" ?>
		<main>
			<div class="fotorama" data-transition="slide" data-autoplay="true" data-loop="true">
				<img src="img/slider1.png">
				<img src="img/slider2.png">
				<img src="img/slider3.png">
			</div>
			<div class="ackye">
				<p>- Система предоставляет возможность чтения данных со счетчиков, их хранение на сервере баз
				данных, публикации этих данных в различных представлениях широкой аудитории<br>
				- Система поддерживает прямое обращение к счетчикам для чтения показаний<br>
				- Поддерживаются наиболее распространенные на данный момент протоколы работы счетчиков<br>
				- Система может быть легко расширена для поддержки новых типов счетчиков<br>
				- Система также адаптирована для работы с разными каналами связи
				(выделенная линия, GSM/GPRS модем и т.д.)</p>
			</div>
			<div class="presentation">
				<a href="#" download>
					<div class="pres_btn">Скачать презентацию</div>
				</a>
			</div>
		</main>
		<?php require_once "footer.php"; ?>
</body>
</html>