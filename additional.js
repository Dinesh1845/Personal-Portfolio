var typed = new Typed("#typed-output", {
    strings: ["Web Designer", "Front-End developer", "Back-End developer"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  });


//mouse follow
let pointer = document.getElementById("pointer");

window.addEventListener("mousemove" , (e)=>{
  pointer.animate({
    left : `${e.clientX}px`,
    top : `${e.clientY}px`
  }, {duration:500 , fill:"forwards"})
});

//scroll reveal
ScrollReveal().reveal(".main" , {
  duration:1000,
  reset:true,
  easing:'ease-in-out',
  delay:500,
  distance:'50px',
  mobile:false,
  origin:'top'
});
