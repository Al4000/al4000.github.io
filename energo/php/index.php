<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>ЭНЕРГОЭФФЕКТ</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/media.css" rel="stylesheet" type="text/css">
	<link href="css/animate.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>

<body class="animated fadeIn">
	<?php require "db.php"; ?>
	<?php $punkt = 'home'; require_once "header.php"; ?>
	<main>
		<div id="beginning">
			<div class="big_logo">
				<img src="img/big_logo.png">
			</div>
			<div class="main_title">
				<h2>ЭНЕРГОСБЕРЕЖЕНИЕ ДЛЯ ВАШЕГО БИЗНЕСА</h2>
				<p>КЛЮЧЕВОЙ ИНДИКАТОР ПОВЫШЕНИЯ<br>
					ЭНЕРГЕТИЧЕСКОЙ ЭФФЕКТИВНОСТИ -<br>
					СНИЖЕНИЕ ЭНЕРГОЕМКОСТИ ПОТРЕБЛЕНИЯ</p>
			</div>
			<div class="begin">
				<a href="login.php">
					<div class="begin_btn">Начать работу</div>
				</a>
			</div>
			<div class="offers">
				<hr>
				<div class="left_offer">
					<img src="img/phare.png" alt="маяк">
					<h3>СОВЕРШЕНСТВОВАНИЕ ТЕХНОЛОГИЙ<br>
						ПРОИЗВОДСТВА</h3>
					<p>Ключевой индикатор повышения
						энергетической эффективности -
						снижение энергоемкости потребления</p>
				</div>
				<div class="right_offer">
					<img src="img/index_up.png" alt="индекс">
					<h3>ПОЛУЧЕНИЕ МАКСИМАЛЬНОЙ<br>
						ПРИБЫЛИ</h3>
					<p>Снижение затрат напрямую влияет на
						рентабельность работы предприятия и
						является одним из рычагов управления
						конкурентоспособностью</p>
				</div>
				<!--<div class="arrow">
					<img src="img/arrow_down.png">
				</div>-->
			</div>
		</div>
		<div id="about">
			<div class="about_title">
				<!--<img src="img/foudre.jpg">-->
				<h2>О компании</h2>
				<!--<img src="img/foudre.jpg">-->
			</div>
			<div class="about_text">
				<p>ООО «Энерго Эффект» представляет на рынке информационных<br>
				технологий услуги по созданию, наладке и монтажу систем мониторинга<br>
				потребления энергоресурсов.</p>
			</div>
			<div class="since">
				<p>на рынке с 2009 года</p>
			</div>
			<hr>
			<div class="economy">
				<h3>Экономия до 30% от стоимости годового энергопотребления</h3>
				<p>Окупаемость затрат на создание системы происходит за <span>2-3</span> квартала</p>
			</div>
			<div class="economy_icon">
				<img src="img/ec1.png" id="water" alt="водоснабжение">
				<img src="img/ec2.png" alt="газ">
				<img src="img/ec3.png" alt="электроэнергия">
				<img src="img/ec4.png" alt="теплоэнергия">
			</div>
		</div>
		<div id="automatic">
			<div class="auto_hov">
				<div class="logo_auto">
					<img src="img/auto_logo.png">
				</div>
				<div class="system">
					<p>АВТОМАТИЧЕСКАЯ СИСТЕМА УЧЁТА ЭЛЕКТРОЭНЕРГИИ</p>
				</div>
				<div class="more_auto">
					<a href="ackye.php">
						<div class="more_auto_btn">далее</div>
					</a>
				</div>
			</div>
		</div>
		<div id="economical">
			<div class="econ_hov">
				<div class="logo_econ">
					<img src="img/econ_logo.png">
				</div>
				<div class="effect_econ">
					<p>АВТОМАТИЧЕСКАЯ СИСТЕМА УЧЁТА ТЕПЛА</p>
				</div>
				<div class="more_econ">
					<a href="ackye.php">
						<div class="more_econ_btn">далее</div>
					</a>
				</div>
			</div>
		</div>
		<div id="slide">
			<div class="slide_hov">
				<div class="logo_econ">
					<img src="img/slide_logo.png">
				</div>
				<div class="effect_econ">
					<p>АВТОМАТИЧЕСКАЯ СИСТЕМА УЧЁТА ВОДЫ</p>
				</div>
				<div class="more_econ">
					<a href="ackye.php">
						<div class="more_econ_btn">далее</div>
					</a>
				</div>
			</div>
		</div>
		
		<div id="methods">
			<div class="methods_title">
				<h2>МЕТОДЫ СОКРАЩЕНИЯ<br>
				 РАСХОДОВ НА ЭЛЕКТРОРЕСУРСЫ</h2>
			</div>
			<div class="consom">
				<div class="consom_image">
					<img src="img/foudre_big.png" alt="молния">
				</div>
				<div class="band">
					<img src="img/band.png">
				</div>
				<div class="consom_text">
					<h2>Получение полной картины расхода электроэнергии, тепла, воды</h2>
					<!--<p>Снижение затрат напрямую влияет на<br>
						рентабельность работы предприятия и<br>
						является одним из рычагов управления<br>
						конкурентоспособностью</p>-->
				</div>
			</div>		
			<div class="temps">
				<div class="temps_text">
					<h2>Прогнозирование и управление потреблением<br>
					энергоресурсов на всех этапах производства</h2>
					<p>Решение технических, технико-экономических и<br>
					статистических задач на всех уровнях иерархии<br>
					управления энергетическим производством<br>
					по суточным графикам энергопотребления</p>
				</div>
				<div class="band">
					<img src="img/band.png">
				</div>
				<div class="temps_image">
					<img src="img/sun_big.png">
				</div>
			</div>
			<div class="analyse">
				<div class="analyse_image">
					<img src="img/loupe_big.png">
				</div>
				<div class="band">
					<img src="img/band.png">
				</div>
				<div class="analyse_text">
					<h2>Возможность анализа полученной информации</h2>
					<p>Выявление потерь энергоресурсов и проведение<br>
					мероприятий по их минимизации.</p>
				</div>
			</div>
			<div class="presentation">
				<a href="#" download>
					<div class="pres_btn">Скачать презентацию</div>
				</a>
			</div>
		</div>
	</main>
	<?php require_once "footer.php"; ?>
	<!--<script>
	   $(window).scroll(function() {
		$('.mov').each(function(){
		  var imagePos = $(this).offset().top;
		  var topOfWindow = $(window).scrollTop();
		  if (imagePos < topOfWindow+400) {
			$(this).addClass('pulse');
		  }
		});
	  });
	</script>

	<!--<script>
		$(document).ready(function(){
		    $('#automatic').mouseenter(function(){
		        $('.auto_hov').fadeTo('slow', 1);
		        });
		    $('#automatic').mouseleave(function(){
		        $('.auto_hov').fadeTo('fast', 0);
		        });
		   
			$('#economical').mouseenter(function(){
		        $('.econ_hov').fadeTo('slow', 1);
		        });
		    $('#economical').mouseleave(function(){
		        $('.econ_hov').fadeTo('slw', 0);
		        });
		    
			$('#slide').mouseenter(function(){
		        $('.slide_hov').fadeTo('slow', 1);
		        });
		    $('#slide').mouseleave(function(){
		        $('.slide_hov').fadeTo('slow', 0);
		        });
		    }) ;

		</script>->>
</body>
</html>