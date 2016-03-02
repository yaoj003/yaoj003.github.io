
 // lock body scroll
var scrollPosition = [
    window.self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    window.self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];

var html = $('body');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);


$('.parent').scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    if( scrollTop > 100 ) {
        $('.img2').css({opacity:100}); 
        
        if(scrollTop > 800){
          $('.img3').css({opacity:100});  
        } else{
          $('.img3').css({opacity:0});  
        }
        
        if(scrollTop > 1300){
            $('.img4').css({opacity:100});
        }else{
            $('.img4').css({opacity:0}); 
        }
        
        if(scrollTop > 1500){
             $('.img5').css({opacity:100});
        }else{
           $('.img5').css({opacity:0}); 
        } 
        
        if(scrollTop > 2000){
          $('.img6').css({opacity:100});   
        }else{
         $('.img6').css({opacity:0});   
        } 
        
        if(scrollTop > 2300){
          $('.img7').css({opacity:100});   
        }else{
          $('.img7').css({opacity:0});  
        }
        
        if(scrollTop > 2400){
          $('.img8').css({opacity:100});   
        }else{
          $('.img8').css({opacity:0});  
        }
        
        if(scrollTop > 2500){
          $('.b1').css({opacity:100});  
        }else{
          $('.b1').css({opacity:0});  
        } 
        
        if(scrollTop > 2800){
         $('.b2').css({opacity:100});   
        }else{
           $('.b2').css({opacity:0}); 
        }
        
        //  if(scrollTop > 2900){
        //  $('.img9').css({opacity:100});   
        // }else{
        //   $('.img9').css({opacity:0});   
        // }
        
        if(scrollTop > 3000){
         $('.c1').css({opacity:100});   
        }else{
          $('.c1').css({opacity:0});   
        }
        
        
        
    }else{
       $('.img2').css({opacity:0}); 
       $('.img3').css({opacity:0});
       $('.img4').css({opacity:0});
       $('.img5').css({opacity:0});
       $('.img6').css({opacity:0});
       $('.img7').css({opacity:0});
       $('.img8').css({opacity:0});
    //   $('.img9').css({opacity:0});
       $('.b1').css({opacity:0}); 
       $('.b2').css({opacity:0}); 
       $('.c1').css({opacity:0}); 
    } 
});



