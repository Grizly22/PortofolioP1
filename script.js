/* ========================================================
   Portfolio Interactive JavaScript
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* --------------------------------------------------------
   * 1. THEME SWITCHER (Dark / Light Mode)
   * ------------------------------------------------------ */
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
  } else {
    // Default or explicitly dark
    htmlElement.classList.add('dark');
  }

  function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
      showToast('Beralih ke mode terang (Light mode)');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
      showToast('Beralih ke mode gelap (Dark mode)');
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);


  /* --------------------------------------------------------
   * 2. MOBILE MENU TOGGLE
   * ------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      }
    });

    // Close menu when link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }


  /* --------------------------------------------------------
   * 3. HERO SLIDING ROLES ANIMATION
   * ------------------------------------------------------ */
  const roles = [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Creative Web Engineer',
    'Problem Solver'
  ];
  let currentRoleIndex = 0;
  const roleTextElement = document.getElementById('sliding-role-text');

  if (roleTextElement) {
    setInterval(() => {
      roleTextElement.style.opacity = '0';
      roleTextElement.style.transform = 'translateY(8px)';

      setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleTextElement.textContent = roles[currentRoleIndex];
        roleTextElement.style.opacity = '1';
        roleTextElement.style.transform = 'translateY(0px)';
      }, 350);
    }, 2800);
  }


  /* --------------------------------------------------------
   * 4. SWIPER SLIDER INITIALIZATION (ANIMASI GESER IDENTITAS DIRI)
   * ------------------------------------------------------ */
  const identityTabs = document.querySelectorAll('.identity-tab-btn');

  const identitySwiper = new Swiper('.identity-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2.15,
        spaceBetween: 32,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    on: {
      slideChange: function () {
        const realIdx = this.realIndex;
        updateActiveTab(realIdx);
      },
    },
  });

  function updateActiveTab(index) {
    identityTabs.forEach(tab => {
      const slideIndex = parseInt(tab.getAttribute('data-slide-to'), 10);
      if (slideIndex === index) {
        tab.classList.add('active-tab');
        tab.classList.remove('inactive-tab');
      } else {
        tab.classList.remove('active-tab');
        tab.classList.add('inactive-tab');
      }
    });
  }

  // Click tab to slide
  identityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetIndex = parseInt(tab.getAttribute('data-slide-to'), 10);
      identitySwiper.slideToLoop(targetIndex, 600);
    });
  });


  /* --------------------------------------------------------
   * 5. PROJECT FILTERING
   * ------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Update active button classes
      filterBtns.forEach(b => {
        b.classList.remove('active-filter');
        b.classList.add('inactive-filter');
      });
      btn.classList.add('active-filter');
      btn.classList.remove('inactive-filter');

      // Filter cards with smooth opacity animation
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide-card');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hide-card');
        }
      });
    });
  });


  /* --------------------------------------------------------
   * 6. CONTACT FORM SUBMISSION SIMULATION
   * ------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const formSuccessAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Temporary loading indicator
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⏳</span> Mengirim Pesan...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('hidden');
          setTimeout(() => {
            formSuccessAlert.classList.add('hidden');
          }, 6000);
        }

        showToast('Pesan berhasil terkirim! Terima kasih.');
      }, 1000);
    });
  }


  /* --------------------------------------------------------
   * 7. CV MODAL ACTIONS
   * ------------------------------------------------------ */
  const cvModal = document.getElementById('cv-modal');
  const btnQuickCv = document.getElementById('btn-quick-cv');
  const mobileCvBtn = document.getElementById('mobile-cv-btn');
  const closeCvModal = document.getElementById('close-cv-modal');
  const closeCvModalBtn2 = document.getElementById('close-cv-modal-btn2');
  const downloadCvActionBtn = document.getElementById('download-cv-action-btn');

  function openModal() {
    if (cvModal) {
      cvModal.classList.remove('hidden');
      cvModal.classList.add('flex');
    }
  }

  function closeModal() {
    if (cvModal) {
      cvModal.classList.add('hidden');
      cvModal.classList.remove('flex');
    }
  }

  if (btnQuickCv) btnQuickCv.addEventListener('click', openModal);
  if (mobileCvBtn) mobileCvBtn.addEventListener('click', openModal);
  if (closeCvModal) closeCvModal.addEventListener('click', closeModal);
  if (closeCvModalBtn2) closeCvModalBtn2.addEventListener('click', closeModal);

  // Close modal when clicking outside box
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeModal();
    });
  }

  if (downloadCvActionBtn) {
    downloadCvActionBtn.addEventListener('click', () => {
      downloadCvActionBtn.innerHTML = `<span>Menyiapkan Dokumen...</span>`;
      setTimeout(() => {
        downloadCvActionBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>CV Telah Diunduh!</span>`;
        if (window.lucide) window.lucide.createIcons();
        showToast('CV Digital Satria Pratama siap dibuka!');
        setTimeout(() => {
          closeModal();
          downloadCvActionBtn.innerHTML = `<i data-lucide="download" class="w-4 h-4"></i><span>Unduh PDF CV</span>`;
          if (window.lucide) window.lucide.createIcons();
        }, 1200);
      }, 800);
    });
  }


  /* --------------------------------------------------------
   * 8. GLOBAL TOAST NOTIFICATION HELPER
   * ------------------------------------------------------ */
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 3200);
  }

  // Refresh Lucide Icons once more after dynamically adding elements
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
