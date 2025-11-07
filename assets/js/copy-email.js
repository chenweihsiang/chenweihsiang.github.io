// Copy-on-click + inline "copied" label next to the icon
(function () {
  const EMAIL = "chen-wei.hsiang.21@ucl.ac.uk";   // <— put yours here
  const LABEL_TEXT = "copied";
  const LABEL_LIFETIME = 1400; // ms

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  document.addEventListener("click", async (e) => {
    const link = e.target.closest('a[href="#copy-email"]');
    if (!link) return;

    e.preventDefault();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        fallbackCopy(EMAIL);
      }

      // tiny motion on the icon/link
      link.classList.add("copied");
      setTimeout(() => link.classList.remove("copied"), 180);

      // show (or reuse) an inline label after the link
      let label = link.nextElementSibling;
      if (!label || !label.classList.contains("copied-label")) {
        label = document.createElement("span");
        label.className = "copied-label";
        label.textContent = LABEL_TEXT;
        link.insertAdjacentElement("afterend", label);
        // allow transition
        requestAnimationFrame(() => label.classList.add("show"));
      } else {
        // retrigger animation if it already exists
        label.textContent = LABEL_TEXT;
        label.classList.remove("show");
        void label.offsetWidth; // reflow to restart transition
        label.classList.add("show");
      }

      clearTimeout(label._hideTimer);
      label._hideTimer = setTimeout(() => {
        label.classList.remove("show");
      }, LABEL_LIFETIME);
    } catch {
      alert(EMAIL); // last-resort fallback
    }
  });
})();
