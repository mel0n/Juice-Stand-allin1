// override colorbox to not do anything
$.colorbox = function(){};

test( "Price set", function() {
	expect( 4 );

	game.price_set( 1 );
	equal( game.$price.text(), '1.00', "Integer price set with decimal" );

	game.price_set( 2.25 );
	equal( game.$price.text(), '2.25', "Integer price set with double" );

	game.price_set( 3.251 );
	equal( game.$price.text(), '3.25', "Integer price set with double, rounded down on partial cents" );

	game.price_set( 4.256 );
	equal( game.$price.text(), '4.26', "Integer price set with double, rounded up on partial cents" );
} );

// @TODO: homework 8 - add more tests!

asyncTest( "Pause", function() {
	expect( 3 );

	game.pause();
	ok( game.paused == true, "Passed, pause state." );
	ok( game.clock.interval == false, "Passed, clock stop state." );

	var minute = game.$minute.text();
	setTimeout( function() {
		var new_minute = game.$minute.text();

		ok( new_minute == minute, "Passed, clock is not changing." );
		start();
		game.unpause();
	}, 1100 );
});
