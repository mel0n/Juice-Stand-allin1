$( function() {
	game = {};

	game.init = function() {
		game.clock_reset();
		game.clock.interval = window.setInterval( game.clock_update, game.clock.delay );
	};

	game.clock_reset = function() {
		game.clock = {
			hour: 8,
			minute: 0,
			meridiem: 'AM',
			count: 0,
			pad: '00',
			delay: 500,
			speed: 2,
			increment: 1
		};
	};

	game.clock_update = function() {
		game.clock.count += game.clock.delay;

		if ( game.clock.count % ( game.clock.delay * game.clock.speed ) ) {
			$( '#separator' ).html( '&nbsp;' );

			game.clock.minute += game.clock.increment;
			if ( 60 <= game.clock.minute ) {
				game.clock.minute = 0;
				game.clock.hour++;

				if ( 12 == game.clock.hour ) {
					if ( 'AM' == game.clock.meridiem ) {
						game.clock.meridiem = 'PM';
					}
					else {
						game.clock.meridiem = 'AM';
					}
				}
				else if ( 13 <= game.clock.hour ) {
					game.clock.hour = 1;
				}
				else if ( 5 == game.clock.hour && 'PM' == game.clock.meridiem ) {
					console.log( 'Closing time!');
					clearInterval( game.clock.interval );
				}
			}

			$( '#hour' ).html( game.clock.hour );
			$( '#minute' ).html( game.clock_padded_minute() );
			$( '#meridiem' ).html( game.clock.meridiem );
		}
		else {
			$( '#separator' ).html( ':' );
		}
	};

	game.clock_padded_minute = function() {
		var minute_string = "" + game.clock.minute;
		return game.clock.pad.substring( 0, game.clock.pad.length - minute_string.length ) + minute_string;
	};

	game.init();
});