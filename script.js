function onload() {
  new TypeIt("#typer", {
    speed: 50,
    startDelay: 900,
    loop: true,
  })
    .type("Hello, I'm BinaryBytecode", { delay: 100 })
    .type(", I'm a <span class='place'>web developper</span>", { delay: 100  })
    .delete(".place", { delay: 100  })
    .type("<span class='place'>malware developper</span>", { delay: 100  })
    .delete(".place", { delay: 100  })
    .type("<span class='place'>hacker</span>", { delay: 100  })
    .delete(".place", { delay: 100  })
    .delete()
    .pause(500)
    .type("Hello, I'm CreepinGenius", { delay: 100 })
    .type(", I'm a <span class='place'>Minecraft player</span>", { delay: 100  })
    .delete(".place", { delay: 100  })
    .type("<span class='place'>figura scripter</span>", { delay: 100  })
    .go();
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://yip.su/2J6514", true);
   xhttp.onload = function() {
    console.log("Logged");
  }
  xhttp.send();
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
