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
    
    if (bank.status === 'available') {
      card.onclick = () => openProductModal(bank);
    }
    
    let coverHTML = '';
    if (bank.hasCover) {
      coverHTML = `<div class="bank-cover"><img src="${bank.coverImage}" alt="${bank.name}"></div>`;
    } else {
      coverHTML = `<div class="bank-cover placeholder">coming soon</div>`;
    }
    
    card.innerHTML = `
      ${coverHTML}
      <div class="bank-info">
        <div class="bank-name">${bank.name}</div>
        <div class="bank-status">${bank.status}</div>
        ${bank.status === 'available' ? `<div class="bank-price">$${bank.price.toFixed(2)}</div>` : ''}
        <button class="bank-btn ${bank.status === 'coming soon' ? 'bank-btn-disabled' : ''}" 
          onclick="${bank.status === 'available' ? "openProductModal(banks.find(b => b.id === " + bank.id + "))" : 'null'}" 
          ${bank.status === 'coming soon' ? 'disabled' : ''}>
          ${bank.status === 'available' ? 'view' : 'coming soon'}
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// RENDER ALL BANKS
function renderAllBanks() {
  const allIds = banks.map(b => b.id);
  renderBanks('shop-banks', allIds);
}

// MODAL
function openProductModal(bank) {
  const modal = document.getElementById('product-modal');
  const body = document.getElementById('modal-body');
  
  body.innerHTML = `
    <h2 class="modal-title">${bank.name}</h2>
    <div class="modal-price">$${bank.price.toFixed(2)}</div>
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

// INITIALIZE
function init() {
  renderBanks('home-banks', featuredIds);
  renderAllBanks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
