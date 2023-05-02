console.log("Hi! Welcome to my Portfolio. Glad you stopped by!");
    

//declares the new function menuToggle// 

function menuToggle() {
}

//searches for the "myNavtoggle" within the html documents// 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
}

//Function to toggle the bar// 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += ' responsive';
}
// if-else statement? In the if section, the browser checks if the className of x is navtoggle. If it is, it adds responsive to className (which will show the menu). In the else section, if the className of x is NOT navtoggle (because it’s currently both navtaggle responsive), it will change className back to simply navtoggle (effectively hiding your menu).// 
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
// Function to toggle the plus menu into minus //
    function myFunction(x) {
        x.classList.toggle("fa-solid fa-xmark");
    }


// Smooth Scrolling Function //

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//scroll to top button //
const btnScrollToTop = document.querySelector("#btnScrollToTop");
    btnScrollToTop.addEventListener("click", function () {
        
 $("html, body").animate({ scrollTop: 1100 }, "slow");

});