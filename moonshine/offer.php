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
	<link href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
	<script>
		$(document).ready(function(){
    		PopUpShow();
   				});
			function PopUpShow(){
					$("#offer_popup").show();
				}
			function PopUpHide(){
				$("#offer_popup").hide();
			}
	</script>
	<script>
		$(document).ready(function(){
			$("select[name='country']").bind('change', function() {
				$("select[name='city']").empty();
				$.get('countryCheck.php', {country: $("select[name='country']").val()}, function(data) {
					data = JSON.parse(data);
					for(var id in data) {
						$("select[name='city']").append($("<option value='" + id + "'>" + data[id] + "</option>"));
					}
				});
			});
		});
	</script>
</head>
<body>
	<?php $punkt = 'index'; require_once "header.php" ?>
	<main id="offer_main">
		<div class="fotorama" data-transition="crossfade" data-autoplay="true" data-loop="true">
			<img src="img/slider1_2.jpg">
			<img src="img/slider2_2.jpg">
		</div>
		<div class="offers">
			<p>
				<img src="img/offers03.png">
			</p>
		</div>
		<div class="offer" id="offer_popup">
			<div id="offer_content">
				<div id="offer_head">
					<img src="img/korz_white.png">
					<p>Оформление заказа</p>
					<a href="#" class="clear">очистить корзину</a>
					<a href="javascript:PopUpHide()"><img src="img/krest.png"></a>
				</div>
				<div id="offer_goods">
					<div class="offer_apps">
						<!-- <div class="rekv">
							
						</div> -->
						<div class="fields">
							<div class="name_field">
								<p>Имя</p>
								<input type="text" placeholder="" id="offer_name" name="offer_name">
							</div>
							<div class="phone_field">
								<p>Телефон</p>
								<input type="tel" placeholder="" id="offer_name" name="offer_phone">
							</div>
							<div class="email_field">
								<p id="email">E-mail</p>
								<input type="email" placeholder="" id="offer_name" name="offer_email">
							</div>
							<select name="country">
								 <option value="0">Выберите страну</option>
								 <option value="1">Россия</option>
								 <option value="2">США</option>
							</select>
							<select name="city">
								 <option value="0"></option>
								//  <option value="0">Выберите город</option>
								//  <option value="1">Москва</option>
								//  <option value="2">Санкт-Петербург</option>
								//  <option value="3">Нью-Йорк</option>
							</select>
							<div class="adress_field">
								<p id="adress">Адрес</p>
								<textarea type="textarea" placeholder="" id="offer_adress" name="offer_adress"></textarea>
							</div>						
						</div>
					</div>
					<div class="offer_price">
						<p>Cумма заказа: </p>
						<p>Cумма доставки: </p>
						<h2>ИТОГО: </h2>
						<a href="#">
						<div class="zakaz">Заказать</div></a>
					</div>
				</div>
			</div>
		</div>
	</main>
	<?php require_once "footer.php" ?>
		
</body>
</html>
