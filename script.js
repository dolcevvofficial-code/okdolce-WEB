// CLOCK UPDATE
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const clockDisplay = document.getElementById('clock');
  if (clockDisplay) {
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

updateClock();
setInterval(updateClock, 1000);

// NAVIGATION
function navigateTo(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo(0, 0);
  }
  
  closeMobileMenu();
}

// HAMBURGER MENU
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('mobile-menu').classList.remove('active');
}

// RENDER BANKS
function renderBanks(containerId, ids) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  ids.forEach(id => {
    const bank = banks.find(b => b.id === id);
    if (!bank) return;
    
    const card = document.createElement('div');
    card.className = 'bank-card';
    
    let coverHTML = '';
    if (bank.hasCover) {
      coverHTML = `<div class="bank-cover"><img src="${bank.coverImage}" alt="${bank.name}"></div>`;
    } else {
      coverHTML = `<div class="bank-cover placeholder">coming soon</div>`;
    }
    
    let priceHTML = '';
    if (bank.status === 'available') {
      if (bank.originalPrice) {
        priceHTML = `
          <div class="bank-price-row">
            <span class="bank-price-current">$${bank.price.toFixed(2)}</span>
            <span class="bank-price-original">$${bank.originalPrice.toFixed(2)}</span>
            <span class="bank-discount-badge">save $${(bank.originalPrice - bank.price).toFixed(2)}</span>
          </div>
        `;
      } else {
        priceHTML = `<div class="bank-price">$${bank.price.toFixed(2)}</div>`;
      }
    }
    
    card.innerHTML = `
      ${coverHTML}
      <div class="bank-info">
        <div class="bank-name">${bank.name}</div>
        <div class="bank-status">${bank.status}</div>
        ${priceHTML}
        <button class="bank-about-btn" onclick="openAboutModal(${bank.id})">about</button>
        <button class="bank-btn ${bank.status === 'coming soon' ? 'bank-btn-disabled' : ''}" 
          ${bank.status === 'coming soon' ? 'disabled' : ''}>
          ${bank.status === 'available' ? 'view' : 'coming soon'}
        </button>
      </div>
    `;
    
    if (bank.status === 'available') {
      card.onclick = (e) => {
        if (e.target.classList.contains('bank-about-btn')) return;
        openProductModal(bank);
      };
    }
    
    container.appendChild(card);
  });
}

// RENDER ALL BANKS
function renderAllBanks() {
  const allIds = banks.map(b => b.id);
  renderBanks('shop-banks', allIds);
}

// PRODUCT MODAL
function openProductModal(bank) {
  const modal = document.getElementById('product-modal');
  const body = document.getElementById('modal-body');
  
  let priceHTML = `<div class="modal-price">$${bank.price.toFixed(2)}</div>`;
  if (bank.originalPrice) {
    priceHTML = `
      <div class="bank-price-row" style="justify-content: center; margin-bottom: 16px;">
        <span class="bank-price-current" style="font-size: 22px;">$${bank.price.toFixed(2)}</span>
        <span class="bank-price-original">$${bank.originalPrice.toFixed(2)}</span>
        <span class="bank-discount-badge">save $${(bank.originalPrice - bank.price).toFixed(2)}</span>
      </div>
    `;
  }
  
  body.innerHTML = `
    <h2 class="modal-title">${bank.name}</h2>
    ${priceHTML}
    <p class="modal-description">${bank.description}</p>
    <button class="modal-btn" onclick="purchaseProduct('${bank.name}')">purchase</button>
  `;
  
  modal.classList.add('active');
}

function closeProductModal(e) {
  if (e && e.target.id !== 'product-modal') return;
  document.getElementById('product-modal').classList.remove('active');
}

function purchaseProduct(productName) {
  alert(`Redirecting to purchase: ${productName}`);
}

// ABOUT BANK MODAL
function openAboutModal(bankId) {
  const bank = banks.find(b => b.id === bankId);
  if (!bank) return;
  
  const modal = document.getElementById('about-modal');
  const body = document.getElementById('about-modal-body');
  
  let videoHTML = '';
  if (bank.hasVideo && bank.videoSrc) {
    videoHTML = `
      <div class="about-modal-video">
        <video src="${bank.videoSrc}" autoplay loop muted playsinline preload="auto"></video>
      </div>
    `;
  }
  
  body.innerHTML = `
    <h2 class="modal-title">${bank.name}</h2>
    ${videoHTML}
    <p class="about-modal-text">${bank.about}</p>
  `;
  
  modal.classList.add('active');
  
  if (bank.hasVideo && bank.videoSrc) {
    const video = body.querySelector('video');
    if (video) {
      video.load();
    }
  }
}

function closeAboutModal(e) {
  if (e && e.target.id !== 'about-modal') return;
  const modal = document.getElementById('about-modal');
  modal.classList.remove('active');
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }
}

// TYPING ANIMATION
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  
  const text = 'latin producer';
  let i = 0;
  let deleting = false;
  
  function tick() {
    if (!deleting) {
      i++;
      el.innerHTML = text.slice(0, i) + '<span class="typing-cursor">&nbsp;</span>';
      if (i === text.length) {
        deleting = true;
        setTimeout(tick, 2500);
        return;
      }
      setTimeout(tick, 90);
    } else {
      i--;
      el.innerHTML = text.slice(0, i) + '<span class="typing-cursor">&nbsp;</span>';
      if (i === 0) {
        deleting = false;
        setTimeout(tick, 600);
        return;
      }
      setTimeout(tick, 45);
    }
  }
  
  el.innerHTML = '<span class="typing-cursor">&nbsp;</span>';
  setTimeout(tick, 500);
}

// SCROLL HINT
function initScrollHint() {
  const hint = document.getElementById('scroll-hint');
  if (!hint) return;
  
  let dismissed = false;
  
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    hint.classList.add('hide');
    setTimeout(() => { hint.style.display = 'none'; }, 400);
  }
  
  window.addEventListener('scroll', dismiss, { once: true, passive: true });
  setTimeout(dismiss, 8000);
}

// EMAIL DISCOUNT POPUP
function initEmailPopup() {
  const popup = document.getElementById('email-popup');
  const form = document.getElementById('discount-form');
  const success = document.getElementById('discount-success');
  
  if (!popup || !form) return;
  
  if (sessionStorage.getItem('emailPopupShown') === '1') return;
  
  setTimeout(() => {
    popup.classList.add('active');
    sessionStorage.setItem('emailPopupShown', '1');
  }, 10000);
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xykrband', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.style.display = 'none';
        success.classList.add('show');
      }
    } catch (err) {
      form.style.display = 'none';
      success.classList.add('show');
    }
  });
}

function closeEmailPopup(e) {
  if (e && e.target.id !== 'email-popup' && !e.target.classList.contains('email-popup-dismiss')) return;
  document.getElementById('email-popup').classList.remove('active');
}

// INITIALIZE
function init() {
  renderBanks('home-banks', featuredIds);
  renderAllBanks();
  initTypingAnimation();
  initScrollHint();
  initEmailPopup();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
