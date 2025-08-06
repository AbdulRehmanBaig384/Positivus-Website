// =========================
// MOBILE MENU TOGGLE
// =========================
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerCross = document.getElementById("hamburger-cross");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

hamburgerCross.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// =========================
// CONTACT FORM SUBMISSION (Mock)
// =========================
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}, for your message! We'll get back soon.`);
    form.reset();
  } else {
    alert("Please fill all the fields before submitting.");
  }
});

// =========================
// NEWSLETTER SUBSCRIPTION (Mock)
// =========================
const subscriptionButton = document.querySelector('.subscription input[type="submit"]');
subscriptionButton.addEventListener("click", function () {
  const emailInput = document.querySelector('.subscription input[type="email"]');
  const email = emailInput.value.trim();

  if (email) {
    alert(`Subscribed with ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email.");
  }
});

// =========================
// SMOOTH SCROLL FOR NAV LINKS
// =========================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// =========================
// DARK MODE TOGGLE (Optional button required in HTML)
// =========================
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.className = "btn btn-dark position-fixed bottom-0 end-0 m-4";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
});

// =========================
// BUTTON HOVER ANIMATION (Optional)
// =========================
document.querySelectorAll("a.button, .nav-button a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.2s";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// =========================
// ACCORDION AUTO COLLAPSE LOGIC
// =========================
const accordions = document.querySelectorAll(".accordion-button");

accordions.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.closest(".accordion-item");

    accordions.forEach(btn => {
      const item = btn.closest(".accordion-item");
      if (item !== parent) {
        const collapse = item.querySelector(".accordion-collapse");
        collapse.classList.remove("show");
      }
    });
  });
});

// =========================
// SCROLL TO TOP BUTTON
// =========================
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.className = "btn btn-primary position-fixed bottom-0 start-0 m-4";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================
// ACTIVE NAV LINK HIGHLIGHT ON SCROLL
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_element a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("class").split(" ")[0];
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// =========================
// EXTRA: LOG SITE VISIT TO CONSOLE
// =========================
console.log("Welcome to Positivus 🌐 — JS Loaded Successfully!");




// =====================
// Animate Background Circles
// =====================
gsap.to(".circle1", {
  duration: 20,
  x: 100,
  y: 150,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".circle2", {
  duration: 25,
  x: -120,
  y: -100,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to(".circle3", {
  duration: 30,
  x: 150,
  y: 200,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});




// ==========================
// GSAP Animations
// ==========================

// Nav animation on page load
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

// Hero Section Text Slide + Image Fade
gsap.from(".hero h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});
gsap.from(".hero p", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.8
});
gsap.from(".hero a.button", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  ease: "back.out(1.7)"
});
gsap.from(".hero-section img", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// Services Cards Scroll Animation
gsap.utils.toArray(".services-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.2,
    ease: "power2.out"
  });
});

// Accordion Animation
gsap.utils.toArray(".accordion-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    delay: i * 0.1
  });
});

// Logo section brand fade-in
gsap.from(".logo-section img", {
  scrollTrigger: {
    trigger: ".logo-section",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

// Contact Form Animation
gsap.from(".contact-us form", {
  scrollTrigger: {
    trigger: ".contact-us form",
    start: "top 85%"
  },
  opacity: 0,
  x: -50,
  duration: 1
});
gsap.from(".contact-bg", {
  scrollTrigger: {
    trigger: ".contact-us form",
    start: "top 85%"
  },
  opacity: 0,
  x: 50,
  duration: 1
});
