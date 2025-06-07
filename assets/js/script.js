new Typed("#typed", {
    strings: ["páginas web", "landing pages", "blogs", "tiendas online"],
    typeSpeed: 50,
    backSpeed: 25,
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