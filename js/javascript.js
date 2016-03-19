

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

  $('footer a ').mouseover(function(){
    $(this).css('opacity','0.7');
    $(this).mouseout(function(){
      $(this).css('opacity','1');
    })

  })
  function resizing(){
   var height = $('.section-2').css('height');
   //console.log(height)
    $('.section-3').css('height',height);
    if($(window).width() < 600){
      $('.description-appli img').css('width','70%');
      $('.thumbnail-bis').css('margin','10%');
      $('.catch-phrase').css('font-size','20px');
      $('footer i').addClass('fa-3x');
      $('#myCarousel img').removeClass('img-responsive');
    }
    else{
      $('.description-appli img').css('width','60%');
      $('.thumbnail-bis').css('margin','10%');
      $('.catch-phrase').css('font-size','28px');
      $('footer i').removeClass('fa-3x');
      $('#myCarousel img').addClass('img-responsive');
    }
  }
  $(window).resize(resizing);
  $(document).load(resizing)

  
  //affichage du lien vers l'apple store
  $(window).on('load scroll resize',function(){
    var height = $('#myCarousel').css('height');
    height = parseInt(height);
    var docHeight = parseInt($(window).height()) + window.scrollY
    if(height < docHeight  ){
      $('.img-apple-store').css('position','absolute').css('bottom','70px');
    }
    else{
      $('.img-apple-store').css('position','fixed').css('bottom','70px');
    }
  });
  /*$(document).scroll(function(){
    if($(".section-1 img").offset().top < window.scrollY+700){
      $(".section-1 img").addClass("img-animate-right")
    }
  });*/

});








