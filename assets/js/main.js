function scrollToTop(){
  $("body").animate({scrollTop:0}, '500', 'swing');
}
$(function(){
	var back_to_top = $(".back-to-top"); 
  $(window).scroll(function(){
   	if($(this).scrollTop()>=200){
			back_to_top.addClass("visible");
   	} else {
			back_to_top.removeClass("visible");   	
   	}
    	if ($(this).scrollTop()<=$("body").innerHeight()-848) {
  			back_to_top.addClass("stick");
  		} else {
  			back_to_top.removeClass("stick");
  		}
  });
});