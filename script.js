// ════════════════════════════════════════════════════════════════
// NAV: scroll state + mobile toggle
// ════════════════════════════════════════════════════════════════
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ════════════════════════════════════════════════════════════════
// HERO: typewriter effect
// ════════════════════════════════════════════════════════════════
const phrases = ['opportunity.', 'skills into jobs.', 'youth into builders.', 'Thembalethu\'s future.'];
const typedEl = document.getElementById('heroTyped');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  typedEl.textContent = phrases[0];
} else {
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
      setTimeout(typeLoop, 55);
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 300);
        return;
      }
      setTimeout(typeLoop, 30);
    }
  }
  typeLoop();
}

// ════════════════════════════════════════════════════════════════
// HERO STATS: count-up on view
// ════════════════════════════════════════════════════════════════
const statEls = document.querySelectorAll('.stat-num');
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  statEls.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (progress === 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) animateStats(); });
}, { threshold: 0.4 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ════════════════════════════════════════════════════════════════
// PROGRAMMES: phase tabs
// ════════════════════════════════════════════════════════════════
const phaseTabs = document.querySelectorAll('.phase-tab');
const phasePanels = document.querySelectorAll('.phase-panel');

phaseTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const phase = tab.dataset.phase;

    phaseTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    phasePanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.phasePanel === phase);
    });
  });
});

// ════════════════════════════════════════════════════════════════
// SCROLL REVEAL: fade-up on entry for cards/sections
// ════════════════════════════════════════════════════════════════
if (!reduceMotion) {
  const revealTargets = document.querySelectorAll(
    '.problem-card, .prog-card, .commit, .impact-card, .partner-card'
  );
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, (i % 4) * 70);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));
}
