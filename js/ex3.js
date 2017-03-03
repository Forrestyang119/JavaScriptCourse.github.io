/* call function when the html document is loaded */
$(document).ready(function() {
	/* click */
	$('#first').click(function(){
		$(this).slideToggle();
	});

	/* mourseenter */
	$('#second').mouseenter(function(){
		$(this).slideToggle();
	});

	/* mourseenter */
	$('#second').mouseleave(function(){
		$(this).slideToggle();
	});

	/* hover */
	$('#third').hover(function(){
		$(this).slideToggle();
	});

	/* dblclick */
	$('#fourth').dblclick(function(){
		$(this).slideToggle();
	});


});