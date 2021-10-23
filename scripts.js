//Intro Scripts
window.addEventListener("DOMContentLoaded", intro);
window.addEventListener("resize", intro);
// window.addEventListener("DOMContentLoaded", colorGridFunctions);
// window.addEventListener("resize", colorGridFunctions);
function intro(){
  if (window.matchMedia("(max-width: 700px)").matches) {
    setTimeout (mobileIntro, 800)
    function mobileIntro (){
      console.log("device width smaller than 700px")
      document.getElementById("header").style.width = "100vw";
      document.getElementById("slider").style.width = "100vw";
      document.getElementById("main").style.display = "grid";
      document.getElementById("slider").style.display = "flex";
      document.getElementById("navContainer").style.visibility = "visible";
      document.getElementById("head").style.display = "block";
      document.getElementById("aboutP").style.display = "block";
    }
  }
  if (window.matchMedia("(min-width: 700px)").matches) {
    setTimeout (desktopIntro, 800)
    function desktopIntro() {
    }

  }
  // setTimeout(colorGridFunctions, 1000);
  // function colorGridFunctions(){
  //   function getRndInteger(min, max) {
  //     return Math.floor(Math.random() * (max - min + 1) ) + min;
  //   }
  //   function getRndColumn(min, max) {
  //     return (Math.floor(Math.random() * (max - min + 1) ) + min);
  //   }
  //   if (window.matchMedia("(min-width: 700px)").matches){
  //     var rectSelect = document.getElementsByTagName('rect');
  //     console.log(rectSelect)
  //     for(i=0; i<rectSelect.length; i++){
  //       rectSelect[i].addEventListener('mouseover', addColorEvent);
  //       function addColorEvent(){
  //         this.style.fill= 'hsla(' + getRndInteger(0, 300) + ',100%,50%,1)';
  //       };
  //     }
  //     setInterval(blinkingColors, 500);
  //     function blinkingColors(){
  //       for(i=0; i<rectSelect.length; i++){
  //         rectSelect[i].style.fill= 'hsla(' + getRndInteger(0, 300) + ',100%,50%,.65)';
  //       };
  //     }
  //   }
  // }

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
}

// //Accordion/Panel: Open/Close
// window.addEventListener("DOMContentLoaded", accordionFunctions);
// function accordionFunctions(){
//   var acc = document.getElementsByClassName("accordion");
//   let i;
//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       let lipan = this.nextElementSibling;
//
//       if (lipan.style.display === "block") {
//         lipan.style.display = "none";
//       } else {
//         lipan.style.display = "block";
//       }
//     });
//   }
//   let accH = document.getElementsByClassName("accordionHeader");
//   let iH;
//   for (iH = 0; iH < accH.length; iH++) {
//     accH[iH].addEventListener("click", function(){
//       this.classList.toggle("activeH");
//       let pan = this.nextElementSibling;
//       if (pan.style.display === "block") {
//         var acc = document.getElementsByClassName("accordion");
//         pan.style.display = "none";
//       } else {
//         pan.style.display = "block";
//       }
//     });
//   }
// }
