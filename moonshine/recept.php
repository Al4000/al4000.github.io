<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Самогонщики</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/media.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="libs/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="shortcut icon" href="img/icon.ico" type="image/x-icon">
   	<link rel="stylesheet" type="text/css">
   	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   	<link href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
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
</head>
<body>
	<?php $punkt = 'recept'; require_once "header.php";
	?>
		<div id="title_recept">
			<h1>Рецепты и видеоуроки</h1>
		</div>
		<div id="recept_slide">
 			<div class="fotorama" data-transition="crossfade" data-autoplay="true" data-loop="true" data-nav="thumbs">>
  			<img src="img/slider_01.jpg">
 			<img src="img/slider_02.jpg">
 			<img src="img/slider_03.jpg">
 			<img src="img/slider_04.jpg">
 			<img src="img/slider_05.jpg">
 			</div>
		</div>
		<!--<div id="vidy">
			<h2>виды напитков</h2>
		</div>
		<div id="slider_nap">
			<div class="whiskarik"><img src="img/whis1.png"></div>
			<div class="brandy"><img src="img/whis2.png"></div>
			<div class="martini"><img src="img/whis3.png"></div>
			<div class="rom"><img src="img/whis4.png"></div>
			<div class="chivas"><img src="img/whis5.png"></div>
		</div>
		<div id="podpis_nap">
			<div class="whiskarik"><p>вискарик</p></div>
			<div class="brandy"><p>бренди</p></div>
			<div class="martini"><p>мартини</p></div>
			<div class="rom"><p>ром</p></div>
			<div class="chivas"><p>чивас</p></div>
		</div>-->
		<div id="video_nap">
        	<iframe width="300" height="200" src="https://www.youtube.com/embed/mawIr64IjT8" frameborder="0" allowfullscreen></iframe>
			<div class="opsn">
	        	<h3>Видеоурок</h3>
	      		<p>описание описание<br>
	      		описание описание<br>
	      		описание</p>
      		</div>
      	</div>
      
      	<div id="preim_recept">
      		<h2>Преимущества использования аппарата для домашней варки пива</h2>
        		<p>Домашняя мини-пивоварня — это настоящий пивной заводик на дому. Домашняя мини-пивоварня дарит редкую возможность примерить на себя почетную профессию пивовара. Преимущества такого агрегата для дома очевидны:<br>- Вы сами следите за качеством сырья и расходных материалов и точно знаете из чего сделано ваше пиво<br>- Больше никаких консервантов и другой «химии»<br>- Домашняя пивоварня не займет в доме много места<br>- Мини-пивоварня при создании пенного напитка использует классическую технологию приготовления пива. Напиток на выходе получается непастеризованным и нефильтрованным<br>- Процедура приготовления достаточно проста<br>- Процесс пивоварения проходит при комнатной температуре и не требует особого контроля за процессом брожения.</p>
      	</div>

		<?php require_once "footer.php" ?>
		<?php require_once "basket.php" ?>
		
</body>
</html>