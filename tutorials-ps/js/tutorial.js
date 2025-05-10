document.addEventListener('DOMContentLoaded', function () {
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


document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function () {
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

// Inject HTML 
class SiteHeader extends HTMLElement {
  // Specify which attributes to observe for changes
  static get observedAttributes() {
    return ['subtitle', 'headerTitle']; // Add more as needed
  }

  // Called when the component is inserted into the DOM
  connectedCallback() {
    this.render();
  }

  // Called when an observed attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'subtitle') {
      this.render();
    }
  }

  // Render the HTML
  render() {
    const subtitle = this.getAttribute('subtitle') || '';
    const headerTitle = this.getAttribute('headerTitle') || 'Hands-on with PowerShell';
    this.innerHTML = `
            <header class="site-header">
            <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <a href="./index.html" class="home-link">
                <svg version="1.0" width="5.5em" height="5.5em" class="logoHome" viewBox="0 0 192.000000 192.000000" preserveAspectRatio="xMidYMid meet" id="svg-logo" sodipodi:docname="favicon.svg" inkscape:version="1.4 (e7c3feb100, 2024-10-09)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                    <g transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" id="g3">
                        <path id="path1" d="M373 1679 c-66 -19 -76 -45 -167 -445 -47 -203 -112 -488 -145 -633 -34 -145 -61 -275 -61 -288 0 -37 16 -60 51 -72 35 -12 1429 -16 1488 -5 46 9 78 45 95 105 13 48 173 744 257 1119 21 94 30 156 25 173 -14 58 -6 57 -793 56 -409 0 -732 -5 -750 -10z m1452 -101 c-3 -13 -68 -297 -145 -632 -81 -356 -144 -612 -152 -617 -7 -5 -334 -9 -726 -9 l-712 0 5 23 c29 123 275 1203 275 1209 0 4 9 17 20 28 20 20 33 20 730 20 l710 0 -5 -22z" />
                        <path id="path2" d="M613 1530 c-40 -24 -53 -48 -53 -99 0 -39 8 -49 148 -198 175 -186 226 -243 221 -247 -2 -1 -131 -94 -286 -205 -156 -111 -290 -212 -298 -224 -8 -12 -15 -39 -15 -60 0 -31 7 -46 34 -73 44 -44 85 -45 147 -5 123 79 675 485 686 504 16 28 16 72 1 100 -13 25 -422 461 -469 501 -36 31 -73 33 -116 6z" />
                        <path id="path3" d="M879 591 c-40 -40 -41 -102 -2 -143 l27 -28 216 0 c237 0 246 2 270 60 10 24 10 39 1 70 -19 65 -38 70 -276 70 l-207 0 -29 -29z" />
                    </g>
                    <path id="logoColor" d="m 12.279038,212.53969 c 0.192869,-0.82105 1.550775,-6.73627 5.532002,-24.09815 8.653348,-37.73671 27.309431,-119.82393 30.011968,-132.053398 0.864524,-3.912121 1.730489,-7.483304 1.924369,-7.935963 0.193879,-0.452658 1.048339,-1.535801 1.8988,-2.406984 1.785981,-1.829496 2.379972,-2.077567 5.837142,-2.437793 6.001286,-0.625314 12.105373,-0.672566 98.557081,-0.762935 l 87.79735,-0.09177 -0.14517,0.684097 c -0.30534,1.438742 -23.31599,101.735816 -25.27385,110.161626 -6.45871,27.79576 -12.08407,50.48105 -14.00509,56.47809 -0.57173,1.78482 -0.65925,1.92963 -1.23597,2.04498 -1.05728,0.21145 -13.06457,0.54221 -27.82807,0.76655 -7.76755,0.11804 -47.67837,0.2681 -88.690729,0.33347 l -74.567916,0.11886 z m 49.88193,-9.25065 c 3.248412,-1.19812 5.648069,-2.64578 14.122807,-8.52002 21.192016,-14.68918 71.701445,-51.86025 81.044665,-59.64267 2.27219,-1.89261 2.66385,-2.40998 3.30814,-4.36979 0.49076,-1.49284 0.55742,-2.02123 0.56466,-4.47599 0.009,-2.99557 -0.28887,-4.57158 -1.20455,-6.37662 C 158.95013,117.8409 147.3083,104.99269 125.14663,81.442564 108.65682,63.919649 97.682866,52.782173 95.515547,51.369936 92.839362,49.62612 89.763064,49.021369 86.857244,49.667852 c -2.779475,0.618375 -6.52004,2.761617 -8.837349,5.06356 -2.48541,2.46893 -3.343409,5.022953 -3.361655,10.00671 -0.01341,3.660756 0.204521,4.399148 2.150699,7.287173 2.037142,3.023011 4.658009,5.949555 19.782814,22.090124 18.824587,20.088831 25.731607,27.715021 26.856497,29.652831 l 0.36335,0.62592 -20.77442,14.90013 c -11.425923,8.19507 -22.769124,16.33734 -25.207112,18.09393 -16.670376,12.01116 -30.666851,22.65618 -31.817905,24.19913 -1.204575,1.61469 -2.027495,5.03298 -2.02233,8.40047 0.006,3.92528 0.726784,5.59832 3.78627,8.78873 1.970066,2.05437 3.502995,3.28519 5.107108,4.10058 1.863238,0.94712 2.767172,1.12418 5.360482,1.05002 1.971177,-0.0564 2.631724,-0.16397 3.917275,-0.63812 z m 111.023822,-3.59958 c 5.38808,-0.52862 8.13806,-1.43548 9.79109,-3.22881 1.58579,-1.72038 3.50702,-6.57336 3.50702,-8.85864 0,-1.9647 -1.16567,-6.35101 -2.27076,-8.54466 -1.09662,-2.17685 -3.17243,-3.65248 -6.1823,-4.39481 -4.52752,-1.11662 -6.98073,-1.21437 -32.98758,-1.31435 l -24.01908,-0.0923 -2.80179,2.85089 c -2.44799,2.49089 -2.90984,3.07217 -3.65751,4.60335 -1.12379,2.30145 -1.47834,3.78482 -1.47834,6.18517 0,2.37895 0.35513,3.88611 1.43617,6.09513 0.64663,1.32134 1.33214,2.22389 3.34123,4.39909 l 2.52769,2.73667 25.16004,-0.097 c 17.05834,-0.0657 25.95671,-0.17514 27.63412,-0.3397 z" transform="scale(0.75)" />
                </svg>
            </a>
            <div class="header-text">
              <h1 class="header-title">${headerTitle}</h1>
              <p class="header-subtitle">${subtitle}</p>
            </div>
          </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);


// Nav Component
class SiteNav extends HTMLElement {
  static get observedAttributes() {
    return ['siteNav'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'siteNav') {
      this.render();
    }
  }

  render() {
    this.innerHTML = `
        <button class="linkBox-nav linkBox-prev hidden" aria-label="Scroll left">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        <button class="linkBox-nav linkBox-next hidden" aria-label="Scroll right">
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
    `;
  }
}
customElements.define('site-nav', SiteNav);

// Light-Dark Component
class modeSelect extends HTMLElement {
  static get observedAttributes() {
    return ['modeSelect'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'modeSelect') {
      this.render();
    }
  }

  render() {
    this.innerHTML = `
      <input type="checkbox" id="theme-toggle" class="theme-toggle">
      <label for="theme-toggle" class="theme-toggle-label">
        <svg class="lightbulb-icon" viewBox="0 0 24 24">
          <!-- Light bulb SVG paths -->
          <path class="bulb-filament" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"/>
          <path class="bulb-glass" d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
          <path class="bulb-base" d="M10 19h4v1h-4z"/>
        </svg>
      </label>
      `;
  }
}
customElements.define('mode-select', modeSelect);

// <head> data component
class headContent extends HTMLElement {
  static get observedAttributes() {
    return ['headContent'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'modeSelect') {
      this.render();
    }
  }

  render() {
    this.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="favicon.ico" type="image/x-icon">
      <link rel="icon" type="image/png" href="favicon.png">
      <link rel="apple-touch-icon" href="favicon.png">
      `;
  }
}
customElements.define('head-content', headContent);





