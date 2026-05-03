(function () {
  function createGoogleButton() {
    const btn = document.createElement("button");

    btn.innerHTML = "Continuar com Google";

    // estilo dark
    btn.style.padding = "10px 14px";
    btn.style.borderRadius = "8px";
    btn.style.border = "1px solid #333";
    btn.style.background = "#111";
    btn.style.color = "#fff";
    btn.style.cursor = "pointer";
    btn.style.fontFamily = "Arial";

    btn.onmouseenter = () => btn.style.background = "#222";
    btn.onmouseleave = () => btn.style.background = "#111";

    btn.onclick = () => {
      console.log("Botão Google clicado");
    };

    // injeta no body automaticamente
    document.addEventListener("DOMContentLoaded", () => {
      document.body.appendChild(btn);
    });
  }

  createGoogleButton();
})();
