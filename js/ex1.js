/* call function when the html document is loaded */
$(document).ready(function() {
	/* perform action when button is clicked */
    $('button').click(function() {
       	/* get by id (jQuery) */
		/* hide the first block, element accessed by id */
		$('#first').hide();

		/* get by class name (jQuery) */
		/* change the color of blocks with class name as "appear" */
        $('.appear').css('background-color','red');

        /* get by tag name (pure javascript) */
		/* change the height of elements with tag name as "div" */
		$('div').height('400px');
    });
});