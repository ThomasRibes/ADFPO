/*snackbar */
function snackPop() {
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function() { x.className = x.className.replace("show", "");}, 3000);

  // redirect to index.html after 6s
  setTimeout(function() {window.location='./index.html'}, 2500);
} 
document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();
  e.stopPropagation();
  snackPop();
});



/* backtotop button */
//Get the button:
let backToTop = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}