document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;
  toggle.addEventListener("click", function () {
    var open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
