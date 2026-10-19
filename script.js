/**
 * ASHREKA ♡ - Interactive Web Experience
 * Official Landing Page Scripts
 */

// =============================================================
// ASHREKA STORE CONFIGURATION
// (Update ownerEmail below with your email address!)
// =============================================================
const ASHREKA_CONFIG = {
  // Replace this placeholder with your actual email address when ready:
  ownerEmail: "ashrekaofficial01@gmail.com",
  
  // Optional Formspree endpoint (e.g. "https://formspree.io/f/xyzab...")
  formspreeEndpoint: ""
};

// Global State
const state = {
  stems: {
    lily: 1,      // Ashreka Signature Ruffled Lily
    tulip: 3,
    daisy: 2,
    sunflower: 1,
    rose: 0,
    lavender: 2,
    hibiscus: 0,
    sakura: 0
  },
  stemPrices: {
    lily: 140,
    tulip: 80,
    daisy: 70,
    sunflower: 150,
    rose: 110,
    lavender: 60,
    hibiscus: 160,
    sakura: 90
  },
  stemNames: {
    lily: 'Ruffled Lily 🪷',
    tulip: 'Chenille Tulip 🌷',
    daisy: 'Fluffy Daisy 🌼',
    sunflower: 'Velvet Sunflower 🌻',
    rose: 'Forever Rose 🌹',
    lavender: 'Lilac Lavender 🪻',
    hibiscus: 'Crimson Hibiscus 🌺',
    sakura: 'Sakura Bloom 🌸'
  },
  cart: JSON.parse(localStorage.getItem('ashreka_cart') || '[]'),
  delivery: JSON.parse(localStorage.getItem('ashreka_delivery') || '{"name":"","phone":"","address":"","pincode":""}'),
  shippingFee: 49
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
  },
  103: {
    id: 103,
    name: 'Blush Radiance Ruffled Lily Bouquet',
    category: 'Ashreka Studio Signature',
    price: 699,
    originalPrice: 899,
    img: 'images/bouquet_pink_custom.jpg',
    desc: 'An authentic Ashreka studio original! Handcrafted two-tone pink and white ruffled lilies with blooming chenille tulips, wrapped in frosted Korean paper and crowned with an elegant white lace bow. Fully customisable color themes and fairy lights available.',
    features: [
      '100% authentic Ashreka handcrafted masterpiece',
      'Intricate two-tone pink & white ruffled petal edging',
      'Frosted translucent wrap with luxury white bow',
      'Free customized calligraphy note & warm fairy lights'
    ]
  },
  104: {
    id: 104,
    name: 'Imperial Magenta Stargazer Bloom',
    category: 'Ashreka Studio Signature',
    price: 449,
    originalPrice: 599,
    img: 'images/lily_magenta_bloom.jpg',
    desc: 'A vivid, sculpted statement bloom! Hand-twisted rich fuchsia and magenta velvet chenille petals with frosty silver stamen pistils and emerald wired stem. Accompanied by an authentic Ashreka signature keepsake card.',
    features: [
      'Rich vibrant magenta velvet chenille texture',
      'Multi-tiered blooming sculpted petal geometry',
      'Delicate frosted stamen pistil center',
      'Includes authentic Ashreka handwritten signature card'
    ]
  },
  105: {
    id: 105,
    name: 'Blush Sakura Five-Petal Bloom',
    category: 'Ashreka Studio Signature',
    price: 349,
    originalPrice: 499,
    img: 'images/sakura_pink_bloom.jpg',
    desc: 'A tender cherry-blossom dream! Hand-twisted blush pink velvety petals sculpted in five delicate open loops around a coiled rosette center, accented with gleaming white pearl-tipped stamens on an elongated flexible botanical stem.',
    features: [
      'Five hand-shaped soft blush chenille petal loops',
      'Coiled rosette spiral core with delicate pearl stamens',
      'Wired stem can be bent, trimmed, or arranged in any vase',
      '100% handcrafted studio original by Ashreka'
    ]
  },
  106: {
    id: 106,
    name: 'Midnight Noir Lavender Orchid',
    category: 'Studio Exclusive',
    price: 449,
    originalPrice: 599,
    img: 'images/gothic_lavender_lily.jpg',
    desc: 'A sensational gothic romance statement piece! Crafted with ethereal pastel lilac petals dramatically outlined with deep velvet noir black ruffled scalloped piping and adorned with frosted white stamen filaments.',
    features: [
      'Dramatic midnight-black ruffled fluted borders',
      'Pastel lilac & gothic noir contrast aesthetic',
      'Hand-shaped organic petal curves that hold shape forever',
      'Stunning solo statement flower or bouquet highlight'
    ]
  },
  107: {
    id: 107,
    name: 'Royal Crimson Hibiscus Trio',
    category: 'Ashreka Studio Signature',
    price: 549,
    originalPrice: 699,
    img: 'images/crimson_hibiscus.jpg',
    desc: 'A magnificent cluster of three blooming tropical hibiscus flowers in rich scarlet red velvet chenille. Features elongated fuzzy bright yellow pollen pistils and deep forest green wired stems for an opulent tropical aura.',
    features: [
      'Trio of 3 fully bloomed hibiscus flowers on clustered stems',
      'Rich scarlet red velvety chenille texture',
      'Signature sculpted yellow pollen stamen crowns',
      'Brings vivid warmth and life to any home or desk'
    ]
  },
  108: {
    id: 108,
    name: 'Electric Blue Sapphire Stargazer',
    category: 'Ashreka Studio Signature',
    price: 449,
    originalPrice: 599,
    img: 'images/sapphire_stargazer.jpg',
    desc: 'An electrifying star bloom! Six slender recurved lily petals featuring light sky-blue centers framed by radiant royal blue ruffled pipe-cleaner piping and slender black stamen pistils.',
    features: [
      'Six arched star-lily petals with vibrant sapphire contrast',
      'Ruffled chenille perimeter technique unique to Ashreka',
      'Contrasting black stamen pistils with pearl accents',
      'Includes signature calligraphy keepsake tag'
    ]
  },
  109: {
    id: 109,
    name: 'Parisian Vintage Blue Daisy Cone',
    category: 'Ready-to-Gift Bouquets',
    price: 399,
    originalPrice: 499,
    img: 'images/paris_blue_daisy.jpg',
    desc: 'French vintage charm in a cone! Multi-tiered layered chamomile daisy petals in serene cerulean blue with a sweet pink-and-white concentric core, wrapped in authentic Louvre Paris typography newsprint parchment.',
    features: [
      'Multi-tiered plush blue chamomile daisy petals',
      'Authentic Parisian vintage newspaper wrap cone',
      'Hand-tied and ready to gift immediately',
      'Complimentary warm fairy lights & custom message note'
    ]
  }
};

// Initialize DOM Events
document.addEventListener('DOMContentLoaded', () => {
  initPetalCanvas();
  initNavScroll();
  initMobileMenu();
  initFilterTabs();
  initCatalogDragScroll();
  initInstagramDragScroll();
  loadSavedDeliveryFields();
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
  const craftSubtotal = stemsPrice + baseCraftCost + extrasPrice;
  const shippingFee = 49;
  const grandTotal = craftSubtotal + (craftSubtotal > 0 ? shippingFee : 0);

  const craftPriceEl = document.getElementById('builderCraftPrice');
  if (craftPriceEl) craftPriceEl.textContent = `₹${craftSubtotal}`;
  if (totalPriceEl) totalPriceEl.textContent = `₹${grandTotal}`;

  // Dynamic preview photo based on stems
  if (previewImg) {
    if (state.stems.lily > 0 && state.stems.tulip > 0) {
      previewImg.src = 'images/bouquet_pink_custom.jpg';
    } else if (state.stems.lily > 0) {
      previewImg.src = 'images/lily_magenta_bloom.jpg';
    } else if (state.stems.sunflower > 1) {
      previewImg.src = 'images/sunflower.jpg';
    } else if (state.stems.rose > 1) {
      previewImg.src = 'images/roses.jpg';
    } else if (state.stems.tulip > 2) {
      previewImg.src = 'images/tulips.jpg';
    } else {
      previewImg.src = 'images/bouquet_pink_custom.jpg';
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
  const craftPrice = document.getElementById('builderCraftPrice')?.textContent || '₹749';
  const totalPrice = document.getElementById('builderTotalPrice')?.textContent || '₹798';

  const recipientName = state.delivery.name || document.getElementById('builderRecipientName')?.value.trim() || '';
  const contactNo = state.delivery.phone || document.getElementById('builderContactNo')?.value.trim() || '';
  const permanentAddress = state.delivery.address || document.getElementById('builderAddress')?.value.trim() || '';
  const pinCode = state.delivery.pincode || document.getElementById('builderPincode')?.value.trim() || '';

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

  text += `📍 *RECIPIENT & DELIVERY DETAILS:*\n`;
  text += `• *Name of Recipient:* ${recipientName || '[Pending/To be shared]'}\n`;
  text += `• *Contact No.:* ${contactNo || '[Pending/To be shared]'}\n`;
  text += `• *Permanent Address:* ${permanentAddress || '[Pending/To be shared]'}\n`;
  text += `• *PIN Code:* ${pinCode || '[Pending/To be shared]'}\n\n`;

  text += `💰 *PRICE BREAKDOWN:*\n`;
  text += `• Bouquet Craft Cost: ${craftPrice}\n`;
  text += `• Shipping Charges (Pan-India): ₹49\n`;
  text += `• *Estimated Total Payable:* ${totalPrice}\n\n`;
  text += `Hi Ashreka! I crafted this custom bouquet on your landing page and would love to place this order! ♡`;

  return text;
}

// Robust cross-browser clipboard copy helper
function copyTextToClipboard(text) {
  let copied = false;
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.style.opacity = '0';
    textArea.style.pointerEvents = 'none';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    copied = document.execCommand('copy');
    document.body.removeChild(textArea);
  } catch (err) {
    copied = false;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  return copied;
}

function sendBuilderToWhatsapp() {
  const text = generateBuilderOrderText();
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

function sendBuilderToInstagram() {
  const text = generateBuilderOrderText();

  // 1. Copy formatted bouquet specification to clipboard immediately
  copyTextToClipboard(text);

  // 2. Immediate tactile button visual feedback
  const btn = document.getElementById('btnSendIgBuilder');
  if (btn) {
    const span = btn.querySelector('span');
    const originalText = span ? span.textContent : 'DM Spec to @ashrekaofficial01';
    btn.classList.add('btn-copied-active');
    if (span) span.textContent = '✓ Spec Copied! Opening DM...';

    setTimeout(() => {
      if (span) span.textContent = originalText;
      btn.classList.remove('btn-copied-active');
    }, 3500);
  }

  // 3. User feedback toast
  showToast('✨ Specs copied to clipboard! Opening Instagram chat... Simply paste & send! 💌');

  // 4. Open Instagram Direct Message chat box synchronously during user click
  // (Using ig.me/m/ routes straight to DM conversation on both mobile app and web, avoiding popup blocker)
  window.open('https://ig.me/m/ashrekaofficial01', '_blank', 'noopener,noreferrer');
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
  const shippingFee = total > 0 ? 49 : 0;
  const grandTotal = total + shippingFee;

  if (subtotalEl) subtotalEl.textContent = `₹${total}`;
  const shippingEl = document.getElementById('cartShipping');
  if (shippingEl) shippingEl.textContent = `₹${shippingFee}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;
}

function syncDeliveryFields(field, value) {
  state.delivery[field] = value.trim();
  try {
    localStorage.setItem('ashreka_delivery', JSON.stringify(state.delivery));
  } catch (e) {}

  const bMap = {
    name: document.getElementById('builderRecipientName'),
    phone: document.getElementById('builderContactNo'),
    address: document.getElementById('builderAddress'),
    pincode: document.getElementById('builderPincode')
  };

  const cMap = {
    name: document.getElementById('cartRecipientName'),
    phone: document.getElementById('cartContactNo'),
    address: document.getElementById('cartAddress'),
    pincode: document.getElementById('cartPincode')
  };

  if (bMap[field] && bMap[field].value !== value) bMap[field].value = value;
  if (cMap[field] && cMap[field].value !== value) cMap[field].value = value;
}

function loadSavedDeliveryFields() {
  const d = state.delivery || {};
  const pairs = [
    ['name', 'builderRecipientName', 'cartRecipientName'],
    ['phone', 'builderContactNo', 'cartContactNo'],
    ['address', 'builderAddress', 'cartAddress'],
    ['pincode', 'builderPincode', 'cartPincode']
  ];

  pairs.forEach(([key, bId, cId]) => {
    if (d[key]) {
      const bEl = document.getElementById(bId);
      const cEl = document.getElementById(cId);
      if (bEl) bEl.value = d[key];
      if (cEl) cEl.value = d[key];
    }
  });
}

function openWishlistModal() {
  renderWishlistModal();
  loadSavedDeliveryFields();
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

  const recipientName = state.delivery.name || document.getElementById('cartRecipientName')?.value.trim() || '';
  const contactNo = state.delivery.phone || document.getElementById('cartContactNo')?.value.trim() || '';
  const permanentAddress = state.delivery.address || document.getElementById('cartAddress')?.value.trim() || '';
  const pinCode = state.delivery.pincode || document.getElementById('cartPincode')?.value.trim() || '';

  let text = `🌸 *ASHREKA ORDER INQUIRY* 🌸\n\n`;
  text += `Hi Ashreka! I selected these handcrafted pieces from your landing page:\n\n`;

  let subtotal = 0;
  state.cart.forEach((item, index) => {
    text += `${index + 1}. *${item.name}* - ₹${item.price}\n`;
    subtotal += item.price;
  });

  const shipping = subtotal > 0 ? 49 : 0;
  const grandTotal = subtotal + shipping;

  text += `\n✨ *Includes:* Complimentary Fairy Lights & Handwritten Gift Note\n\n`;

  text += `📍 *RECIPIENT & DELIVERY DETAILS:*\n`;
  text += `• *Name of Recipient:* ${recipientName || '[Pending/To be shared]'}\n`;
  text += `• *Contact No.:* ${contactNo || '[Pending/To be shared]'}\n`;
  text += `• *Permanent Address:* ${permanentAddress || '[Pending/To be shared]'}\n`;
  text += `• *PIN Code:* ${pinCode || '[Pending/To be shared]'}\n\n`;

  text += `💰 *PRICE BREAKDOWN:*\n`;
  text += `• Items Subtotal: ₹${subtotal}\n`;
  text += `• Shipping Charges (Pan-India): ₹${shipping}\n`;
  text += `• *Total Amount Payable:* ₹${grandTotal}\n\n`;
  text += `Please let me know how we can proceed with delivery & payment! ♡`;

  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function checkoutViaInstagram() {
  if (state.cart.length === 0) {
    showToast('Your order list is empty. Add a bouquet first!');
    return;
  }

  const recipientName = state.delivery.name || document.getElementById('cartRecipientName')?.value.trim() || '';
  const contactNo = state.delivery.phone || document.getElementById('cartContactNo')?.value.trim() || '';
  const permanentAddress = state.delivery.address || document.getElementById('cartAddress')?.value.trim() || '';
  const pinCode = state.delivery.pincode || document.getElementById('cartPincode')?.value.trim() || '';

  let text = `🌸 *ASHREKA ORDER INQUIRY* 🌸\n\n`;
  let subtotal = 0;
  state.cart.forEach((item, index) => {
    text += `${index + 1}. ${item.name} (₹${item.price})\n`;
    subtotal += item.price;
  });
  const shipping = subtotal > 0 ? 49 : 0;
  const grandTotal = subtotal + shipping;

  text += `\n📍 *RECIPIENT & DELIVERY DETAILS:*\n`;
  text += `• *Recipient:* ${recipientName || '[Pending/To be shared]'}\n`;
  text += `• *Contact:* ${contactNo || '[Pending/To be shared]'}\n`;
  text += `• *Permanent Address:* ${permanentAddress || '[Pending/To be shared]'}\n`;
  text += `• *PIN Code:* ${pinCode || '[Pending/To be shared]'}\n\n`;

  text += `💰 *PRICE BREAKDOWN:*\n`;
  text += `• Subtotal: ₹${subtotal} | Shipping: ₹${shipping} | Total: ₹${grandTotal}\n\n`;
  text += `I would love to order these! Can you share details for payment and delivery? ♡`;

  copyTextToClipboard(text);
  showToast('✨ Order & delivery details copied! Opening Instagram chat... Simply paste & send! 💌');
  window.open('https://ig.me/m/ashrekaofficial01', '_blank', 'noopener,noreferrer');
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
          <button type="button" class="btn btn-outline" onclick="quickOrderInstagram('${product.name}', ${product.price})">
            DM on Instagram
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

function quickOrderInstagram(name, price) {
  const text = `🌸 *ASHREKA ORDER INQUIRY* 🌸\n\nHi Ashreka! I'd like to order "${name}" (₹${price}) from your landing page with fairy lights. Can you confirm availability? ♡`;
  copyTextToClipboard(text);
  showToast('✨ Order inquiry copied! Opening Instagram chat... Simply paste & send! 💌');
  window.open('https://ig.me/m/ashrekaofficial01', '_blank', 'noopener,noreferrer');
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
  const countEl = document.getElementById('visibleCardCount');
  const grid = document.getElementById('productsGrid');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');
      let visible = 0;

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countEl) countEl.textContent = visible;
      if (grid) grid.scrollLeft = 0;
    });
  });
}

function scrollCatalog(direction) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const cardWidth = 326; // 310px width + gap
  grid.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
}

function initCatalogDragScroll() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  grid.addEventListener('mousedown', (e) => {
    if (e.target.closest('button, a')) return;
    isDown = true;
    grid.classList.add('is-dragging');
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  });

  grid.addEventListener('mouseleave', () => {
    isDown = false;
    grid.classList.remove('is-dragging');
  });

  grid.addEventListener('mouseup', () => {
    isDown = false;
    grid.classList.remove('is-dragging');
  });

  grid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 1.5;
    grid.scrollLeft = scrollLeft - walk;
  });
}

function scrollInstagram(direction) {
  const gallery = document.getElementById('igGallery');
  if (!gallery) return;
  const photoWidth = 260; // 240px width + 20px gap
  gallery.scrollBy({ left: direction * photoWidth * 2, behavior: 'smooth' });
}

function initInstagramDragScroll() {
  const gallery = document.getElementById('igGallery');
  if (!gallery) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('is-dragging');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('is-dragging');
  });

  gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('is-dragging');
  });

  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 1.5;
    gallery.scrollLeft = scrollLeft - walk;
  });
}

// -------------------------------------------------------------
// Light Dismiss for Modals (Click Outside)
// -------------------------------------------------------------
function setupModalDismissals() {
  const modals = [
    document.getElementById('productPreviewModal'),
    document.getElementById('wishlistModal'),
    document.getElementById('inquiryModal')
  ];
  
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
// Customer Inquiry Modal Functions
// -------------------------------------------------------------
function openInquiryModal() {
  const modal = document.getElementById('inquiryModal');
  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
    const nameInput = document.getElementById('inquiryName');
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
  }
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiryModal');
  if (modal && typeof modal.close === 'function') {
    modal.close();
  }
}

async function handleInquirySubmit(event) {
  event.preventDefault();

  const name = document.getElementById('inquiryName')?.value.trim();
  const email = document.getElementById('inquiryEmail')?.value.trim();
  const message = document.getElementById('inquiryMessage')?.value.trim();

  if (!name || !email || !message) {
    showToast('⚠️ Please fill out your name, email, and message.');
    return;
  }

  const submitBtn = document.getElementById('btnSubmitInquiry');
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '<span>✉ Send Inquiry</span>';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳ Sending Inquiry...</span>';
  }

  // 1. If Formspree endpoint is configured, send via AJAX POST
  if (ASHREKA_CONFIG.formspreeEndpoint) {
    try {
      const response = await fetch(ASHREKA_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: `🌸 Ashreka Flower Inquiry from ${name}` })
      });
      if (response.ok) {
        finishInquirySuccess(name);
        return;
      }
    } catch (err) {
      console.warn('Formspree endpoint failed, falling back to mail client:', err);
    }
  }

  // 2. Direct Mail Client Dispatch (mailto:)
  const subject = encodeURIComponent(`🌸 Ashreka Flower Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Hello Ashreka Team,\n\n` +
    `You have received a new customer inquiry from your website!\n\n` +
    `----------------------------------------\n` +
    `Customer Name : ${name}\n` +
    `Customer Email: ${email}\n` +
    `----------------------------------------\n\n` +
    `Inquiry Details:\n` +
    `${message}\n\n` +
    `Best regards,\n` +
    `${name}`
  );

  const targetEmail = ASHREKA_CONFIG.ownerEmail || 'ashrekaofficial01@gmail.com';
  const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

  // Launch pre-filled email client
  window.open(mailtoLink, '_blank');

  finishInquirySuccess(name);

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHTML;
  }
}

function finishInquirySuccess(name) {
  closeInquiryModal();
  document.getElementById('inquiryForm')?.reset();
  showToast(`💌 Thank you, ${name}! Your inquiry has been sent to Ashreka. We will reply to your email soon!`);
}

function sendInquiryViaWhatsapp() {
  const name = document.getElementById('inquiryName')?.value.trim() || 'Flower Lover';
  const email = document.getElementById('inquiryEmail')?.value.trim() || '';
  const message = document.getElementById('inquiryMessage')?.value.trim() || 'I have an inquiry about handcrafted bouquets.';

  const text = `🌸 *ASHREKA CUSTOMER INQUIRY* 🌸\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nCan you please get back to me? ♡`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
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
  copyTextToClipboard('@ashrekaofficial01');
  const btn = document.getElementById('copyBtnText');
  if (btn) btn.textContent = '✓ Copied @ashrekaofficial01';
  showToast('✨ Handle copied: @ashrekaofficial01');
  setTimeout(() => {
    if (btn) btn.textContent = '📋 Copy Handle';
  }, 2500);
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

// Interactive Hero Photo Switcher
function switchHeroImage(src, name, price) {
  const heroImg = document.querySelector('.hero-img');
  const pillTopStrong = document.querySelector('.pill-top strong');
  const pillPrice = document.querySelector('.pill-price');
  const pillBtn = document.querySelector('.pill-bottom .pill-btn');
  const buttons = document.querySelectorAll('.hero-thumb-btn');

  if (heroImg) {
    heroImg.style.opacity = '0.35';
    setTimeout(() => {
      heroImg.src = src;
      heroImg.style.opacity = '1';
    }, 150);
  }
  if (pillTopStrong) pillTopStrong.textContent = name;
  if (pillPrice) pillPrice.textContent = price;
  if (pillBtn) {
    pillBtn.setAttribute('onclick', `openOrderModal('${name}', '${price.replace(/\D/g, '')}', '${src}')`);
  }
  buttons.forEach(btn => {
    if (btn.querySelector('img')?.getAttribute('src') === src) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
