/* ============================================
   Portfolio JavaScript - Manoranjan J
   ============================================ */

(function() {
  'use strict';

  // ─── Scroll Reveal Animation ───
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => revealObserver.observe(r));

  // ─── Nav Active on Scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
    });
  });

  // ─── Mobile Nav Toggle ───
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
  }

  // ─── Smooth Scroll for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ─── Console Welcome ───
  console.log('%c🚀 Manoranjan Portfolio', 'color: #00e5ff; font-size: 20px; font-weight: bold;');
  console.log('%cCloud & Linux Engineer', 'color: #a855f7; font-size: 12px;');
  console.log('%cContact: manoranjan.tech786@gmail.com', 'color: #6b84a0; font-size: 11px;');

})();