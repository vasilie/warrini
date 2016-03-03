function slideDown(){
  $(".joe-page").css({"opacity":"0","bottom":"0px"},500);
  $(".scroll-container").css({"top":"-6000px"});
  $(".text-slide").animate({"opacity":"1"},0);
  $(".text-slide--first h2").animate({"opacity":"0"},{ queue: false, duration: 700})
                            .animate({"top":"-30px"},500);
  $(".text-slide--first p").animate({"opacity":"0"},{ queue: false, duration: 700})
                           .animate({"top":"-30px"},500);
  $(".text-slide--second h2").delay(300).animate({"opacity":"1","top":"0px"},600);
  $(".text-slide--second p").delay(500).animate({"opacity":"1","top":"0px"},600);
}
function slideUp(){
  $(".joe-page").css({"opacity":"1","bottom":"0px"});
  $(".scroll-container").css({"top":"0px"});
  $(".text-slide").css({"color":"white"});
}
