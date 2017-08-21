<header id="header">
	<div class="inner_header">
	    <div id="logo">
			<a href="index.php"><img src="img/logo_head.png"></a>
		</div>
		<div id="tlf">
			<p>тел: 23-23-23<br>
			самогонные аппараты по доступным ценам</p>
		</div>
		<div id="v_korz">
			<a href="javascript:PopUpShow()">в корзине</a>
		</div>
		<div id="korz">
			<a href="javascript:PopUpShow()"><img src="img/korz.png"></a>
		</div>
	</div>
</header>
<nav>
  	<ul class="top_menu">
       	<li id="cat"><a <?php if ($punkt == 'catalogue') {echo 'class = "active"';}?> href="catalogue.php">КАТАЛОГ</a></li>
        <li id="about"><a <?php if ($punkt == 'about') {echo 'class = "active"';}?> href="about.php">О КОМПАНИИ</a>
        	<ul class="inside">
 				<li id="news_li"><a href="news.php">Новости</a></li>
 				<li id="price_li"><a href="buy.php">Оптовое предложение</a></li>
       		</ul>
        </li>
       	<li id="recept"><a <?php if ($punkt == 'recept') {echo 'class = "active"';}?> href="recept.php">РЕЦЕПТЫ И ВИДЕОУРОКИ</a></li>
        <li id="buy"><a <a <?php if ($punkt == 'buy') {echo 'class = "active"';}?> href="buy.php">ОПЛАТА И ДОСТАВКА</a></li>
        <li id="contact"><a <?php if ($punkt == 'contacts') {echo 'class = "active"';}?> href="contacts.php">КОНТАКТЫ</a></li>
   	</ul>
</nav> 