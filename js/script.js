$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// =========== menufixed start===========//
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("menufixed")
  }else{
    $(".menu").removeClass("menufixed")
  }
})
$(window).load(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("menufixed")
  }else{
    $(".menu").removeClass("menufixed")
  }
})
// =========== menufixed end===========//





// =========== back-to-top start===========//
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".back-to-top").fadeIn()
  }else{
    $(".back-to-top").fadeOut()
  }
})
$(window).load(function(){
  if($(window).scrollTop() > 300){
    $(".back-to-top").fadeIn()
  }else{
    $(".back-to-top").fadeOut()
  }
})
// =========== back-to-top end===========//










// ==========banner start===========//
$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 600,
  arrows:true,
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-left prev"></i>',
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==========banner end=============// 


// =========== curved-down start===========//

$(".curve").arctext({ radius: 600 });

// =========== curved-down end===========//


// =========== counter-down start===========//

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("da").innerHTML = days
    document.getElementById("ho").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// =========== counter-down end===========//



// =========== team-slider start===========//
$('.team-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  // autoplay:true,
  // autospeed:1000,
  responsive: [{
      breakpoint: 992,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
  }, {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
      }
  }, {
      breakpoint: 576,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,

      }
  } // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]
});
// =========== team-slider end===========//

// =========== venobox===========//
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// =========== venobox===========//


// =========== testimonial start===========//
$('.test-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// =========== testimonial end===========//

// =========== counter start===========//
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// =========== counter end===========//