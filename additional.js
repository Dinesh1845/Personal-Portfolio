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



  let inner = document.getElementById("inner");
  let outer = document.getElementById("outer");

  window.addEventListener("mousemove", (e) => {
    inner.style.left = `${e.clientX}px`
    inner.style.top = `${e.clientY}px`
    
    outer.animate({
      left : `${e.clientX}px`,
      top : `${e.clientY}px`
    }, {duration:500 , fill:"forwards"})
  });

  let files = document.getElementById("files");

  