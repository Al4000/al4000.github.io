<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Профили мощности</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/media.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="/img/icon.ico" type="image/x-icon">
</head>

<body>
	<?php $punkt = 'power'; require_once "header.php"; ?>
	<main>
		<div class="power_wrap">
			<div class="count_title">
				<h2>Выберите интересующую вас информацию</h2>
			</div>
			<div class="count_btns">
				<div class="enter">
					<a href="counter.php">
						<div class="enter_btn">Показания счетчиков</div>
					</a>
				</div>
				<div class="load">
					<a href="load.php">
						<div class="load_btn">Профили нагрузок</div>
					</a>
				</div>
				<div class="power">
					<a href="power.php">
						<div class="power_btn">Профили мощности</div>
					</a>
				</div>	
			</div>
			<div class="start_date">
				<hr>
				
			</div>
			<div class="date">
				<p>начало опроса</p>
				<select>
					<option>Выберите число</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
					<option>14</option>
					<option>15</option>
					<option>16</option>
					<option>17</option>
					<option>18</option>
					<option>19</option>
					<option>20</option>
					<option>21</option>
					<option>22</option>
					<option>23</option>
					<option>24</option>
					<option>25</option>
					<option>26</option>
					<option>27</option>
					<option>28</option>
					<option>29</option>
					<option>30</option>
					<option>31</option>
				</select>
				<select>
					<option>Выберите месяц</option>
					<option>январь</option>
					<option>февраль</option>
					<option>март</option>
					<option>апрель</option>
					<option>май</option>
					<option>июнь</option>
					<option>июль</option>
					<option>август</option>
					<option>сентябрь</option>
					<option>октябрь</option>
					<option>ноябрь</option>
					<option>декабрь</option>
				</select>
				<select>
					<option>Выберите год</option>
					<option>2010</option>
					<option>2011</option>
					<option>2012</option>
					<option>2013</option>
					<option>2014</option>
					<option>2015</option>
					<option>2016</option>
					<option>2017</option>
					<option>2018</option>
					<option>2019</option>
					<option>2020</option>
				</select>
			</div>
			<div class="end_date">
				
			</div>
			<div class="date">
				<p>конец опроса</p>
				<select>
					<option>Выберите число</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
					<option>14</option>
					<option>15</option>
					<option>16</option>
					<option>17</option>
					<option>18</option>
					<option>19</option>
					<option>20</option>
					<option>21</option>
					<option>22</option>
					<option>23</option>
					<option>24</option>
					<option>25</option>
					<option>26</option>
					<option>27</option>
					<option>28</option>
					<option>29</option>
					<option>30</option>
					<option>31</option>
				</select>
				<select>
					<option>Выберите месяц</option>
					<option>январь</option>
					<option>февраль</option>
					<option>март</option>
					<option>апрель</option>
					<option>май</option>
					<option>июнь</option>
					<option>июль</option>
					<option>август</option>
					<option>сентябрь</option>
					<option>октябрь</option>
					<option>ноябрь</option>
					<option>декабрь</option>
				</select>
				<select>
					<option>Выберите год</option>
					<option>2010</option>
					<option>2011</option>
					<option>2012</option>
					<option>2013</option>
					<option>2014</option>
					<option>2015</option>
					<option>2016</option>
					<option>2017</option>
					<option>2018</option>
					<option>2019</option>
					<option>2020</option>
				</select>		
			</div>
			<div class="get_btns">
				<div class="get_data">
					<a href="get.php">
						<div class="get_btn">Получить данные</div>
					</a>
				</div>
				<div class="save_ex">
					<a href="#" download>
						<div class="get_btn">Сохранить в EX</div>
					</a>
				</div>
				<div class="history">
					<a href="history.php">
						<div class="get_btn">История</div>
					</a>
				</div>
			</div>
		</div>
	</main>
	<?php require_once "footer.php"; ?>
</body>
</html>