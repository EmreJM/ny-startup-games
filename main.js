$.mobile.defaultPageTransition = "flow";

$( document ).ready(function() {
	$( "#pauseMenu, #credits" ).popup();
})

$( document ).on( "pagecontainershow", $.mobile.pageContainer, function ( e, ui ) {
	if ($.mobile.activePage.attr('id') == "mainmenu") {
		$("#menubutton").hide();
	}
	else {
		$("#menubutton").show();
	}
});