$(document).ready(function(){
  //mause posizionato sopra l'elemento
  $('.with-dropdown-menu').mouseenter(function(){
		$(".menu").removeClass("active");
    $(this).children(".menu").addClass("active");
	});

  $('.with-dropdown-menu').click(function(){
      $(this).find('.menu').toggle(".active");
  })
    
})