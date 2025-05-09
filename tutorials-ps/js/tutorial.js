document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  const linkBox = document.querySelector('.linkBox');
  
  function checkScroll() {
    // Get position of .linkBox relative to viewport
    const linkBoxRect = linkBox.getBoundingClientRect();
    
    // Show arrow if we've scrolled past .linkBox (it's above viewport top)
    if (linkBoxRect.top < 0) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Initial check in case page loads scrolled down
  checkScroll();
});

// Stop the WIP pages from being clickable - just remove the "wip" class to un-do
document.querySelectorAll('a.wip').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    return false;
  });
  
  // Remove href while preserving the displayed URL
  link.dataset.originalHref = link.href;
  link.removeAttribute('href');
});


document.addEventListener('DOMContentLoaded', function() {
  const subtitle = document.querySelector('.header-subtitle');
  const text = subtitle.textContent;
  const speed = 70; // Typing speed in ms
  
  subtitle.innerHTML = ''; // Clear original text
  subtitle.classList.add('typing-in-progress'); // Add typing class
  
  let i = 0;
  function typeWriter() {
      if (i < text.length) {
          // Update visible text and move cursor
          subtitle.innerHTML = text.substring(0, i) + 
                             '<span class="cursor">█</span>';
          i++;
          setTimeout(typeWriter, speed);
      } else {
          // Animation complete
          subtitle.innerHTML = text; // Show full text
          subtitle.classList.remove('typing-in-progress');
          subtitle.classList.add('typing-complete');
      }
  }
  
  typeWriter();
});

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const toggleLabel = document.querySelector('.theme-toggle-label');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Init
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.body.classList.add(initialTheme + '-mode');
  themeToggle.checked = initialTheme === 'dark';

  toggleLabel.addEventListener('click', function (e) {
    e.preventDefault(); // stop unwanted behaviors

    // Manually toggle the checkbox
    themeToggle.checked = !themeToggle.checked;

    // Theme logic
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(newTheme + '-mode');
    localStorage.setItem('theme', newTheme);

    // Animate
    toggleLabel.classList.add('animate');
    toggleLabel.addEventListener('animationend', () => {
      toggleLabel.classList.remove('animate');
    }, { once: true });
  });

  // Watch system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const systemTheme = e.matches ? 'dark' : 'light';
      document.body.classList.remove('dark-mode', 'light-mode');
      document.body.classList.add(systemTheme + '-mode');
      themeToggle.checked = systemTheme === 'dark';
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const linkBoxes = document.querySelectorAll('.linkBox-container');
  
  linkBoxes.forEach(container => {
    const linkBox = container.querySelector('.linkBox');
    const prevBtn = container.querySelector('.linkBox-prev');
    const nextBtn = container.querySelector('.linkBox-next');
    
    function checkScroll() {
      const hasScroll = linkBox.scrollWidth > linkBox.clientWidth;
      const atStart = linkBox.scrollLeft === 0;
      const atEnd = linkBox.scrollLeft >= linkBox.scrollWidth - linkBox.clientWidth - 1;
      
      // Toggle buttons
      prevBtn.classList.toggle('hidden', !hasScroll || atStart);
      nextBtn.classList.toggle('hidden', !hasScroll || atEnd);
      
      // Toggle fade-out indicators
      container.classList.toggle('scrollable-start', !atStart);
      container.classList.toggle('scrollable-end', !atEnd);
    }
    
    prevBtn.addEventListener('click', () => {
      linkBox.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      linkBox.scrollBy({ left: 200, behavior: 'smooth' });
    });
    
    // Add keyboard navigation
    prevBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        linkBox.scrollBy({ left: -200, behavior: 'smooth' });
      }
    });
    
    nextBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        linkBox.scrollBy({ left: 200, behavior: 'smooth' });
      }
    });
    
    linkBox.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    
    // Initial check
    checkScroll();
    
    // Add touch support for mobile
    let isDragging = false;
    let startX, scrollLeft;
    
    linkBox.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - linkBox.offsetLeft;
      scrollLeft = linkBox.scrollLeft;
      linkBox.style.cursor = 'grabbing';
      linkBox.style.userSelect = 'none';
    });
    
    linkBox.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - linkBox.offsetLeft;
      const walk = (x - startX) * 2;
      linkBox.scrollLeft = scrollLeft - walk;
    });
    
    linkBox.addEventListener('mouseup', () => {
      isDragging = false;
      linkBox.style.cursor = 'grab';
      linkBox.style.userSelect = '';
    });
    
    linkBox.addEventListener('mouseleave', () => {
      isDragging = false;
      linkBox.style.cursor = 'grab';
      linkBox.style.userSelect = '';
    });
  });
});