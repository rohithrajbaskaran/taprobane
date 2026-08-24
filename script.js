// ============================================================
// TODO: Replace with your real business email once you have one.
// This must match the address used in index.html's mailto: links.
// ============================================================
const RECIPIENT_EMAIL = "info@taprobane.lk";

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const body = document.body;

  navToggle?.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
      body.classList.remove("no-scroll");
    });
  });

  // Header shadow on scroll
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  });

  // Reveal-on-scroll animation
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Pre-select the "reason" dropdown when a CTA with data-reason is clicked
  const reasonSelect = document.getElementById("reason");
  document.querySelectorAll("[data-reason]").forEach((el) => {
    el.addEventListener("click", () => {
      if (reasonSelect) reasonSelect.value = el.dataset.reason;
    });
  });

  // Quote / contact form submission — opens the visitor's email app with
  // a pre-filled message addressed to RECIPIENT_EMAIL. No third-party
  // form service, no backend required.
  const form = document.getElementById("quoteForm");
  const formStatus = document.getElementById("formStatus");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const company = data.get("company") || "—";
    const email = data.get("email");
    const phone = data.get("phone");
    const reason = data.get("reason") || "General Inquiry";
    const message = data.get("message");

    const subject = `${reason} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Reason: ${reason}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    formStatus.textContent =
      "Your email app should now be open with this message ready to send. If nothing opened, please email us directly at " +
      RECIPIENT_EMAIL +
      ".";
    formStatus.className = "form-status success";
  });
});
