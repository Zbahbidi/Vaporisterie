// window.addEventListener("scroll", function () {
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })

function PopupCentrer(page, largeur, hauteur, options) {
    var top=(screen.height-hauteur)/2;
    var left=(screen.width-largeur)/2;
    window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
  }
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }