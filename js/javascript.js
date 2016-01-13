

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
  
 });








