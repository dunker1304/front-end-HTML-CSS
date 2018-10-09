 $(function(){
	$(window).scroll(function(){
		vitrihientai=$('body').scrollTop() ;
		console.log(vitrihientai) ;
		 if (vitrihientai > 100){
		 	$('.navbar-fixed-top').addClass('biendoimenu') ;}
		 if (vitrihientai < 100){
		 	$('.navbar-fixed-top').removeClass('biendoimenu');}
	}) 
	$('.btn btn-circle page-scroll').click(function(){
		$('body').animate({scrollTop:$('.download').offset().top});
		return false;
	})

	$('.download .btn.btn-default').click(function(){
		$('body').animate({scrollTop:$('.contact').offset().top},2000,"easeInBack") ;
		return	false;
	})

	$('.grayscale span.fa.fa-angle-double-down.animated').click(function(){
		$('body').animate({scrollTop:$('.download').offset().top}) ;
		return false ;

	$('[hieuung="popover"]').popover() ;
	$('[hieuung="tooltip"]').tooltip() ; 
})  
 