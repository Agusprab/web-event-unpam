
  AOS.init();

  $(document).ready(function(){
    $(".nara").owlCarousel({
      items:1,
        loop:true,
        margin:10,        
         autoplay:true,
     autoplayTimeout:1500,
      autoplayHoverPause:true,
      lazyLoad: true
        });
    });

    
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          
        loop:true,
        
         autoplay:true,
     autoplayTimeout:2000,      
      lazyLoad: true,
      responsive:{
        0:{
            items:1,
            center:true
        },
        700:{
            items:2,
            
        },
        1000:{
            items:4,
            margin:360,
        },
        1200:{
          items:5,
          margin:360,
      }
    }

      
        });
      });
    
      
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
