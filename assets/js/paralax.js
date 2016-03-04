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
function slideUp(){
  $(".joe-page").css({"opacity":"1","bottom":"0px"});
  $(".scroll-container").css({"top":"0px"});
  $(".text-slide").css({"color":"white"});
}
