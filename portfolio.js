
//Intro Scripts
window.addEventListener("DOMContentLoaded", function() {

  if (window.matchMedia("(max-width: 700px)").matches) {
    setTimeout (mobileIntro, 2000)
    function mobileIntro (){
      console.log("window screen smaller than 700px")
      document.getElementById("header").style.width = "100vw";
      document.getElementById("slider").style.width = "100vw";
      document.getElementById("main").style.display = "grid";
      document.getElementById("slider").style.display = "flex";
      document.getElementById("navContainer").style.visibility = "visible";
      document.getElementById("title").style.transform = "translateY(0px)";
      document.getElementById("head").style.transform = "translateY(0px)";
      document.getElementById("aboutP").style.display = "block";
    }
  }
  else {
    setTimeout (desktopIntro, 2000)
    function desktopIntro() {
      document.getElementById("header").style.width = "40vw";
      document.getElementById("slider").style.width = "60vw";
      document.getElementById("slider").style.display = "block";
      document.getElementById("navContainer").style.visibility = "visible";
      document.getElementById("title").style.transform = "translateY(0px)";
      document.getElementById("head").style.transform = "translateY(0px)";
      document.getElementById("aboutP").style.display = "block";
    }
  }



//Accordion/Panel: Open/Close
var acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let lipan = this.nextElementSibling;

    if (lipan.style.display === "block") {
      lipan.style.display = "none";
    } else {
      lipan.style.display = "block";
    }
  });
}

let accH = document.getElementsByClassName("accordionHeader");
let iH;
for (iH = 0; iH < accH.length; iH++) {
  accH[iH].addEventListener("click", function() {
    this.classList.toggle("activeH");
    let pan = this.nextElementSibling;
    if (pan.style.display === "block") {
      var acc = document.getElementsByClassName("accordion");
      pan.style.display = "none";
    } else {
      pan.style.display = "block";
    }
  });
}

//About Section Script
document.getElementById("aboutLink").addEventListener("click", aboutO);
document.getElementById("aboutClose").addEventListener("click", aboutC);
function aboutO(){

  if (window.matchMedia("(max-width: 700px)").matches){
    document.getElementById("aboutSection").style.display = "flex";
    document.getElementById("main").style.display = "none";
  }
  else {

    document.getElementById("aboutSection").style.display = "grid";
    document.getElementById("main").style.display = "none";
  }
}
function aboutC(){


  if (window.matchMedia("(max-width: 700px)").matches){
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("main").style.display = "grid";
  }
  else {
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("main").style.display = null;
  }

}

});
