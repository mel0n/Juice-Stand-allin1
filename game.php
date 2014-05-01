<?php
$data = file( 'data.txt' );
foreach ( $data as $line )
{
	list( $key, $value ) = explode( ':', trim( $line ) );
	$$key = $value;
}// end foreach

?><html>

	<head>
		<title>Juice Stand</title>
		<link rel="stylesheet" type="text/css" href="game.css"/>
		<link href='http://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="game.js"></script>
	</head>

	<body>
		<header>
			<h1>Juice Stand</h1>
		</header>

		<div id="wrapper">
			<div id="game">
				<section>
					<div id="stand">
						<i class="fa fa-home"></i>
						<p><?php echo $name; ?></p>
					</div>
					<div id="account">
						<i class="fa fa-money"></i>
						<h2>Bank Account</h2>
						<img src="">
						<p>$<?php echo number_format( $balance, 2 ); ?></p>
					</div>
					<div id="price">
						<i class="fa fa-credit-card"></i>
						<h2>Price</h2>
						<p>$<?php echo number_format( $price, 2 ); ?></p>
					</div>
					<div id="updates">
						<i class="fa fa-bullhorn"></i>
						<p>
						+ $0.50 satisfied customer<br />
						- $100 fine (food poisoning)<br />
						</p>

					</div>
				</section>

				<section>
					<div id="date">
						<i class="fa fa-calendar"></i>
						<h2><?php echo date( 'M dS', strtotime( $starting ) ); ?></h2>
						<p><span id="hour">8</span><span id="separator">:</span><span id="minute">00</span> <span id="meridiem">AM</span></p>
					</div>
					<div id="inventory">
						<i class="fa fa-lemon-o"></i>
						<h2>Fruit</h2>
						<p><?php echo $fruit; ?></p>
					</div>
					<div id="product">
						<i class="fa fa-tint"></i>
						<h2>Juice</h2>
						<p><?php echo number_format( $juice, 3 ); ?>  mL</p>
					</div>
					<div id="customers">
						<i class="fa fa-users"></i>
						<h2>Customers</h2>
						<p><?php echo $customers; ?></p>
					</div>
				</section>
			</div>
		</div>

		<footer>
			&copy; <?php echo date('Y'); ?> Octopod Games
		</footer>
	</body>
</html>