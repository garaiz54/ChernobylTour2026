// Optional animated cursor for links/buttons; normal .cur works across all pages.
document.addEventListener("DOMContentLoaded", () => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const overlay = document.createElement("img");
  overlay.id = "stalkerCursor";
  overlay.src = "assets/cursors/link-select.gif";
  overlay.alt = "";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);
  overlay.addEventListener("error", () => document.body.classList.remove("cursor-ready"));
  overlay.addEventListener("load", () => document.body.classList.add("cursor-ready"));
  let x = 0, y = 0;
  document.addEventListener("pointermove", event => {
    x = event.clientX; y = event.clientY;
    overlay.style.left = x + "px";
    overlay.style.top = y + "px";
    overlay.style.display = event.target.closest("a,button") ? "block" : "none";
  });
  document.addEventListener("pointerout", event => {
    if (!event.relatedTarget) overlay.style.display = "none";
  });
  window.addEventListener("blur", () => overlay.style.display = "none");
});
