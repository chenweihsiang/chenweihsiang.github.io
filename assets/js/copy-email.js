// Copy a hard-coded email and show a quick "copied" message
(function () {
  const EMAIL = "your.name@email.com";
  const TOAST_LIFETIME = 1400; // ms

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

  function ensureLiveRegion() {
    let lr = document.getElementById("sr-copy-announcer");
    if (!lr) {
      lr = document.createElement("div");
      lr.id = "sr-copy-announcer";
      lr.setAttribute("aria-live", "polite");
      lr.setAttribute("role", "status");
      lr.style.position = "absolute";
      lr.style.width = "1px";
      lr.style.height = "1px";
      lr.style.padding = "0";
      lr.style.overflow = "hidden";
      lr.style.clip = "rect(0 0 0 0)";
      lr.style.whiteSpace = "nowrap";
      lr.style.border = "0";
      document.body.appendChild(lr);
    }
    return lr;
  }

  function showToastNear(el, text) {
    const toast = document.createElement("span");
    toast.className = "copy-toast";
    toast.textContent = text;

    // Position near the element
    const rect = el.getBoundingClientRect();
    toast.style.left = `${rect.left + rect.width / 2}px`;
    toast.style.top = `${rect.top - 8 + window.scrollY}px`;

    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add("show"));

    // Remove after a moment
    setTimeout(() => {
      toast.classList.remove("show");
      toast.addEventListener("transitionend", () => toast.remove(), { once: true });
    }, TOAST_LIFETIME);
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href="#copy-email"]');
    if (!link) return;

    e.preventDefault();

    copy(EMAIL).then(() => {
      // Visual toast
      showToastNear(link, "Email address copied");

      // Optional: tiny underline flash on the icon link itself
      const oldTitle = link.getAttribute("title") || "";
      link.setAttribute("title", "Copied!");
      link.classList.add("copied");
      setTimeout(() => {
        link.setAttribute("title", oldTitle);
        link.classList.remove("copied");
      }, 1200);

      // Screen readers
      ensureLiveRegion().textContent = "Email address copied";
    }).catch(() => {
      alert(EMAIL);
    });
  });
})();
