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

/*snackbar */
function snackPop() {
  // Get the snackbar DIV
  let snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function() { snackbar.className = snackbar.className.replace("show", "");}, 3000);

  // redirect to index.html after 6s
  setTimeout(function() {window.location='./index.html'}, 2500);
} 

if (document.getElementById('form')) {
document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();
  e.stopPropagation();
  snackPop();
})
}