//const { data } = require("jquery");

  function myFunction() {
      var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
      x.className += " responsive";
     } else {
     x.className = "topnav";
      }
   }
  
  
  $(function (){
    'use strict';

// $('body').css('paddingTop',$('.topnav').innerHeight());
   
   $('.topnav  a').click(function(event) {
     event.preventDefault();
  //  window.console.log($(this).data('scroll'));
       $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top +1
        },1000);
      
   });
 
///////ADD active
 $('.topnav a').click(function(){
    $(this).addClass('active3').siblings().removeClass('active3');
  });
//////////////
 $(window).scroll(function() {
    $('.block').each(function (){
     if($(window).scrollTop() > $(this).offset().top){
      var blockId = ($(this).attr('id'));
       $(".topnav a").removeClass('active3');
   $('.topnav a[data-scroll = "' + blockId +'"]').addClass('active3');
    }
    });
});
 


var num1= $('.mastr1-img').children().length,
 
    margin1 = '.5',
    totale = (num1 - 1) * margin1,
    width2 = ( 100 - totale) / num1;
    $(".mastr1-img img").css({
     'width': width2 + '%',
     
      });
      $(".mastr1-img img").not('.img:last-child').css({'margin-right': margin1 + "%"});
console.log(width2);

//////////////////////// scrollTop
 


$(window).scroll(function(){
  if($(this).scrollTop() >= 700){
    $('.scroll-up').show();
  }else{
   $('.scroll-up ').hide();
  }
  });
 $('.scroll-up').click(function (){
   $('html,body').animate({
    scrollTop :0
   },1744);
 });









///////////////////////////// Colore
 
 var w = $('.colore p');
    w.eq(0).css("background", "red");
    w.eq(1).css("background", "#222");
    w.eq(2).css("background", "#330000");
    w.eq(3).css("background", "#000000");
    w.eq(4).css("background", " #ff9999");
    w.eq(5).css("background", "	#8000ff");
    w.eq(6).css("background", " #5900a6");
    w.eq(7).css("background", "  #4d00b2 ");
    w.eq(8).css("background", "Green");
    w.eq(9).css("background", "Cyan");


    w.click(function (){
      $('body').css("background", $(this).css('background'));
    });
 

    
 


  });