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
</head>
<body>
	<?php $punkt = 'about'; require_once "header.php";
	?>
		<div id="about_about">
			<h1>о компании</h1>
		</div>
		<div id="preim">
			<div class="adv1">
				<div class="preim_1_left">
					<h2>Преимущества использования аппарата</h2>
					<p>Минипивоварня — это настоящий пивной заводик на дому. Домашняя мини пивоварня дарит редкую возможность примерить на себя почетную профессию пивовара. Преимущества такого агрегата для дома очевидны:
					Вы сами следите за качеством сырья и расходных материалов и точно знаете из чего сделано ваше пиво. Больше никаких консервантов и другой «химии»</p>
				</div>
				<div class="preim_1_img">
					<img src="img/tekila_24.png">
				</div>
			</div>
			<div class="adv2">
				<div class="preim_2_img">
					<img src="img/nap.png">
				</div>
				<div class="preim_2_right">
					<h2>Преимущества использования аппарата</h2>
					<p>Минипивоварня — это настоящий пивной заводик на дому. Домашняя мини пивоварня дарит редкую возможность примерить на себя почетную профессию пивовара. Преимущества такого агрегата для дома очевидны</p>
				</div>
			</div>
			<div class="adv3">
				<div class="preim_3_left">
					<h2>Преимущества использования аппарата</h2>
					<p>Минипивоварня — это настоящий пивной заводик на дому. Домашняя мини пивоварня дарит редкую возможность примерить на себя почетную профессию пивовара. Преимущества такого агрегата для дома очевидны:
					Вы сами следите за качеством сырья и расходных материалов и точно знаете из чего сделано ваше пиво. Больше никаких консервантов и другой «химии»</p>
				</div>
				<div class="preim_3_img">
					<img src="img/vodochka.png">
				</div>
			</div>
		</div>
		
		<?php require_once "basket.php" ?>
		
		<?php require_once "footer.php" ?>
		
</body>
</html>