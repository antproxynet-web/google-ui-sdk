(function () {
  function createGoogleButton() {
    const btn = document.createElement("button");

    btn.innerHTML = `
      <img src="https://www.google.com/favicon.ico" width="18" style="margin-right:8px;">
      Continuar com Google
    `;

    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.gap = "8px";
    btn.style.padding = "10px 14px";
    btn.style.borderRadius = "8px";
    btn.style.border = "1px solid #333";
    btn.style.background = "#111";
    btn.style.color = "#fff";
    btn.style.cursor = "pointer";
    btn.style.fontFamily = "Arial, sans-serif";
    btn.style.fontSize = "14px";

    btn.onmouseover = () => btn.style.background = "#222";
    btn.onmouseout = () => btn.style.background = "#111";

    btn.onclick = () => {
      console.log("Botão Google clicado");
      // aqui você pode disparar login, redirect, etc
    };

    document.body.appendChild(btn);
  }

  window.addEventListener("DOMContentLoaded", createGoogleButton);
})();
