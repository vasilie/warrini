function scrollToTop(){
  var duration = 1500; //default
  duration = $(window).scrollTop() /2.750+250;
  $("body,html").animate({scrollTop:0}, duration , 'swing');
}
$(function(){
	var back_to_top = $(".back-to-top");
  $(window).scroll(function(){
   	if($(this).scrollTop()>=200){
			back_to_top.addClass("visible");
   	} else {
			back_to_top.removeClass("visible");
   	}
  	if ($(this).scrollTop()<=$("body").innerHeight()-837) {
			back_to_top.addClass("stick");
		} else {
			back_to_top.removeClass("stick");
		}
  });
});