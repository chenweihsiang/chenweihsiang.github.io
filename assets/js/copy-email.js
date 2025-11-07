---
---

/* Copy email to clipboard when clicking the Email social link */
document.addEventListener('DOMContentLoaded', () => {
  // Prefer a single source of truth for your address:
  const EMAIL = "{{ site.email | xml_escape }}"; // set site.email in _config.yml

  const links = document.querySelectorAll('a[href="#copy-email"]');

  links.forEach(link => {
    // Optional: improve a11y/UX
    link.setAttribute('role', 'button');
    link.setAttribute('aria-label', 'Copy email address');

    link.addEventListener('click', async (e) => {
      e.preventDefault();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(EMAIL);
        } else {
          // Fallback for older browsers / non-HTTPS
          const ta = document.createElement('textarea');
          ta.value = EMAIL;
          ta.setAttribute('readonly', '');
          ta.style.position = 'absolute';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          ta.remove();
        }

        // Lightweight visual feedback
        const oldTitle = link.getAttribute('title') || '';
        link.setAttribute('title', 'Copied!');
        link.classList.add('copied'); // style in CSS if you want
        setTimeout(() => {
          link.setAttribute('title', oldTitle);
          link.classList.remove('copied');
        }, 1500);
      } catch (err) {
        // Last-ditch fallback: reveal the email
        alert(EMAIL);
      }
    });
  });
});
