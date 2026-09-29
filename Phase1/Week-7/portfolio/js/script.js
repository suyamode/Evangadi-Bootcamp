// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shrink on scroll
const nav = document.querySelector(".navbar-cozy");
const sideFill = document.querySelector(".side-line-fill");
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  if (sideFill) sideFill.style.height = Math.min(100, Math.max(0, pct)) + "%";
}
window.addEventListener("scroll", onScroll);
onScroll();

// ================= NAV-CLICK SMOOTH TRANSITION =================
// Clicking a nav link runs a custom eased scroll (not the plain browser
// jump) to the target section, while a glowing progress bar — same amber
// look as the side-line — fills across the top in sync with the motion.
const transitionBar = document.querySelector(".transition-bar");
const transitionBarFill = document.querySelector(".transition-bar-fill");
const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
const TRANSITION_MS = 700;
let isTransitioning = false;

function sectionOffsetTop(section) {
  const navHeight = nav.offsetHeight;
  return (
    section.getBoundingClientRect().top + window.pageYOffset - navHeight - 8
  );
}

function replaySectionReveal(section) {
  const els = section.querySelectorAll(".reveal");
  els.forEach((el) => el.classList.remove("in-view"));
  requestAnimationFrame(() => {
    requestAnimationFrame(() =>
      els.forEach((el) => el.classList.add("in-view")),
    );
  });
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function transitionToSection(section) {
  if (isTransitioning) return;
  isTransitioning = true;

  const startY = window.pageYOffset;
  const endY = Math.max(0, sectionOffsetTop(section));
  const distance = endY - startY;
  const startTime = performance.now();

  const prevScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  transitionBar.classList.add("is-active");
  transitionBarFill.classList.remove("is-animating");
  transitionBarFill.style.transform = "scaleX(0)";
  transitionBarFill.style.setProperty("--transition-dur", `${TRANSITION_MS}ms`);
  // force reflow so re-adding the animating class restarts the transition cleanly
  void transitionBarFill.offsetWidth;
  transitionBarFill.classList.add("is-animating");
  transitionBarFill.style.transform = "scaleX(1)";

  let revealed = false;

  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / TRANSITION_MS);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + distance * eased);
    onScroll();

    if (!revealed && t > 0.55) {
      revealed = true;
      replaySectionReveal(section);
    }

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      document.documentElement.style.scrollBehavior = prevScrollBehavior;
      window.setTimeout(() => {
        transitionBar.classList.remove("is-active");
      }, 150);
      isTransitioning = false;
    }
  }
  requestAnimationFrame(step);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    transitionToSection(target);

    const collapseEl = document.getElementById("navMenu");
    if (
      collapseEl &&
      collapseEl.classList.contains("show") &&
      window.bootstrap
    ) {
      window.bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    }
  });
});

// Cursor-follow lamp glow in the hero
const hero = document.querySelector(".hero");
hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  hero.style.setProperty("--mx", x + "%");
  hero.style.setProperty("--my", y + "%");
});

// Lamp toggle (signature interaction)
const lampBtn = document.getElementById("lampToggle");
lampBtn.addEventListener("click", () => {
  document.body.classList.toggle("lamp-off");
  const isOff = document.body.classList.contains("lamp-off");
  lampBtn.title = isOff ? "Turn the lamp up" : "Turn the lamp down";
});

// Gentle scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// Hero background fallback: CSS background-image can't fire an error event,
// so preload the same photo in memory and swap to a plain gradient if it fails
// (offline, blocked host, etc.) instead of leaving a missing background.
const heroSection = document.querySelector(".hero");
if (heroSection) {
  const bgUrl =
    "https://images.unsplash.com/photo-1578589335615-9e804277a5af?q=80&w=1800&auto=format&fit=crop";
  const preload = new Image();
  preload.referrerPolicy = "no-referrer";
  preload.onerror = () => heroSection.classList.add("bg-fallback");
  preload.src = bgUrl;
}
