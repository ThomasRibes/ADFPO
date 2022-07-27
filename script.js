function snackPop() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  // redirect to index.html after 6s
  let timer = setTimeout(function() {
    window.location='./index.html'
  }, 2500);
} 
