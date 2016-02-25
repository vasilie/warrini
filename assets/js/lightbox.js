var image_interval,
    image_no = 0;
$(function(){
  if ($.cookie("lightbox")== undefined){
    setTimeout(function(){
      showLightBox(500);
      var date = new Date();
      var minutes = 1;
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      $.cookie("lightbox", "true",{ expires: date });
    },2000);
  }
});
function showLightBox(speed){
  switchImages(6000);
  $(".lightbox__container").css({'display':"block"});
  $(".lightbox__container").animate({'opacity':"1"},speed);
}
function hideLightBox(speed){
  clearInterval(image_interval);
  $(".lightbox__container").animate({'opacity':"0"},speed);
  setTimeout(function(){
    $(".lightbox__container").css({'display':"none"});
  },speed);
}
function switchImages(intervalDuration){
  if ($(window).outerWidth()> 1024){
    var additionalClass = '.desk'
  } else {
    var additionalClass = '.mobile'
  }

  var image__container = $(".lightbox__image-container"+additionalClass),
      images = $(image__container).find("img"),
      img_length = images.length;

  image_interval = setInterval(function() {
    image_no++;
    if (image_no > img_length-1){
      image_no = 0;
    }
    $(images).removeClass('active').addClass("inactive");
    $(images[image_no]).removeClass('inactive').addClass('active');
    $(image__container).find("img.inactive").animate({"opacity":"0"},2000);
    $(image__container).find("img.active").animate({"opacity":"1"},2000);
  },intervalDuration);
}
