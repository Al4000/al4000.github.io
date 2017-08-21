<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Начало работы</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/media.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	
</head>
<body>
	<?php $punkt = 'login'; require_once "header.php" ?>

	<main>
		<div class="login_wrap">
			<div class="big_logo">
				<img src="img/big_logo.png" alt="Энергоэффект">
				<p>ДЛЯ НАЧАЛА РАБОТЫ ВВЕДИТЕ СВОЙ ЛОГИН И ПАРОЛЬ<br>
				И НАЧИНАЙТЕ ЭКОНОМИТЬ СВОИ ДЕНЬГИ</p>
			</div>
			<div class="buttons">
				<form action="login.php" method="POST">
					<div class="login">
						<input type="text" placeholder="Логин" name="login" value="<?php echo @$data['login']; ?>">	
					</div>	
					<div class="password">
						<input type="password" placeholder="Пароль" name="password" value="<?php echo @$data['password']; ?>">
					</div>	
					<div class="enter">
						<div class="enter_btn">
							<button type="submit" name="do_login">Войти</button>
						</div>
					</div>	
				</form>
<?php
	require "db.php";
	$data = $_POST;
	if( isset($data['do_login']) )
{
	$errors = array();
	$user = R::findOne('users2', 'login = ?', array($data['login']));
		if ( $user )
		{
			if( password_verify($data['password'], $user->password))
			{
				header ('Location: counter.php');
  				exit();
			} else
			{
				$errors[] = 'Неверный пароль';
			}
		} else
			{
				$errors[] = 'Пользователь с таким логином не существует';
			}	
			if( ! empty($errors) )
			{
				echo'<div id="error_mes">'.array_shift($errors).'</div>';
			}
}
?>
			</div>
			<div class="login_text">
				<hr>
				<p>Если вы ещё не приобрели наш продукт, напишите нам и<br>
				с Вами обязательно свяжутся</p>
			</div>
			<div class="contact_mail">
				<img src="img/mail_hov.png">
				<a href="mailto:Energo-effekt-kirov@yandex.ru">Energo-effekt-kirov@yandex.ru</a>
			</div>
			<!--<div class="show_price">
				<a href="price.php">
					<div class="price_btn">Посмотреть прайс</div>
				</a>
			</div>-->
		</div>
	</main>
	<?php require_once "footer.php"; ?>
</body>
</html>