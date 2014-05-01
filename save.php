<?php

$db = new mysqli( 'localhost', 'juice', 'drinkup', 'juice_stand' );
if ( $db->connect_errno > 0 ) {
	die( 'Unable to connect to database [' . $db->connect_error . ']' );
}

$_POST['date'] = date( 'Y-m-d', strtotime( $_POST['date'] ) );
$_POST['time'] = date( 'H:i:s', strtotime( $_POST['time'] ) );

$_POST['balance'] = str_replace( '$', '', $_POST['balance'] );
$_POST['price'] = str_replace( '$', '', $_POST['price'] );

$_POST['juice'] = str_replace( ' mL', '', $_POST['juice'] );

$stmt = $db->prepare(
	'UPDATE game SET
		stand_name = ?,
		balance = ?,
		price = ?,
		game_date = ?,
		game_time = ?,
		fruit = ?,
		juice = ?,
		customers = ?
	WHERE id = 1' );

$stmt->bind_param( 'sddssidi',
	$_POST['name'],
	$_POST['balance'],
	$_POST['price'],
	$_POST['date'],
	$_POST['time'],
	$_POST['fruit'],
	$_POST['juice'],
	$_POST['customers']
);
$stmt->execute();
$stmt->close();

header( 'Location: game.php' );