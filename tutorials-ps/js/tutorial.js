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