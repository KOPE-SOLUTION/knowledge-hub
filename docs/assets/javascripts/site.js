document.addEventListener("DOMContentLoaded", () => {
  const currentHost = window.location.host;

  document.querySelectorAll("a[href^='http']").forEach((link) => {
    try {
      const target = new URL(link.href);
      if (target.host !== currentHost) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } catch (_error) {
      // Leave malformed or intentionally incomplete placeholder links untouched.
    }
  });
});

