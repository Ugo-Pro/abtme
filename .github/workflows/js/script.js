var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })

  // MAINTITLEROW JS

  var stickySidebar = $('.sticky');

if (stickySidebar.length > 0) {	
  var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
}

$(window).scroll(function () {
  if (stickySidebar.length > 0) {	
    var scrollTop = $(window).scrollTop();
            
    if (sidebarTop < scrollTop) {
      stickySidebar.css('top', scrollTop - sidebarTop);
      stickySidebar.css({"opacity": "0.9","transition": "opacity 1.8s ease-in-out"});
    }
    else {      
      stickySidebar.css('opacity','0');
      stickySidebar.css('top', '0');
    } 
  }
});

$(window).resize(function () {
  if (stickySidebar.length > 0) {	
    stickyHeight = stickySidebar.height();
  }
});


{
  
var tlB = new TimelineMax({paused:true});
  var titleList= $('.titleList');

  tlB.to("#bLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)})
        .to("#eLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.1)
        .to("#nLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.15)
        .to("#cLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.20)
        .to("#hLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.25)
        .to("#oLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.30)
        .to("#vLetter" , 2, { rotationY:360, ease: Elastic.easeOut.config(1, 0.3)}, 0.35)

        tlB.timeScale(0.6);


        function over(){
          tlB.play();
        }

        function out(){
          tlB.reverse();
        }

        titleList.hover(over, out);
}

// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "read more &rarr;";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "read less &rarr;";
//     moreText.style.display = "inline";
//   }
// }