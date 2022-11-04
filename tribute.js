const h1 = document.querySelector(".h1");
let got = new Audio("assets/GOT.mp3");

//allows viewing of background image on title click 
h1.addEventListener("click", function() {

    const body = document.querySelector(".body");
    const contact = document.querySelector(".contact");
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");
    
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    contact.style.visibility = "hidden";
    header.style.visibility = "hidden";
    main.style.visibility = "hidden";
    
  //returns all to normal  
  setTimeout(function() {

    body.style.height = "auto";
    body.style.overflow = "auto";
    contact.style.visibility = "visible";
    header.style.visibility = "visible";
    main.style.visibility = "visible";
  }, 5000); //waits 5 seconds to run

});


//keeping variable out of function prevents echo
window.onclick = function() {

    got.play();

};
