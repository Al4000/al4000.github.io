<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Самогонщики</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/media.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="libs/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="shortcut icon" href="img/icon.ico" type="image/x-icon">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script>
		$(document).ready(function(){
    		PopUpHide();
   				});
			function PopUpShow(){
					$("#basket_popup").show();
				}
			function PopUpHide(){
				$("#basket_popup").hide();
}
		</script>
		<script>
		$(document).ready(function() {

			$("#form").submit(function() {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
					$("#form").trigger("reset");
				});
				return false;
			});
		});
	</script>
</head>
<body>
	<?php $punkt = 'buy'; require_once "header.php"; require_once "basket.php";
	?>
		<div id="buy_body">
			<div id="buy_title">
				<div class="buy_title_left">
					<h1>Оптовое предложение</h1>
					<a href="xls/Прайс.xlsx" download>
						<div class="download">скачать прайс</div>
					</a>
				</div>
			</div>
			<div id="buy_text">
				<p><span>Уважаемые клиенты!</span> Наш магазин может предложить вам оптовые закупки самогонных аппаратов по доступным ценам и самым выгодным условиям<br>На выходе получается непастеризованным и нефильтрованным;<br> Процедура приготовления достаточно проста. Процесс пивоварения проходит при комнатной температуре</p>
			</div>
			<div id="buy_icon">
				<div class="buy_card">
					<img src="img/opt1.png">
					<p>Поставки напрямую от производителя</p>
				</div>
				<div class="buy_card">
					<img src="img/opt2.png">
					<p>только рабочие бренды и продукты</p>
				</div>
				<div class="buy_card">
					<img src="img/opt3.png">
					<p>оплата любым способом</p>
				</div>
				<div class="buy_card">
					<img src="img/opt4.png">
					<p>оперативная отгрузка<br>работаем с любыми тк</p>
				</div>
				<div class="buy_card">
					<img src="img/opt5.png">
					<p>оплата любым способом</p>
				</div>
			</div>
			<!-- <div id="buy_desc">
				<div class="p">Поставки напрямую от производителя</div>
				<div class="p"></div>
				<div class="p"></div>
				<div class="p"></div>
				<div class="p"></div>
			</div> -->
		</div>
		<div id="bid">
			<div id="form">
				<p>оставьте заявку на оптовый прайс</p>
				<div class="name">
					<input type="text" placeholder="Имя" id="name" name="name"><br>
				</div>
				<div class="phone">
					<input type="text" placeholder="Телефон" id="phone" name="phone"><br>
				</div>
				<div class="button">
					<button id="done">Оставить заявку</button>
					<!-- <input type="button" name="done" id="done" value="Оставить заявку"> -->
				</div>
				<!-- <input type="button" id="check" value="Check!" /> -->
			</div>
				<div id="info"></div>
		</div>
	<?php require_once "footer.php"
	?>
		
</body>
</html>
