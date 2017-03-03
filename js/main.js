function main() {
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    //$(this).next().toggle();
    $('.projects-button').toggleClass('active');
    $(this).text('Project Viewed');
    $(this).next().slideToggle(4000);
  });
}

$(document).ready(main);