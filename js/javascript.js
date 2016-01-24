

//démarrer la video, nouvelle page
var initVideo = function () {
         
            $('.button-play-intro').click(function () {
                $('.video-container').removeClass('hidden').append('<iframe width="95%" height="100%" src="https://www.youtube.com/embed/-rznIywWkjA?autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
                $('.button-stop-spot').removeClass('hidden');
                $('body').css('overflow','hidden');


            });

            $('.button-stop-spot').click(function (event) {
                $('.video-container').addClass('hidden').find('iframe').remove();
                $('.button-stop-spot').addClass('hidden');
                $('body').css('overflow','');
            });
        
    };
    $(document).ready(initVideo) ;
    
//slideshow class description-appli

   /*$(function(){
      setInterval(function(){
         $(".slideshow ul").animate({marginLeft:-200},1000,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 4000);
   });*/

$(function(){
  $('#myCarousel').carousel({ interval: 5000 });

  $('.description-appli img').mouseover(function(){
    if($(window).width() > 700){
      $(this).css('width','61%');
    }
  });
  $(' .description-appli img').mouseout(function(){
    if($(window).width() > 700){
      $(this).css('width','60%');
    }
  });
  $('i').mouseover(function(){
    $(this).css('position','relative').css('top','-3px');
    $(this).css('color','rgba(0,175,180,0.2)');
    $(this).next().css('color','rgba(0,175,180,0.6)');
  });
  $('i').mouseout(function(){
    $(this).css('position','relative').css('top','3px');
    $(this).css('color','rgba(0,175,180,1)');
    $(this).next().css('color','rgba(0,175,180,1)');
  });
$(window).on('resize load',function(){
   var height = $('.section-2').css('height');
    $('.section-3').css('height',height);
  if($(window).width() < 500){
    $('.description-appli img').css('width','100%');
    $('.thumbnail-bis').css('margin','10%');
    $('.catch-phrase').css('font-size','20px');
    $('footer i').addClass('fa-3x');
  }
  else{
    $('.description-appli img').css('width','60%');
    $('.thumbnail-bis').css('margin','10%');
    $('.catch-phrase').css('font-size','28px');
    $('footer i').addClass('fa-2x')
  }
});

$(document).scroll(function(){
  console.log(window.scrollY)
  if(window.scrollY> 620){
    $('nav').fadeIn(1000);
  }
  else{
    $('nav').css('display','none')
  }
})


});








