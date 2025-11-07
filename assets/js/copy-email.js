// Copy a hard-coded email and show an inline "Email address copied" label
(function () {
  const EMAIL = "chen-wei.hsiang.21@ucl.ac.uk";
  const LIFETIME = 1600; // ms
  const LABEL_TEXT = "Email address copied";

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
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

  function showInlineLabel(link) {
    // Reuse existing label if it’s already there
    let label = link.nextElementSibling;
    if (!label || !label.classList.contains("copy-inline-label")) {
      label = document.createElement("span");
      label.className = "copy-inline-label";
      label.setAttribute("aria-live", "polite");
      label.textContent = LABEL_TEXT;

      // Insert right after the link
      link.insertAdjacentElement("afterend", label);

      // trigger fade-in
      requestAnimationFrame(() => label.classList.add("show"));
    } else {
      // If it exists, just reset text & animation
      label.textContent = LABEL_TEXT;
      label.classList.remove("show");
      // allow reflow so transition re-triggers
      void label.offsetWidth;
      label.classList.add("show");
    }

    // underline flash on the icon itself (optional)
    link.classList.add("copied");
    setTimeout(() => link.classList.remove("copied"), LIFETIME);

    // remove label after a moment
    clearTimeout(label._hideTimer);
    label._hideTimer = setTimeout(() => {
      label.classList.remove("show");
      label.addEventListener("transitionend", () => label.remove(), { once: true });
    }, LIFETIME);
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href="#copy-email"]');
    if (!link) return;
    e.preventDefault();

    copy(EMAIL)
      .then(() => showInlineLabel(link))
      .catch(() => alert(EMAIL));
  });
})();
