document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll("#main-nav button");
  const iframe = document.getElementById("tool-frame");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      navButtons.forEach((b) => b.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      btn.classList.add("active");

      // Changer la source de l'iframe
      const target = btn.getAttribute("data-target");
      iframe.src = target;
    });
  });
});
