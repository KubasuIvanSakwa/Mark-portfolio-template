const navbar = document.getElementById("navbar");
fetch("/SRC/navB.html")
  .then((response) => response.text())
  .then((html) => (navbar.innerHTML = html))

  // importation of the navbar to the multiple different pages 