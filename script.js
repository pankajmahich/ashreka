/**
 * ASHREKA ♡ - Interactive Web Experience
 * Official Landing Page Scripts
 */

// Global State
const state = {
  stems: {
    lily: 1,      // Ashreka Signature Ruffled Lily
    tulip: 3,
    daisy: 2,
    sunflower: 1,
    rose: 0,
    lavender: 2
  },
  stemPrices: {
    lily: 140,
    tulip: 80,
    daisy: 70,
    sunflower: 150,
    rose: 110,
    lavender: 60
  },
  stemNames: {
    lily: 'Ruffled Lily 🪷',
    tulip: 'Chenille Tulip 🌷',
    daisy: 'Fluffy Daisy 🌼',
    sunflower: 'Velvet Sunflower 🌻',
    rose: 'Forever Rose 🌹',
    lavender: 'Lilac Lavender 🪻'
  },
  cart: JSON.parse(localStorage.getItem('ashreka_cart') || '[]')
};

// Catalog Data for Quick View & Modals
const catalogData = {
  1: {
    id: 1,
    name: 'The Pastel Meadow Symphony',
    category: 'Forever Bouquet',
    price: 899,
    originalPrice: 1199,
    img: 'images/hero.jpg',
    desc: 'An enchanting pastel bouquet featuring plush chenille tulips in baby pink and lavender, sunny chamomile daisies, and delicate lilac sprigs. Wrapped in Korean frosted paper with sheer organza bow and battery-powered micro fairy lights.',
    features: [
      'Handcrafted with velvety-soft chenille stems',
      'Includes complimentary warm LED fairy lights',
      'Never wilts, fades, or loses shape',
      'Free customized calligraphy message card'
    ]
  },
  2: {
    id: 2,
    name: 'Sun-Kissed Radiance Sunflower Bouquet',
    category: 'Sunshine Collection',
    price: 799,
    originalPrice: 999,
    img: 'images/sunflower.jpg',
    desc: 'Bright and cheerful velvet sunflowers with textured brown seed centers, chamomile daisies, and sage foliage. Hand-wrapped in earthy eco-friendly kraft paper and bound with a rustic twine bow.',
    features: [
      'Bold textured 3D sunflower centers',
      'Pairs beautifully with graduation and cheer-up gifts',
      'Includes mini warm fairy lights',
      'Sturdy stems with flexible inner wire'
    ]
  },
  3: {
    id: 3,
    name: 'Dreamy Pastel Tulip Bundle',
    category: 'Tulip Elegance',
    price: 649,
    originalPrice: 850,
    img: 'images/tulips.jpg',
    desc: 'Graceful chenille tulips in serene baby blue, blush cream, and pastel pink tones. Tied with a shimmering blush ribbon that looks adorable on study tables and vanity dressers.',
    features: [
      'Smooth curved petal geometry',
      'Dust-resistant plush texture',
      'Includes fairy lights and cute gift tag',
      'Best gift for besties and anniversaries'
    ]
  },
  4: {
    id: 4,
    name: 'Artisan Pearl Flower Keychains',
    category: 'Mini Keepsakes',
    price: 199,
    originalPrice: 299,
    img: 'images/keychains.jpg',
    desc: 'Ultra-cute pocket companions! Features miniature fuzzy chenille tulips, daisies, and roses paired with gold swivel lobster clasps, lustrous pearl charms, and satin ribbons.',
    features: [
      'Durable gold-tone hardware',
      'Lightweight and gentle on handbags/keys',
      'Available in pastel pink, mint, peach, and white',
      'Ideal bulk party favors & friendship tokens'
    ]
  },
  5: {
    id: 5,
    name: 'Eternal Velvet Rose Hamper Box',
    category: 'Luxury Keepsake',
    price: 1199,
    originalPrice: 1499,
    img: 'images/roses.jpg',
    desc: 'Deep crimson and blush pink handcrafted chenille roses nestled inside a rigid wine keepsake gift box with golden lettered greeting card and woven fairy lights.',
    features: [
      'Multi-layered realistic rose spiral petals',
      'Deluxe keepsake box with satin pull-ribbon',
      'Includes premium gold-stamped "With Love" card',
      'The ultimate romantic statement gift'
    ]
  },
  6: {
    id: 6,
    name: 'Milestone & Graduation Special',
    category: 'Occasion Bespoke',
    price: 949,
    originalPrice: 1250,
    img: 'images/hero.jpg',
    desc: 'Personalized celebration bouquet customized to match school or convocation colors, with optional mini graduation cap charm or fuzzy bear companion.',
    features: [
      'Customizable school & department color accents',
      'Graduation cap or ribbon tassel add-on available',
      'Free congratulations greeting card',
      'Long-lasting souvenir of your big accomplishment'
    ]
  },
  101: {
    id: 101,
    name: 'Sapphire Wave Ruffled Lily (Ashreka Original)',
    category: 'Ashreka Studio Signature',
    price: 449,
    originalPrice: 599,
    img: 'images/lily_blue_1.jpg',
    desc: 'An original signature creation hand-twisted by Ashreka! Features breathtaking dual-tone sky blue petals with rich royal blue ruffled scalloped borders and pink fuzzy pistil stamens on a long floral stem.',
    features: [
      'Authentic studio-crafted Ashreka design',
      'Intricate ruffled wire-loop technique',
      'Striking two-tone sapphire gradient',
      'Comes with mini fairy lights upon request'
    ]
  },
  102: {
    id: 102,
    name: 'Cotton-Candy Twilight Ruffled Lily',
    category: 'Ashreka Studio Signature',
    price: 449,
    originalPrice: 599,
    img: 'images/lily_pink_bloom.jpg',
    desc: 'Pure fairytale daydream! Hand-sculpted lavender star petals trimmed with baby-pink ruffled frills and pearl-accented stamen center. Looks magical on display in any bedroom.',
    features: [
      'Signature Ashreka ruffled petal border',
      'Soft pastel lavender and blush pink harmony',
      'Sturdy wired stem for vases or handheld bouquets',
      '100% handcrafted original art piece'
    ]
  }
};

// Initialize DOM Events
document.addEventListener('DOMContentLoaded', () => {
  initPetalCanvas();
  initNavScroll();
  initMobileMenu();
  initFilterTabs();
  updateBuilderSummary();
  updateCartBadge();
  setupModalDismissals();
  updateCurrentYear();
});

// Update Copyright Year
function updateCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

// -------------------------------------------------------------
// Interactive Bouquet Builder Logic
// -------------------------------------------------------------
function updateStem(type, delta) {
  if (state.stems[type] === undefined) return;
  const nextVal = state.stems[type] + delta;
  if (nextVal >= 0 && nextVal <= 12) {
    state.stems[type] = nextVal;
    const countEl = document.getElementById(`count-${type}`);
    if (countEl) countEl.textContent = nextVal;
    updateBuilderSummary();
  }
}

function updateBuilderSummary() {
  const liveSummaryEl = document.getElementById('liveStemSummary');
  const totalPriceEl = document.getElementById('builderTotalPrice');
  const paletteEl = document.getElementById('summaryPalette');
  const wrapEl = document.getElementById('summaryWrap');
  const extrasEl = document.getElementById('summaryExtras');
  const previewImg = document.getElementById('builderPreviewImg');

  // Calculate stem price
  let totalStems = 0;
  let stemsPrice = 0;
  let summaryChipsHTML = '';

  for (const [stem, count] of Object.entries(state.stems)) {
    if (count > 0) {
      totalStems += count;
      stemsPrice += count * (state.stemPrices[stem] || 70);
      summaryChipsHTML += `<span class="stem-tag">${count}x ${state.stemNames[stem]}</span>`;
    }
  }

  if (totalStems === 0) {
    summaryChipsHTML = '<span class="stem-tag" style="color: #999;">No stems selected yet</span>';
  }

  if (liveSummaryEl) liveSummaryEl.innerHTML = summaryChipsHTML;

  // Selected Palette
  const selectedPaletteRadio = document.querySelector('input[name="palette"]:checked');
  const paletteName = selectedPaletteRadio ? selectedPaletteRadio.value : 'Pastel Candy Dream';
  if (paletteEl) paletteEl.textContent = paletteName.split('(')[0].trim();

  // Selected Wrapping
  const wrappingSelect = document.getElementById('wrappingChoice');
  const wrapName = wrappingSelect ? wrappingSelect.value.split('+')[0].trim() : 'Korean Frosted Matte Pink';
  if (wrapEl) wrapEl.textContent = wrapName;

  // Add-ons
  const fairyLights = document.getElementById('addonFairyLights')?.checked;
  const card = document.getElementById('addonCard')?.checked;
  const keychain = document.getElementById('addonKeychain')?.checked;

  let extrasArr = [];
  let extrasPrice = 0;
  if (fairyLights) extrasArr.push('Fairy Lights');
  if (card) extrasArr.push('Message Card');
  if (keychain) {
    extrasArr.push('Matching Keychain (+₹149)');
    extrasPrice += 149;
  }
  if (extrasEl) extrasEl.textContent = extrasArr.length > 0 ? extrasArr.join(', ') : 'None';

  // Base wrapping & arrangement cost
  const baseCraftCost = totalStems > 0 ? 199 : 0;
  const grandTotal = stemsPrice + baseCraftCost + extrasPrice;

  if (totalPriceEl) totalPriceEl.textContent = `₹${grandTotal}`;

  // Dynamic preview photo based on stems
  if (previewImg) {
    if (state.stems.lily > 0 && state.stems.tulip === 0 && state.stems.sunflower === 0) {
      previewImg.src = 'images/lily_blue_1.jpg';
    } else if (state.stems.sunflower > 1) {
      previewImg.src = 'images/sunflower.jpg';
    } else if (state.stems.rose > 1) {
      previewImg.src = 'images/roses.jpg';
    } else if (state.stems.tulip > 2) {
      previewImg.src = 'images/tulips.jpg';
    } else {
      previewImg.src = 'images/hero.jpg';
    }
  }
}

function generateBuilderOrderText() {
  const selectedPaletteRadio = document.querySelector('input[name="palette"]:checked');
  const paletteName = selectedPaletteRadio ? selectedPaletteRadio.value : 'Pastel Candy Dream';
  const wrappingChoice = document.getElementById('wrappingChoice')?.value || 'Korean Frosted Matte Pink';
  const fairyLights = document.getElementById('addonFairyLights')?.checked ? 'Yes (Included)' : 'No';
  const card = document.getElementById('addonCard')?.checked ? 'Yes (Included)' : 'No';
  const keychain = document.getElementById('addonKeychain')?.checked ? 'Yes (+₹149)' : 'No';
  const cardMessage = document.getElementById('customCardText')?.value.trim();
  const totalPrice = document.getElementById('builderTotalPrice')?.textContent || '₹749';

  const stemsList = Object.entries(state.stems)
    .filter(([_, count]) => count > 0)
    .map(([stem, count]) => `• ${count}x ${state.stemNames[stem]}`)
    .join('\n');

  let text = `🌸 *ASHREKA CUSTOM BOUQUET ORDER SPEC* 🌸\n\n`;
  text += `*Stems Selected:*\n${stemsList || '• Custom blend'}\n\n`;
  text += `🎨 *Color Aesthetic:* ${paletteName}\n`;
  text += `🎀 *Wrapping Style:* ${wrappingChoice}\n`;
  text += `✨ *Fairy Lights:* ${fairyLights}\n`;
  text += `💌 *Card:* ${card}\n`;
  if (cardMessage) {
    text += `📝 *Card Note:* "${cardMessage}"\n`;
  }
  text += `🌸 *Keychain Addon:* ${keychain}\n\n`;
  text += `💰 *Estimated Price:* ${totalPrice}\n\n`;
  text += `Hi Ashreka! I crafted this custom bouquet on your landing page and would love to place this order! ♡`;

  return text;
}

function sendBuilderToWhatsapp() {
  const text = generateBuilderOrderText();
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

function sendBuilderToInstagram() {
  const text = generateBuilderOrderText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('✨ Custom bouquet specs copied to clipboard! Opening Instagram DM...');
    setTimeout(() => {
      window.open('https://www.instagram.com/ashrekaofficial01/?hl=en', '_blank');
    }, 1200);
  }).catch(() => {
    window.open('https://www.instagram.com/ashrekaofficial01/?hl=en', '_blank');
  });
}

// -------------------------------------------------------------
// Cart / Wishlist Drawer System
// -------------------------------------------------------------
function addToWishlist(name, price, img) {
  state.cart.push({
    id: Date.now(),
    name,
    price,
    img
  });
  localStorage.setItem('ashreka_cart', JSON.stringify(state.cart));
  updateCartBadge();
  showToast(`🌸 Added "${name}" to your order list!`);
}

function removeFromWishlist(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  localStorage.setItem('ashreka_cart', JSON.stringify(state.cart));
  updateCartBadge();
  renderWishlistModal();
}

function updateCartBadge() {
  const badge = document.getElementById('cartCountBadge');
  if (badge) badge.textContent = state.cart.length;
}

function renderWishlistModal() {
  const container = document.getElementById('wishlistItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-text">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">💐</p>
        <p><strong>Your bouquet collection is currently empty.</strong></p>
        <p style="font-size: 0.85rem;">Browse our handcrafted creations above and tap "+ Add to Order"!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (grandTotalEl) grandTotalEl.textContent = '₹0';
    return;
  }

  let total = 0;
  let itemsHTML = '';

  state.cart.forEach(item => {
    total += item.price;
    itemsHTML += `
      <div class="cart-item-row">
        <img src="${item.img}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">₹${item.price}</div>
        </div>
        <button type="button" class="cart-item-remove" onclick="removeFromWishlist(${item.id})" title="Remove item" aria-label="Remove item">&times;</button>
      </div>
    `;
  });

  container.innerHTML = itemsHTML;
  if (subtotalEl) subtotalEl.textContent = `₹${total}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${total}`;
}

function openWishlistModal() {
  renderWishlistModal();
  const modal = document.getElementById('wishlistModal');
  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  if (modal && typeof modal.close === 'function') {
    modal.close();
  }
}

function checkoutViaWhatsapp() {
  if (state.cart.length === 0) {
    showToast('Your order list is empty. Add a bouquet first!');
    return;
  }

  let text = `🌸 *ASHREKA ORDER INQUIRY* 🌸\n\n`;
  text += `Hi Ashreka! I selected these handcrafted pieces from your landing page:\n\n`;

  let total = 0;
  state.cart.forEach((item, index) => {
    text += `${index + 1}. *${item.name}* - ₹${item.price}\n`;
    total += item.price;
  });

  text += `\n✨ *Includes:* Complimentary Fairy Lights & Handwritten Gift Note\n`;
  text += `💰 *Total Estimated:* ₹${total}\n\n`;
  text += `Please let me know how we can proceed with delivery & payment! ♡`;

  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function checkoutViaInstagram() {
  if (state.cart.length === 0) {
    showToast('Your order list is empty. Add a bouquet first!');
    return;
  }

  let text = `🌸 *ASHREKA ORDER INQUIRY* 🌸\n\n`;
  state.cart.forEach((item, index) => {
    text += `${index + 1}. ${item.name} (₹${item.price})\n`;
  });
  text += `\nI would love to order these! Can you share details for payment and delivery? ♡`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('✨ Order details copied to clipboard! Opening Instagram...');
    setTimeout(() => {
      window.open('https://www.instagram.com/ashrekaofficial01/?hl=en', '_blank');
    }, 1000);
  }).catch(() => {
    window.open('https://www.instagram.com/ashrekaofficial01/?hl=en', '_blank');
  });
}

// -------------------------------------------------------------
// Product Preview Modal (<dialog>)
// -------------------------------------------------------------
function previewProduct(id) {
  const product = catalogData[id];
  if (!product) return;

  const modalContent = document.getElementById('modalProductContent');
  if (!modalContent) return;

  const featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');

  modalContent.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-media">
        <img src="${product.img}" alt="${product.name}" class="modal-product-img">
      </div>
      <div class="modal-product-info">
        <span class="category-name">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="modal-product-price">₹${product.price} <span class="original-val">₹${product.originalPrice}</span></div>
        <p class="product-snippet">${product.desc}</p>
        
        <ul class="modal-features-list">
          ${featuresHTML}
        </ul>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <button type="button" class="btn btn-primary" onclick="addToWishlist('${product.name}', ${product.price}, '${product.img}'); closeProductModal();">
            + Add to Order
          </button>
          <button type="button" class="btn btn-whatsapp" onclick="quickOrderWhatsapp('${product.name}', ${product.price})">
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('productPreviewModal');
  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

function closeProductModal() {
  const modal = document.getElementById('productPreviewModal');
  if (modal && typeof modal.close === 'function') {
    modal.close();
  }
}

function quickOrderWhatsapp(name, price) {
  const text = `Hi Ashreka! I'd like to order "${name}" (₹${price}) from your landing page with fairy lights. Can you confirm availability? ♡`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function openOrderModal(name, price, img) {
  addToWishlist(name, parseInt(price, 10), img);
  openWishlistModal();
}

// -------------------------------------------------------------
// Filter Tabs for Catalog
// -------------------------------------------------------------
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// -------------------------------------------------------------
// Light Dismiss for Modals (Click Outside)
// -------------------------------------------------------------
function setupModalDismissals() {
  const modals = [document.getElementById('productPreviewModal'), document.getElementById('wishlistModal')];
  
  modals.forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
      }
    });
  });

  const openWishlistBtn = document.getElementById('openWishlistBtn');
  if (openWishlistBtn) {
    openWishlistBtn.addEventListener('click', openWishlistModal);
  }
}

// -------------------------------------------------------------
// Mobile Menu Navigation
// -------------------------------------------------------------
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('navMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav links
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Smooth Header Background on Scroll
function initNavScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// -------------------------------------------------------------
// Toast Alerts
// -------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function copyHandleToClipboard() {
  navigator.clipboard.writeText('@ashrekaofficial01').then(() => {
    const btn = document.getElementById('copyBtnText');
    if (btn) btn.textContent = '✓ Copied @ashrekaofficial01';
    showToast('✨ Handle copied: @ashrekaofficial01');
    setTimeout(() => {
      if (btn) btn.textContent = '📋 Copy Handle';
    }, 2500);
  });
}

// -------------------------------------------------------------
// Floating Petal Canvas Animation
// -------------------------------------------------------------
function initPetalCanvas() {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = 22;
  const colors = [
    'rgba(244, 172, 183, 0.45)', // blush pink
    'rgba(216, 180, 226, 0.4)',  // soft lilac
    'rgba(162, 210, 255, 0.35)', // baby blue
    'rgba(255, 229, 217, 0.45)'  // cream peach
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 5,
      speedX: Math.random() * 1.2 - 0.6,
      speedY: Math.random() * 0.9 + 0.4,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.5 - 0.75,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      // Draw soft petal curve
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.5, -p.size / 2, 0, p.size);
      ctx.bezierCurveTo(-p.size * 1.5, -p.size / 2, -p.size / 2, -p.size, 0, 0);
      ctx.fill();

      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
