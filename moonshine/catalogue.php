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
	<?php $punkt = 'catalogue'; require_once "header.php";
	?>
	<section id="catalog_body">
	<?php require_once "aside.php";
	?>
	<div id="content">
		<div id="title_wrapper">
			<h1>каталог</h1>
		</div>
			<div id="app">
				<a href="details.php"><div class="apprt app1">
					<img src="img/app_cat1.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price1">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app2">
					<img src="img/app_cat2.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price2">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app3">
					<img src="img/app_cat3.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price3">2000p.</div>
					</a>
				</div>
			</div>
			<div id="app">
				<a href="details.php"><div class="apprt app1">
					<img src="img/app_cat1.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price1">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app2">
					<img src="img/app_cat2.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price2">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app3">
					<img src="img/app_cat3.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price3">2000p.</div>
					</a>
				</div>
			</div>
			<div id="app">
				<a href="details.php"><div class="apprt app1">
					<img src="img/app_cat1.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price1">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app2">
					<img src="img/app_cat2.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price2">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app3">
					<img src="img/app_cat3.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price3">2000p.</div>
					</a>
				</div>
			</div>
			<div id="app">
				<a href="details.php"><div class="apprt app1">
					<img src="img/app_cat1.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price1">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app2">
					<img src="img/app_cat2.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price2">2000p.</div>
					</a>
				</div>
				<a href="details.php"><div class="apprt app3">
					<img src="img/app_cat3.png">
					<p>аппарат<br>
					3347B-22</p></a>
					<a href="javascript:PopUpShow()">
						<div class="korz">В корзину</div>
					</a>
					<a href="javascript:PopUpShow()">
						<div class="price3">2000p.</div>
					</a>
				</div>
			</div>
		<div id="counter">
			<a href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
		</div>
	</div>
	</section>
	<?php require_once "basket.php" ?>
	<?php require_once "footer.php" ?>
		
</body>
</html>