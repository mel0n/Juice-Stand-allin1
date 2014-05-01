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

test( "Fruit Buy", function() {

  var fruit = parseInt(game.$fruit.text())
  game.account_change(180)
  var account = parseFloat(game.$account.text())
  

	game.fruit_buy( 1 );
	equal( game.$fruit.text(), fruit += 1, "Fruit increased by 1" );
  equal( parseFloat(game.$account.text()), account -= 0.3, "Account reduced by 0.30" );
  
  game.fruit_buy( 4 );
	equal( game.$fruit.text(), fruit += 4, "Fruit increased by 4" );
  equal( parseFloat(game.$account.text()), account -= 1, "Account reduced by 1" );
  
  game.fruit_buy( 30 );
	equal( game.$fruit.text(), fruit += 30, "Fruit increased by 30" );
  equal( parseFloat(game.$account.text()), account -= 6, "Account reduced by 6" );
  
  game.fruit_buy( 140 );
	equal( game.$fruit.text(), fruit += 140, "Fruit increased by 140" );
  equal( parseFloat(game.$account.text()), account -= 21, "Account reduced by 21" );

	
} );

test( "Juice Make", function() {

  var fruit = parseInt(game.$fruit.text())
  game.fruit_change(180)
  var juice = parseFloat(game.$juice.text())
  

	game.fruit_buy( 1 );
	equal( game.$fruit.text(), fruit -= 1, "Fruit increased by 1" );
  equal( parseFloat(game.$juice.text()), juice += 1, "Account reduced by 0.30" );
  
  game.fruit_buy( 10 );
	equal( game.$fruit.text(), fruit -= 10, "Fruit increased by 4" );
  equal( parseFloat(game.$juice.text()), account -= 10, "Account reduced by 1" );
  
  game.fruit_buy( game.fruit );
	equal( game.$fruit.text(), fruit -= game.fruit, "Fruit increased by 30" );
  equal( parseFloat(game.$juice.text()), account -= game.fruit, "Account reduced by 6" );
	
} );

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

asyncTest( "Clock", function() {
// Change clock from AM to PM
// Clock stops at 5:00 PM
// increase minutes by 1 every second
// blink : every half a second
	expect( 2 );

  
  game.clock.minute = 59;
  game.clock.hour = 1;
  setTimeout( function() {
		var new_minute2 = game.$minute.text();
    var new_hour = game.$hour.text();

		ok( new_minute2 == 0, "Passed, clock minutewas increased by 1 and reset to 0 at 60" );
    ok( new_hour == 2, "Passed, clock Hour increased by 1" );
		start();
	}, 1100 );
  
  // For some reason this breaks the above test for the hour, it sets the hour to 12 and the first test fails
  // I could not find any other solution to this than to make a bunch of seperate functions
  /*stop();
  
  game.meridiem = "AM";
  game.clock.hour = 11;
  game.clock.minute = 59;
  setTimeout( function() {
		var new_meridiem = game.$meridiem.text();

		ok( new_meridiem == "PM", "Passed, clock meridiem updated at 12:00" );
		start();
	}, 1100 );*/ 
  
});

asyncTest( "Clock Meridiem", function() {
  expect( 1 );
  game.meridiem = "AM";
  game.clock.hour = 11;
  game.clock.minute = 59;
  setTimeout( function() {
		var new_meridiem = game.$meridiem.text();

		ok( new_meridiem == "PM", "Passed, clock meridiem updated at 12:00" );
		start();
	 }, 1100 );
});

asyncTest( "Clock Minutes", function() {
  expect( 1 );
  game.clock.hour = 1;
  game.clock.minute = 1;
  setTimeout( function() {
		var new_minute = game.$minute.text();

		ok( new_minute == 2, "Passed, clock minute increased by 1" );
		start();
	 }, 1100 );
});
asyncTest( "Clock Closing Time", function() { 
  expect( 1 );
  game.meridiem = "PM";
  game.clock.hour = 4;
  game.clock.minute = 59;
  setTimeout( function() {
		var new_minute = game.$minute.text();
    var new_hour = game.$hour.text();

		ok( new_minute == 00 & new_hour == 5, "Passed, clock stopped at 5:00 PM" );
		start();
	 }, 2100 );
});
// Could not get this one to work in console $( '#separator' ).html and $( '#separator' ).text return some crazy shit I dont know.
/*asyncTest( "Clock Separator :", function() {
  expect( 1 );
  game.clock.hour = 1;
  game.clock.minute = 1;
  setTimeout( function() {
		var new_separator = $( '#separator' ).html;

		ok( new_separator == '&nbsp;', "Passed, clock minute increased by 1" );
		start();
	 }, 1100 );
});*/
