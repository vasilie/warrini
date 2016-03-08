function slideDown(){
  $(".joe-page").animate({"opacity":"0"},{ queue: false, duration: 500})
                            .animate({"bottom":"0px"},400);
  $(".scroll-container").css({"top":"-6000px"});
  $(".text-slide").animate({"opacity":"1"},0);
  $(".text-slide--first h2").animate({"opacity":"0"},{ queue: false, duration: 500})
                            .animate({"top":"-30px"},400);
  $(".text-slide--first p").animate({"opacity":"0"},{ queue: false, duration: 500})
                           .animate({"top":"-30px"},400);
  $(".text-slide--first .dp-buttons").animate({"opacity":"0"},{ queue: false, duration: 500})
                            .animate({"top":"-30px"},400);
  $(".text-slide--second h2").delay(300).animate({"opacity":"1","top":"0px"},700);
  $(".text-slide--second p").delay(500).animate({"opacity":"1","top":"0px"},700);
  $(".text-slide--second .dp-buttons").delay(700).animate({"opacity":"1","top":"0px"},700);
  $(".screen-img2").delay(900).animate({"top":"-259px"},500);
}
// function slideUp(){
//   $(".joe-page").css({"opacity":"1","bottom":"0px"});
//   $(".scroll-container").css({"top":"0px"});
//   $(".text-slide").css({"color":"white"});
// }
// var scrollTimeout,
//     last_scroll=0,
//     step = 0;
// $(function(){
//   $(window).scroll(function(){
//     if(scrollTimeout){
//          clearTimeout(scrollTimeout);
//     } else {
//       if (isScrollUp() && step != 0){
//         //Scroll Up
//       } else if (!isScrollUp() && step < $(".scroll__section").length()) {
//         //Scroll Down
//       }
//       scrollTimeout = setTimeout(function(){
//
//       }, 100);
//     }
//   });
// });
// var last_scroll = 0;
// function isScrollUp(){
//   var isUp=true,
//       current_scroll=$(this).scrollTop();
//    if(current_scroll < last_scroll) isUp= true;
//    else if(current_scroll > last_scroll) isUp = false;
//    last_scroll=current_scroll;
//    return isUp;
// }
  var $text_container,
      $screen_image,
      $channel;
$(function(){
  $("#scroll-container").fullpage({
    sectionSelector: '.scroll__section',
    fitToSection: true,
    verticalCentered: false,
    scrollingSpeed: 1500,
    loopBottom: false,
    loopTop: false,
     easing: 'easeInOutCubic',
    afterRender: function(){
      $text_container = $(".text-slide");
      $screen_image = $(".screen-container").find("img");
      $channel = $(".channel");
    },
    onLeave: function(index, nextIndex, direction){
      if (direction == 'down'){
        if (index == 1){
          $(".joe-page").animate({"opacity":"0"},{ queue: false, duration: 500})
          .animate({"bottom":"0px"},400);
        }
        $($text_container).removeClass("active");
        $($text_container[index]).addClass("active");
        $($text_container[index-1]).animate({"opacity":"1"},0);
        $($text_container[index-1]).find("h2").animate({"opacity":"0"},{ queue: false, duration: 300})
                                              .animate({"top":"-30px"},300);
        $($text_container[index-1]).find("p").animate({"opacity":"0"},{ queue: false, duration: 300})
                                             .animate({"top":"-30px"},300);
        $($text_container[index-1]).find(".dp-buttons").animate({"opacity":"0"},{ queue: false, duration: 500})
                                             .animate({"top":"-30px"},300);
        $($text_container[index]).find("h2").delay(200).animate({"opacity":"1","top":"0px"},500);
        $($text_container[index]).find("p").delay(500).animate({"opacity":"1","top":"0px"},500);
        $($text_container[index]).find(".dp-buttons").delay(750).animate({"opacity":"1","top":"0px"},500);
        $($channel[index-1]).animate({"top":"-30px","opacity":'0'},500);
        $($channel[index]).animate({"top":"0px","opacity":'1'},500);
        $($screen_image[index]).delay(900).animate({"top":"0"},500);
      } else if (direction=='up'){
        if (index == 2){
          $(".joe-page").delay(500).animate({"opacity":"1", "bottom":"-30px"},400);
        }
        $($text_container[index-1]).find("h2").animate({"opacity":"0"},{ queue: false, duration: 300})
                                              .animate({"top":"30px"},400);
        $($text_container[index-1]).find("p").animate({"opacity":"0"},{ queue: false, duration: 300})
                                             .animate({"top":"30px"},400);
        $($text_container[index-1]).find(".dp-buttons").animate({"opacity":"0"},{ queue: false, duration: 500})
                                             .animate({"top":"30px"},400);
        $($text_container[index-2]).find("h2").delay(300).animate({"opacity":"1","top":"0px"},500);
        $($text_container[index-2]).find("p").delay(500).animate({"opacity":"1","top":"0px"},500);
        $($text_container[index-2]).find(".dp-buttons").delay(700).animate({"opacity":"1","top":"0px"},700);
        $($screen_image[index-1]).delay(900).animate({"top":"102%"},500);
        $($channel[index-1]).animate({"top":"-30px","opacity":'0'},500);
        $($channel[index-2]).animate({"top":"0px","opacity":'1'},500);
      }
    }
  });
});
