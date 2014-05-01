$( function() {
	$( document ).on( "click", "#sign-up-link, #sign-in-link", function( e ) {
		e.preventDefault();

		$("#sign-up-form").toggle();
		$("#sign-in-form").toggle();
	} );

	// @TOOD: homework #6 - validate the submitted form data here
} );