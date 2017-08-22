<?php
	require "db.php";
	$data = $_POST;
	if( isset($data['do_signup']) ){
		$errors = array();
		if(trim($data['login']) == '' ) {
			$errors[] = 'Введите логин';
		}
		if(trim($data['password']) == '' ) {
			$errors[] = 'Введите пароль';
		}
		if( R::count('users2', "login = ?", array($data['login'])) > 0) {
			$errors[] = 'Пользователь с таким логином уже существует';
		}
		if(empty($errors)){
			$user = R::dispense('users2');
			$user->login = $data['login'];
			$user->password = password_hash($data['password'], PASSWORD_DEFAULT);
			R::store($user);
			echo'<div style="color: green;">Пользователь зарегистрирован</div><hr>';
		}else {
			echo'<div style="color: red;">'.array_shift($errors).'</div><hr>';
		}
	}
?>

<form action="signup.php" method="POST">

	<p>
		<p>Ваш логин</p>
		<input type="text" name="login" value="<?php echo @$data['login']; ?>">	
	</p>
	
	<p>
		<p>Ваш пароль</p>
		<input type="text" name="password" value="<?php echo @$data['password']; ?>"
	</p>
	
	<p>
		<button type="submit" name="do_signup">Зарегистрировать</button>
	</p>

</form>