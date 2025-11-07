// Copies a hard-coded email when the "Email" icon/link is clicked
(function () {
  const EMAIL = "chen-wei.hsiang.21@ucl.ac.uk";   // <- put yours here
  const FLASH_MS = 900;

  function legacyCopy(text) {
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
        legacyCopy(EMAIL);
      }
      // quick visual cue (optional)
      link.classList.add("copied");
      setTimeout(() => link.classList.remove("copied"), FLASH_MS);
    } catch {
      // As a last resort, show the email so the user can copy manually
      alert(EMAIL);
    }
  });
})();
