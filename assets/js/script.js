new Typed("#typed", {
    FontFace: "Boldonse",
    strings: ["Página web", "Landing page", "Blog", "Tienda online"],
    typeSpeed: 5,
    backSpeed: 25,
    smartBackspace: true,
  showCursor: false,
    loop: true,
  });

  function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const isOpen = !answer.classList.contains("hidden");
    
    document.querySelectorAll('[id^="answer-"]').forEach(el => el.classList.add("hidden"));
    document.querySelectorAll('[id^="icon-"]').forEach(el => el.textContent = "+");

    if (!isOpen) {
      answer.classList.remove("hidden");
      icon.textContent = "−";
    }
  }

function btnMensajeEnviado(){
  alert("Mensaje enviado con éxito");
}
  