<header>
		<div class="logo">
			<a href="index.php"><img src="img/small_logo.png" alt="Энергоэффект"></a>
		</div>
		<nav>
			<ul class="top_menu">
				<li id="home"><a <?php if ($punkt == 'home') {echo 'class = "active"';}?> href="index.php">ГЛАВНАЯ</a></li>
				<li id="ackye"><a <?php if ($punkt == 'ackye') {echo 'class = "active"';}?> href="ackye.php">ACKYE</a>
				</li>
				<li id="price"><a <?php if ($punkt == 'price') {echo 'class = "active"';}?> href="price.php">ПРАЙС</a></li>
				<li id="contact"><a <?php if ($punkt == 'contacts') {echo 'class = "active"';}?> href="contacts.php">КОНТАКТЫ</a></li>
			</ul>
		</nav> 
		<div class="logo_lk">
			<a href="login.php"></a>
		</div>
</header>