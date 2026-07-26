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

// RENDER PRESETS
function renderPresets(containerId, ids) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  ids.forEach(id => {
    const preset = presets.find(p => p.id === id);
    if (!preset) return;
    
    const card = document.createElement('div');
    card.className = 'preset-card';
    
    if (preset.status === 'available') {
      card.onclick = () => openProductModal(preset);
    }
    
    card.innerHTML = `
      <div class="preset-cover">${preset.emoji}</div>
      <div class="preset-info">
        <div class="preset-name">${preset.name}</div>
        <div class="preset-status">${preset.status}</div>
        ${preset.status === 'available' ? `<div class="preset-price">$${preset.price.toFixed(2)}</div>` : ''}
        <button class="preset-btn ${preset.status === 'coming soon' ? 'preset-btn-disabled' : ''}" 
          onclick="${preset.status === 'available' ? 'openProductModal(' + JSON.stringify(preset).replace(/"/g, '\\"') + ')' : 'null'}" 
          ${preset.status === 'coming soon' ? 'disabled' : ''}>
          ${preset.status === 'available' ? 'view' : 'coming soon'}
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// RENDER ALL PRESETS
function renderAllPresets() {
  const allIds = presets.map(p => p.id);
  renderPresets('shop-presets', allIds);
}

// MODAL
function openProductModal(preset) {
  const modal = document.getElementById('product-modal');
  const body = document.getElementById('modal-body');
  
  body.innerHTML = `
    <h2 class="modal-title">${preset.name}</h2>
    <div class="modal-price">$${preset.price.toFixed(2)}</div>
    <p>${preset.description}</p>
    <button class="modal-btn" onclick="purchaseProduct('${preset.name}')">purchase</button>
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
  renderPresets('home-presets', featuredIds);
  renderAllPresets();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
