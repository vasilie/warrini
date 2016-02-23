var images = [], image_interval;
var image_no = 1;
preloadImages();
$(function(){
  if ($.cookie("lightbox")== undefined){
    setTimeout(function(){
      showLightBox();
      var date = new Date();
      var minutes = 1;
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      $.cookie("lightbox", "true",{ expires: date });
    },2000);
  }
});
function showLightBox(){
  image_interval = setInterval(function() {
    image_no++;
    if (image_no > 3){
      image_no = 1;
    }
    $(".lightbox__image img").removeClass('active');
    $(".lightbox__image img:nth-child("+image_no+')').addClass('active');

  },6000);
  $(".lightbox__container").css({'display':"block"});
  $(".lightbox__container").animate({'opacity':"1"},500);
}
function hideLightBox(){
  clearInterval(image_interval);
  $(".lightbox__container").animate({'opacity':"0"},500);
  setTimeout(function(){
    $(".lightbox__container").css({'display':"none"});
  },500);
}
function preloadImages(){
  for (i=1;i<3;i++){
    var image = new Image();
    image.src='assets/img/lightbox/lightbox-image'+i+'.png';
    images.push(image);
  }
}
