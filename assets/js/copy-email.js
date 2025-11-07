// Copy a hard-coded email when the "Email" icon is clicked
(function () {
  const EMAIL = "your.name@email.com";

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for non-HTTPS/older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    return Promise.resolve();
  }

  // Event delegation so it works wherever the link appears
  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href="#copy-email"]');
    if (!link) return;
    e.preventDefault();

    copy(EMAIL).then(() => {
      const oldTitle = link.getAttribute("title") || "";
      link.setAttribute("title", "Copied!");
      link.classList.add("copied");
      setTimeout(() => {
        link.setAttribute("title", oldTitle);
        link.classList.remove("copied");
      }, 1200);
    }).catch(() => {
      alert(EMAIL); // last-ditch fallback
    });
  });
})();
