$(document).ready(function(){
  //mause posizionato sopra l'elemento
  $('.with-dropdown-menu').mouseenter(function(){
		$(this).find('.menu').toggle(".active");
	});

  $('.with-dropdown-menu').click(function(){
      $(this).find('.menu').toggle(".active");
  })
    
  






})