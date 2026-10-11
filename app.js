// ==========================================================================
// Samsung PRISM VLM-TAMP Progress Update: Client Interactivity
// ==========================================================================

// Filter Video Cards
function filterVideos(category) {
  const cards = document.querySelectorAll('.video-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  cards.forEach(card => {
    const cardCats = (card.getAttribute('data-category') || '').split(' ');
    if (category === 'all' || cardCats.includes(category)) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Modal Media Viewer
const modal = document.getElementById('mediaModal');
const modalTitle = document.getElementById('modalTitle');
const modalMediaWrap = document.getElementById('modalMediaWrap');
const modalCaption = document.getElementById('modalCaption');

function openMediaModal(src, type, caption) {
  modalTitle.textContent = type === 'image' ? 'Image Specification' : 'Video Demonstration';
  modalCaption.textContent = caption;

  if (type === 'image') {
    modalMediaWrap.innerHTML = `<img src="${src}" alt="Screenshot Presentation Slide" style="max-height: 70vh; width: auto; max-width: 100%;">`;
  } else if (type === 'video') {
    modalMediaWrap.innerHTML = `
      <video controls autoplay playsinline style="max-height: 70vh; width: 100%;">
        <source src="${src}" type="video/webm">
        Your browser does not support the video tag.
      </video>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMediaModal() {
  const activeVideo = modalMediaWrap.querySelector('video');
  if (activeVideo) {
    activeVideo.pause();
  }
  modal.classList.remove('open');
  modalMediaWrap.innerHTML = '';
  document.body.style.overflow = '';
}

function handleBackdropClick(event) {
  if (event.target === modal) {
    closeMediaModal();
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeMediaModal();
  }
});

// Active nav link highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

console.log("Samsung PRISM VLM-TAMP Progress Portal initialized.");
