/* ============================================================
   JUSTICE — main.js
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   ALL CONTENT DATA — edit anything here to update the site
   ────────────────────────────────────────────────────────── */
const DATA = {

  milestones: [
    { year: "2024", title: "Foundation",
      desc: "Justice was founded by passionate law students with a singular mission: democratize legal education for youth." },
    { year: "2025", title: "First Tournament",
      desc: "Hosted our First Debate Tournament with 100+ participants from diverse institutions" },
    { year: "2025", title: "Ministry Partnership",
      desc: "Signed an official collaboration agreement with the Ministry of Justice." },
    { year: "2025", title: "Regional Expansion",
      desc: "Expanded to 6 new regions, launching regional debate leagues." },
    { year: "2026", title: "Youth Agency Recognition",
      desc: "Received the Youth Agency Leadership Award and partnered with Global Institutions" },
    { year: "2026", title: "1000+ Members",
      desc: "Crossed the 1000-active-member milestone — the premier youth legal organization in the region." },
  ],

  collaborations: [
    { name: "Youth Affairs Agency of the Republic of Uzbekistan",     type: "Government",  icon: "⚖️",
      desc: "Official government partner supporting Justice's mission to empower youth through legal education, providing institutional recognition and backing for all our nationwide programs." },
    { name: "Ministry of Justice of the Republic of Uzbekistan",            type: "Government",         icon: "🏛️",
      desc: "Key partnership enabling Justice to align its debate and legal education programs with national legal standards, co-organizing youth civic engagement initiatives across Uzbekistan." },
    { name: "Ministry of Preschool and School Education of the Republic of Uzbekistan", type: "Education",    icon: "🎓",
      desc: "Collaboration that brings Justice's debate and legal literacy programs directly into schools, expanding access to legal education for young students across all regions." },
    { name: "Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan",    type: "Higher Education",      icon: "🔬",
      desc: "Partnership connecting Justice with universities and research institutions, facilitating student participation, academic mentorship, and innovation in legal education." },
    { name: "TSUL — Tashkent State University of Law",     type: "Academia",  icon: "📚",
      desc: "Academic cornerstone of Justice's program, providing legal expertise, faculty mentors, venue support, and institutional credibility for tournaments and educational forums." },
  ],

  stats: [
    { label: "Events Organized",     value: 15,   suffix: "+" },
    { label: "Students Reached",     value: 1000, suffix: "+" },
    { label: "Debates Conducted",     value: 8,   suffix: "+" },
    { label: "Partner Institutions", value: 2,    suffix: ""  },
  ],

  gallery: [
    { title: "Fragments from the Floor", date: "March 2025",
      desc: "A fragment from our flagship debate — arguments forged under pressure, positions defended with precision.",
      src: "images/img1.png", large: true },
    { title: "The Opening Round",       date: "January 2024",
      desc: "A fragment from the opening round — where the first clash of ideas set the tone for everything that followed.",
      src: "images/img2.png", large: false },
    { title: "Motion on the Table",            date: "November 2023",
      desc: "A fragment from past debates — the motion stands, the floor awaits, and every word carries weight.",
      src: "images/img3.png", large: false },
    { title: "The Rebuttal", date: "September 2023",
      desc: "A fragment from past debates — a rebuttal sharp enough to shift the room, delivered with quiet confidence.",
      src: "images/img4.png", large: false },
    { title: "Closing Arguments",           date: "July 2023",
      desc: "A fragment from past debates — the closing statement that turned the tide in the final moments.",
      src: "images/img5.png", large: false },
    { title: "Point of Information",        date: "May 2023",
      desc: "A fragment from past debates — a moment of interruption, of challenge, and of clarity under pressure.",
      src: "images/img6.png", large: false },
    { title: "The Deliberation",          date: "April 2023",
      desc: "A fragment from past debates — judges weighing arguments, the room holding its breath before the verdict.",
      src: "images/img7.png", large: true },
    { title: "After the Verdict",        date: "December 2023",
      desc: "A fragment from past debates — the moment after the gavel falls, where outcomes are accepted and lessons begin.",
      src: "images/img8.png", large: false },
  ],

  events: [
    { id: 1, tag: "Tournament",
      title: "Coming soon...",
      date: "2026-08-18T09:00:00",
      loc: "National Convention Center, Hall A",
      desc: "The most prestigious competitive debate event of the year. Register your team of 3 and compete across 5 elimination rounds.",
      seats: 240 },
    { id: 2, tag: "Forum",
      title: "Coming soon...",
      date: "2026-09-05T10:00:00",
      loc: "Faculty of Law, Main Auditorium",
      desc: "A two-day international forum featuring keynote speakers from the International Court of Justice and leading law faculties.",
      seats: 500 },
    { id: 3, tag: "MUN",
      title: "Coming soon...",
      date: "2026-10-12T08:30:00",
      loc: "City Diplomatic Club",
      desc: "Model United Nations simulation focusing on International Humanitarian Law and Human Rights frameworks.",
      seats: 180 },
    { id: 4, tag: "Workshop",
      title: "Coming soon...",
      date: "2026-11-20T14:00:00",
      loc: "Justice Training Hub, Online & In-Person",
      desc: "An intensive full-day masterclass on brief writing, appellate advocacy, and legal argumentation techniques.",
      seats: 80 },
  ],

  team: [
    { name: "Umar Rustamov",  role: "Founder & President",      dept: "Executive",    initials: "UR", color: "#C48A4A",
      bio: "Founder of Justice and representative in global market." },
    { name: "Xasan Miraliev",  role: "Vice President",            dept: "Executive",    initials: "XM", color: "#8B6914",
      bio: "International tech-specialist. Leads Justice's global partnership and institutional outreach programs." },
    { name: "Bekhruz Fayzullaev",      role: "Director of Competitions",  dept: "Competitions", initials: "BF", color: "#A07830",
      bio: "3x national debate champion. Designs and administers all Justice tournament formats and judging criteria." },
  ],

  testimonials: [
    { name: "Sabina Alieva",   role: "Participant",      avatar: "SA",
      quote: "Justice completely transformed how I think about law. The Pyramid Tournament taught me to argue with precision and empathy simultaneously." },
    { name: "Jasur Maxmudov",  role: "Participant",       avatar: "JM",
      quote: "The network you build through Justice is unparalleled. I've collaborated with exceptional peers across premium tournament architectures." },
    { name: "Kamila Karimova", role: "Participant",    avatar: "KK",
      quote: "Winning the Moot Court Championship at Justice gave me the confidence I needed to pursue law school. The mentors here are world-class." },
    { name: "Alisher Ikramov", role: "Participant",      avatar: "AI",
      quote: "Justice members consistently arrive better prepared, more articulate, and more passionate about justice than any other program's graduates." },
    { name: "Nilufar Asanova", role: "Participant",       avatar: "NA",
      quote: "From my first forum to advising a parliamentary committee, Justice was the thread connecting every milestone." },
    { name: "Danil Petrov",    role: "Participant",      avatar: "DP",
      quote: "Justice gave me the tools to turn my passion for justice into real advocacy. The training and global reach are unmatched." }
  ],
};

/* ══════════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════════ */
function jilScroll(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const navbar = document.getElementById("navbar");
  const navHeight = navbar ? navbar.offsetHeight : 80;
  const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

  window.scrollTo({ top, behavior: "smooth" });
  closeMobileMenu(); 
}

/* ══════════════════════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════════════════════ */
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("hamburger");
  if (menu) menu.classList.toggle("open");
  if (burger) burger.classList.toggle("open");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("hamburger");
  if (menu) menu.classList.remove("open");
  if (burger) burger.classList.remove("open");
}

/* ══════════════════════════════════════════════════════════
   NAVBAR — glass effect on scroll
   ══════════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const update = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ══════════════════════════════════════════════════════════
   SOCIAL BUTTONS
   ══════════════════════════════════════════════════════════ */
function openSocial(url) {
  window.open(url, "_blank", "noopener");
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM — Formspree API Integration Engine
   ══════════════════════════════════════════════════════════ */
function submitForm() {
  const name  = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const org   = document.getElementById("form-org").value.trim();
  const msg   = document.getElementById("form-msg").value.trim();
  const fb    = document.getElementById("form-feedback");

  if (!name || !email || !msg) {
    fb.textContent  = "⚠️ Please fill in your name, email, and message.";
    fb.className    = "form-feedback error";
    fb.style.color  = "#FF6B6B";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fb.textContent  = "⚠️ Please enter a valid email address.";
    fb.className    = "form-feedback error";
    fb.style.color  = "#FF6B6B";
    return;
  }

  fb.style.color = "#C48A4A";
  fb.textContent = "Processing transmission... Please wait.";

  const formspreeEndpoint = "https://formspree.io/f/xwvzzzpj";

  const payload = {
    name: name,
    email: email,
    organization: org || "Not Provided",
    message: msg
  };

  fetch(formspreeEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      fb.style.color = "#85E3B3";
      fb.textContent = "✓ Success! Your message has been sent directly to the Executive Council.";
      fb.className   = "form-feedback success";
      document.getElementById("contact-form").reset();
    } else {
      throw new Error("Server communication protocol error.");
    }
  })
  .catch(error => {
    fb.style.color = "#FF6B6B";
    fb.textContent = "❌ Oops! Submission failed. Please reach out directly via miralievhasan347@gmail.com";
    fb.className   = "form-feedback error";
    console.error("Transmission Error Log:", error);
  });
}

/* ══════════════════════════════════════════════════════════
   RENDER — TIMELINE
   ══════════════════════════════════════════════════════════ */
function renderTimeline() {
  const container = document.getElementById("timeline-items");
  if (!container) return;
  container.innerHTML = DATA.milestones.map((m, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    return `
      <div class="timeline-item ${side}">
        <div class="timeline-card">
          <div class="timeline-dot">${m.year.slice(2)}</div>
          <div class="timeline-year">${m.year}</div>
          <h3 class="timeline-title">${m.title}</h3>
          <p class="timeline-desc">${m.desc}</p>
        </div>
      </div>`;
  }).join("");
}

/* ══════════════════════════════════════════════════════════
   RENDER — COLLABORATIONS + STATS
   ══════════════════════════════════════════════════════════ */
function renderCollaborations() {
  const grid = document.getElementById("collab-grid");
  if (grid) {
    grid.innerHTML = DATA.collaborations.map(c => `
      <div class="collab-card">
        <div class="collab-icon">${c.icon}</div>
        <div class="collab-type">${c.type}</div>
        <h3 class="collab-name">${c.name}</h3>
        <p class="collab-desc">${c.desc}</p>
      </div>`).join("");
  }

  const statsEl = document.getElementById("stats-grid");
  if (statsEl) {
    statsEl.innerHTML = DATA.stats.map(s => `
      <div class="stat-card" data-target="${s.value}" data-suffix="${s.suffix}">
        <div class="stat-value">0</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");
  }
}

/* ══════════════════════════════════════════════════════════
   RENDER — GALLERY
   ══════════════════════════════════════════════════════════ */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = DATA.gallery.map((item, i) => `
    <div class="gallery-item${item.large ? " large" : ""}" data-index="${i}">
      <img src="${item.src}" alt="${item.title}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'">
      <div class="gallery-overlay">
        <div>
          <div class="gallery-date">${item.date}</div>
          <div class="gallery-title">${item.title}</div>
        </div>
      </div>
    </div>`).join("");

  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(+el.dataset.index));
  });
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════════════════════ */
function openLightbox(index) {
  const item = DATA.gallery[index];
  if (!item) return;
  
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = item.src;
  lightboxImg.onerror = () => { lightboxImg.src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80'; };

  document.getElementById("lightbox-date").textContent = item.date;
  document.getElementById("lightbox-title").textContent= item.title;
  document.getElementById("lightbox-desc").textContent = item.desc;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ══════════════════════════════════════════════════════════
   RENDER — EVENTS + LIVE COUNTDOWN TIMERS
   ══════════════════════════════════════════════════════════ */
function renderEvents() {
  const grid = document.getElementById("events-grid");
  if (!grid) return;

  const tagColors = { Tournament:"#C48A4A", Forum:"#8B6914", MUN:"#A07830", Workshop:"#6B4F25" };

  grid.innerHTML = DATA.events.map(ev => {
    const d     = new Date(ev.date);
    const day   = d.getDate();
    const month = d.toLocaleString("default", { month:"short" }).toUpperCase() + " " + d.getFullYear();
    const color = tagColors[ev.tag] || "#C48A4A";
    return `
      <div class="event-card">
        <div class="event-header">
          <div>
            <span class="event-type-badge" style="background:${color}">${ev.tag}</span>
            <h3 class="event-title">${ev.title}</h3>
          </div>
          <div class="event-date-box">
            <div class="event-day">${day}</div>
            <div class="event-month">${month}</div>
          </div>
        </div>
        <div class="event-body">
          <div class="event-loc">📍 ${ev.loc}</div>
          <p class="event-desc">${ev.desc}</p>
          <div class="event-seats">🎫 ${ev.seats} seats available</div>
          <div class="countdown">
            <div class="countdown-unit"><div class="countdown-num" id="cd-d-${ev.id}">00</div><div class="countdown-label">Days</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-h-${ev.id}">00</div><div class="countdown-label">Hrs</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-m-${ev.id}">00</div><div class="countdown-label">Min</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-s-${ev.id}">00</div><div class="countdown-label">Sec</div></div>
          </div>
          <button class="gold-btn full-width" style="margin-top:16px"
                  onclick="jilScroll('contact')">Register Now</button>
        </div>
      </div>`;
  }).join("");

  DATA.events.forEach(ev => startCountdown(ev.id, ev.date));
}

function startCountdown(id, dateStr) {
  const target = new Date(dateStr).getTime();
  const pad = n => String(Math.floor(n)).padStart(2, "0");
  const tick = () => {
    const diff = target - Date.now();
    const dEl = document.getElementById(`cd-d-${id}`);
    if (!dEl) return;
    if (diff <= 0) {
      ["d","h","m","s"].forEach(k => {
        const el = document.getElementById(`cd-${k}-${id}`);
        if (el) el.textContent = "00";
      });
      return;
    }
    document.getElementById(`cd-d-${id}`).textContent = pad(diff / 86400000);
    document.getElementById(`cd-h-${id}`).textContent = pad((diff % 86400000) / 3600000);
    document.getElementById(`cd-m-${id}`).textContent = pad((diff % 3600000) / 60000);
    document.getElementById(`cd-s-${id}`).textContent = pad((diff % 60000) / 1000);
  };
  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════════════════
   RENDER — TEAM (with 3-D tilt mechanics)
   ══════════════════════════════════════════════════════════ */
function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = DATA.team.map(m => `
    <div class="team-card js-tilt">
      <div class="team-avatar"
           style="background:linear-gradient(135deg,${m.color},#2A120A);
                  border:2px solid ${m.color};
                  box-shadow:0 0 20px ${m.color}40">
        ${m.initials}
      </div>
      <div class="team-dept">${m.dept}</div>
      <h3 class="team-name">${m.name}</h3>
      <div class="team-role">${m.role}</div>
      <p class="team-bio">${m.bio}</p>
    </div>`).join("");

  grid.querySelectorAll(".js-tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r  = card.getBoundingClientRect();
      const rx = (-(e.clientY - r.top  - r.height / 2) / r.height) * 14;
      const ry =  ((e.clientX - r.left - r.width  / 2) / r.width)  * 14;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.boxShadow = "0 24px 60px rgba(196,138,74,0.25)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });
}

/* ══════════════════════════════════════════════════════════
   RENDER — TESTIMONIALS
   ══════════════════════════════════════════════════════════ */
function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="quote-mark">"</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="t-avatar" style="background: linear-gradient(135deg, #C48A4A, #2A120A); border: 1px solid var(--border, #C48A4A);">${t.avatar}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </div>`).join("");
}

/* ══════════════════════════════════════════════════════════
   SCROLL ANIMATIONS — fade/slide in on viewport entry
   ══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const selectors = ".timeline-item,.collab-card,.gallery-item,.event-card,.team-card,.testimonial-card,.stat-card";
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      el.classList.add("visible");
      if (el.classList.contains("stat-card")) triggerCountUp(el);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(selectors).forEach(el => obs.observe(el));
}

function triggerCountUp(card) {
  const valueEl = card.querySelector(".stat-value");
  const target  = +card.dataset.target;
  const suffix  = card.dataset.suffix || "";
  const dur     = 2200;
  const start   = performance.now();
  const step = now => {
    const p     = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    valueEl.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ══════════════════════════════════════════════════════════
   PARTICLES (canvas background)
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, pts;

  const resize = () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  };
  const make = () => {
    pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.1,
    }));
  };

  resize(); make();
  window.addEventListener("resize", () => { resize(); make(); });

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196,138,74,${p.a})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(loop);
  })();
}

/* ══════════════════════════════════════════════════════════
   BOOT — runs once the page HTML is fully loaded
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* render all dynamic content matrix nodes */
  renderTimeline();
  renderCollaborations();
  renderGallery();
  renderEvents();
  renderTeam();
  renderTestimonials();

  /* init behaviors — ORDER MATTERS: render first, then observe */
  initNavbar();
  initScrollAnimations();
  initParticles();
});