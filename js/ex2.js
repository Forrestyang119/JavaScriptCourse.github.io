/* call function when the html document is loaded */
$(document).ready(function() {
	/* test Fade effect */
	/* perform action when fade button is clicked */
    $('#fade').click(function() {
		$('#first').fadeIn(3000);
		$('#second').fadeOut();
		$('#third').fadeTo("slow", 0.5);
    });

	/* test slide effect */
	/* perform action when slide button is clicked */
    $('#slide').click(function() {
		$('#first').slideUp();
		$('#second').slideDown();
		$('#third').slideToggle();
    });

   	/* test animate effect */
	/* perform action when animate button is clicked */
    $('#animate').click(function() {
    	/* By default, all HTML elements have a static position, and cannot be moved. 
    	To manipulate the position, remember to first set the CSS position property 
    	of the element to relative, fixed, or absolute*/
		$('#third').animate({top: '+=250px'});
    });

});