/* ═══════════════════════════════════════════════
   SPICELANE — MASTER JAVASCRIPT
═══════════════════════════════════════════════ */

/* ════════════════════════════════
   DATA — MENU ITEMS
════════════════════════════════ */
const menuItems = [
  // DESI
  {
    id: 1, name: 'Chicken Biryani', tag: 'desi', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', desc: 'Fragrant basmati rice with tender chicken, whole spices & saffron.', price: 450, rating: '4.9', badge: 'hot',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Plate – Rs.450', 'Full Plate – Rs.800'], prices: [450, 800] }
  },
  {
    id: 2, name: 'Beef Nihari', tag: 'desi', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80', desc: 'Slow-cooked beef shank in rich aromatic gravy. A breakfast classic.', price: 380, rating: '4.8', badge: 'hot',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Bowl – Rs.380', 'Full Bowl – Rs.680'], prices: [380, 680] }
  },
  {
    id: 3, name: 'Mutton Karahi', tag: 'desi', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80', desc: 'Kadai-style mutton with tomatoes, green chillies & desi ghee.', price: 550, rating: '4.9',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Karahi – Rs.550', 'Full Karahi – Rs.980'], prices: [550, 980] }
  },
  {
    id: 4, name: 'Dal Makhani', tag: 'desi', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80', desc: 'Creamy black lentils simmered overnight with butter & cream.', price: 220, rating: '4.7',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Bowl – Rs.220', 'Full Bowl – Rs.380'], prices: [220, 380] }
  },
  {
    id: 5, name: 'Chicken Handi', tag: 'desi', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80', desc: 'Creamy chicken handi slow-cooked in a clay pot with desi spices.', price: 480, rating: '4.8', badge: 'hot',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Handi – Rs.480', 'Full Handi – Rs.860'], prices: [480, 860] }
  },
  {
    id: 6, name: 'Makhni Handi', tag: 'desi', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80', desc: 'Signature butter chicken handi — velvety, rich and deeply comforting.', price: 520, rating: '4.9', badge: 'hot',
    options: { type: 'portion', label: 'Choose Portion', choices: ['Half Handi – Rs.520', 'Full Handi – Rs.920'], prices: [520, 920] }
  },
  // BBQ
  {
    id: 7, name: 'Seekh Kebab Platter', tag: 'bbq', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80', desc: 'Juicy minced beef seekh kebabs with chutney & naan.', price: 320, rating: '4.8', badge: 'hot',
    options: { type: 'size', label: 'Choose Quantity', choices: ['4 Pieces – Rs.320', '8 Pieces – Rs.580', '12 Pieces – Rs.820'], prices: [320, 580, 820] }
  },
  {
    id: 8, name: 'Chicken Tikka', tag: 'bbq', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80', desc: 'Marinated chicken pieces grilled over charcoal till perfectly smoky.', price: 290, rating: '4.7',
    options: { type: 'size', label: 'Choose Quantity', choices: ['4 Pieces – Rs.290', '8 Pieces – Rs.530'], prices: [290, 530] }
  },
  {
    id: 9, name: 'BBQ Wings', tag: 'bbq', img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80', desc: 'Smoky, spicy BBQ chicken wings with dipping sauce.', price: 260, rating: '4.6',
    options: { type: 'size', label: 'Choose Quantity', choices: ['6 Wings – Rs.260', '12 Wings – Rs.480', '18 Wings – Rs.700'], prices: [260, 480, 700] }
  },
  // PIZZA
  {
    id: 10, name: 'Margherita Pizza', tag: 'pizza', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80', desc: 'Classic tomato sauce, fresh mozzarella & basil. Wood-fired perfection.', price: 480, rating: '4.7',
    options: { type: 'size', label: 'Choose Size', choices: ['Small (7″) – Rs.480', 'Medium (10″) – Rs.720', 'Large (14″) – Rs.950'], prices: [480, 720, 950] }
  },
  {
    id: 11, name: 'Spicy Chicken Pizza', tag: 'pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', desc: 'Loaded with spicy chicken, jalapeños & chipotle sauce.', price: 550, rating: '4.9', badge: 'hot',
    options: { type: 'size', label: 'Choose Size', choices: ['Small (7″) – Rs.550', 'Medium (10″) – Rs.820', 'Large (14″) – Rs.1080'], prices: [550, 820, 1080] }
  },
  {
    id: 12, name: 'BBQ Beef Pizza', tag: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80', desc: 'Smoky BBQ sauce, beef chunks, red onions & cheddar blend.', price: 580, rating: '4.8',
    options: { type: 'size', label: 'Choose Size', choices: ['Small (7″) – Rs.580', 'Medium (10″) – Rs.860', 'Large (14″) – Rs.1120'], prices: [580, 860, 1120] }
  },
  // BURGER
  {
    id: 13, name: 'Classic Burger', tag: 'burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', desc: 'Beef patty, lettuce, tomato, pickles & signature SpiceLane sauce.', price: 280, rating: '4.6',
    options: { type: 'size', label: 'Choose Size', choices: ['Regular – Rs.280', 'Double Patty – Rs.420'], prices: [280, 420] }
  },
  {
    id: 14, name: 'Zinger Burger', tag: 'burger', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80', desc: 'Crispy spicy chicken fillet with coleslaw & chipotle mayo in a brioche bun.', price: 320, rating: '4.9', badge: 'new',
    options: { type: 'size', label: 'Choose Size', choices: ['Regular – Rs.320', 'Double – Rs.480'], prices: [320, 480] }
  },
  {
    id: 15, name: 'Double Smash Burger', tag: 'burger', img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80', desc: 'Two smashed beef patties, American cheese & caramelised onions.', price: 420, rating: '4.8', badge: 'hot',
    options: { type: 'size', label: 'Choose Size', choices: ['Single Stack – Rs.420', 'Triple Stack – Rs.620'], prices: [420, 620] }
  },
  // ROLLS
  {
    id: 16, name: 'Chicken Roll', tag: 'roll', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80', desc: 'Tender chicken strips, chutney, onion & paratha wrap — a Kharian favourite.', price: 180, rating: '4.6',
    options: { type: 'size', label: 'Choose Size', choices: ['Regular – Rs.180', 'Large / Double – Rs.300'], prices: [180, 300] }
  },
  {
    id: 17, name: 'Seekh Roll', tag: 'roll', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', desc: 'Hot seekh kebab wrapped in soft paratha with raita & chutney.', price: 200, rating: '4.7',
    options: { type: 'size', label: 'Choose Size', choices: ['Regular – Rs.200', 'Large / Double – Rs.340'], prices: [200, 340] }
  },
  // SNACKS — Fixed with proper snack images
  {
    id: 18, name: 'Loaded Fries', tag: 'snack', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80', desc: 'Crispy fries topped with cheese sauce, jalapeños & chicken tikka.', price: 220, rating: '4.5', badge: 'new',
    options: { type: 'size', label: 'Choose Size', choices: ['Regular – Rs.220', 'Large – Rs.340'], prices: [220, 340] }
  },
  {
    id: 19, name: 'Samosa Chaat', tag: 'snack', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80', desc: 'Crispy samosas with yoghurt, tamarind chutney & chaat masala.', price: 150, rating: '4.8',
    options: { type: 'size', label: 'Choose Quantity', choices: ['2 Samosas – Rs.150', '4 Samosas – Rs.270'], prices: [150, 270] }
  },
  {
    id: 20, name: 'Pakora Platter', tag: 'snack', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80', desc: 'Mixed vegetable & chicken pakoras with mint chutney dip.', price: 160, rating: '4.6',
    options: { type: 'size', label: 'Choose Quantity', choices: ['Small – Rs.160', 'Large – Rs.280'], prices: [160, 280] }
  },
];

/* ── COFFEE: Fixed images — Masala Chai and Kashmiri Tea get proper images ── */
const coffeeItems = [
  { id: 101, name: 'Espresso', emoji: '☕', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80', desc: 'Pure, intense & bold — the foundation of all great coffee.', price: 120, sizes: ['Single', 'Double'] },
  { id: 102, name: 'Cappuccino', emoji: '🍵', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80', desc: 'Perfectly balanced espresso with silky steamed milk foam.', price: 180, sizes: ['Small', 'Medium', 'Large'] },
  // Fixed: proper caramel latte image (not ice cream)
  { id: 103, name: 'Caramel Latte', emoji: '🥛', img: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d3?w=500&q=80', desc: 'Smooth latte swirled with rich house-made caramel sauce.', price: 220, sizes: ['Medium', 'Large'] },
  { id: 104, name: 'Cold Coffee', emoji: '🧋', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80', desc: 'Chilled brewed coffee blended with cream & ice. Ultra refreshing.', price: 200, sizes: ['Regular', 'Large'] },
  { id: 105, name: 'Hazelnut Mocha', emoji: '🍫', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', desc: 'Dark chocolate, hazelnut & espresso — pure indulgence in a cup.', price: 250, sizes: ['Medium', 'Large'] },
  { id: 106, name: 'Dalgona Coffee', emoji: '☕', img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500&q=80', desc: 'Whipped coffee cloud on creamy cold milk. The TikTok legend.', price: 230, sizes: ['Regular'], badge: 'new' },
  // Fixed: Masala Chai — proper chai/tea image (NOT ice cream)
  { id: 107, name: 'Masala Chai', emoji: '🫖', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', desc: 'Spiced desi tea with cardamom, ginger, cinnamon & cloves.', price: 80, sizes: ['Cup', 'Kettle'] },
  // Fixed: Kashmiri Pink Tea — proper pink tea image (NOT ice cream)
  { id: 108, name: 'Kashmiri Pink Tea', emoji: '🌸', img: 'https://images.unsplash.com/photo-1596803244897-c25073c6a936?w=500&q=80', desc: 'Traditional noon chai — creamy, salty & utterly comforting.', price: 100, sizes: ['Cup', 'Large'] },
];

const drinksItems = [
  {
    id: 201, name: 'Fresh Juices', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80',
    flavours: ['Mango', 'Orange', 'Watermelon', 'Pineapple', 'Mix Fruit', 'Guava', 'Pomegranate'], price: 120
  },
  {
    id: 202, name: 'Milkshakes', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80',
    flavours: ['Strawberry', 'Chocolate', 'Vanilla', 'Oreo', 'Banana', 'Caramel', 'Mango'], price: 180
  },
  {
    id: 203, name: 'Desi Drinks', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80',
    flavours: ['Lassi (Sweet)', 'Lassi (Salty)', 'Rooh Afza', 'Shikanji', 'Sattu'], price: 80
  },
  {
    id: 204, name: 'Soft Drinks', img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&q=80',
    flavours: ['Pepsi', '7UP', 'Mountain Dew', 'Mirinda', 'Sting'], price: 60
  },
  {
    id: 205, name: 'Ice Cream', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&q=80',
    flavours: ['Chocolate', 'Vanilla', 'Strawberry', 'Mango', 'Pistachio', 'Caramel', 'Blueberry', 'Butterscotch', 'Cookies & Cream', 'Rocky Road'], price: 100
  },
  {
    id: 206, name: 'Sundaes', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',
    flavours: ['Hot Fudge', 'Strawberry', 'Caramel Crunch', 'Brownie Bliss', 'Lotus Biscoff'], price: 200
  },
  {
    id: 207, name: 'Waffles', img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&q=80',
    flavours: ['Classic Cream', 'Nutella', 'Strawberry & Cream', 'Lotus Biscoff', 'Banana Caramel'], price: 280
  },
];

/* ════════════════════════════════
   STATE
════════════════════════════════ */
let cart = [];
let currentSlide = 0;
let orderType = 'delivery';
const TOTAL_SLIDES = 4;
let slideTimer = null;
const SLIDE_DURATION = 5500;

/* ════════════════════════════════
   PAGE LOADER
════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const progress = document.getElementById('loaderProgress');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 18;
    if (pct > 100) pct = 100;
    progress.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById('pageLoader').classList.add('hidden');
        startSlideAuto();
        observeAll();
        animateStats();
      }, 400);
    }
  }, 80);
  renderMenu(menuItems);
  renderCoffee();
  renderDrinks();
});

/* ════════════════════════════════
   CUSTOM CURSOR (desktop only)
════════════════════════════════ */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

(function animateCursor() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateCursor);
})();

function attachCursorHovers() {
  document.querySelectorAll('a,button,.cat-card,.food-card,.delivery-card,.coffee-card,.drink-card,.offer-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      follower.style.width = '50px';
      follower.style.height = '50px';
      follower.style.borderColor = 'rgba(245,158,11,.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '';
      cursor.style.height = '';
      follower.style.width = '';
      follower.style.height = '';
      follower.style.borderColor = '';
    });
  });
}
attachCursorHovers();

/* ════════════════════════════════
   SCROLL EVENTS
════════════════════════════════ */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('show', scrollY > 400);
});

/* ════════════════════════════════
   HERO SLIDER
════════════════════════════════ */
function goSlide(n) {
  currentSlide = (n + TOTAL_SLIDES) % TOTAL_SLIDES;
  document.getElementById('slides').style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  resetSlideProgress();
}

function changeSlide(dir) { goSlide(currentSlide + dir); }

function startSlideAuto() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(1), SLIDE_DURATION);
  resetSlideProgress();
}

function resetSlideProgress() {
  const fill = document.getElementById('slideProgressFill');
  if (!fill) return;
  fill.style.transition = 'none';
  fill.style.width = '0%';
  setTimeout(() => {
    fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
    fill.style.width = '100%';
  }, 30);
}

/* ════════════════════════════════
   DRAWER
════════════════════════════════ */
function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
  document.body.classList.toggle('no-scroll');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ════════════════════════════════
   CART PANEL
════════════════════════════════ */
function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
  document.getElementById('cartBackdrop').classList.toggle('show');
  document.body.classList.toggle('no-scroll');
}
function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('show');
  document.body.classList.remove('no-scroll');
}

/* ════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════ */
function smoothScroll(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

/* ════════════════════════════════
   SEARCH
════════════════════════════════ */
let searchTimeout;
function handleSearch(q) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const resultsEl = document.getElementById('searchResults');
    if (!q.trim()) { resultsEl.classList.remove('open'); return; }
    const all = [
      ...menuItems,
      ...coffeeItems.map(c => ({ ...c, tag: 'coffee' })),
      ...drinksItems.map(d => ({ ...d, tag: 'drinks', emoji: '🥤' }))
    ];
    const hits = all.filter(m =>
      m.name.toLowerCase().includes(q.toLowerCase()) ||
      (m.desc && m.desc.toLowerCase().includes(q.toLowerCase())) ||
      (m.tag && m.tag.toLowerCase().includes(q.toLowerCase()))
    ).slice(0, 8);
    if (!hits.length) {
      resultsEl.innerHTML = `<div class="search-no-result"><i class="fas fa-search" style="display:block;margin-bottom:8px;"></i>No results for "<b>${q}</b>"</div>`;
      resultsEl.classList.add('open'); return;
    }
    resultsEl.innerHTML = hits.map(item => `
      <div class="search-result-item" onmousedown="addFromSearch(${JSON.stringify(item).replace(/"/g, '&quot;')})">
        <img class="search-result-img" src="${item.img || ''}" alt="${item.name}" onerror="this.style.display='none'"/>
        <div class="search-result-info">
          <div class="search-result-name">${item.name}</div>
          <div class="search-result-tag">${item.tag ? item.tag.toUpperCase() : ''}</div>
        </div>
        <div class="search-result-price">Rs.${item.price}</div>
      </div>`).join('');
    resultsEl.classList.add('open');
  }, 200);
}

function hideSearchResults() {
  setTimeout(() => document.getElementById('searchResults').classList.remove('open'), 200);
}

function addFromSearch(item) {
  if (item.options || item.flavours) {
    openCustomModal(item);
  } else {
    addToCart({ ...item, customLabel: '' });
  }
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').classList.remove('open');
}

/* ════════════════════════════════
   CUSTOMISE MODAL
════════════════════════════════ */
let currentCustomItem = null;
let selectedOption = null;
let selectedFlavour = null;

function openCustomModal(item) {
  currentCustomItem = item;
  selectedOption = null;
  selectedFlavour = null;
  const modal = document.getElementById('customModal');
  const content = document.getElementById('customModalContent');
  const hasOptions = item.options;
  const hasFlavours = item.flavours && item.flavours.length;

  let html = `
    <div class="custom-food-header">
      <div class="custom-food-img">
        <img src="${item.img || ''}" alt="${item.name}" loading="lazy"/>
      </div>
      <div class="custom-food-info">
        <h3>${item.name}</h3>
        <div class="custom-food-price">From Rs.${item.price}</div>
      </div>
    </div>`;

  if (hasOptions) {
    html += `
    <div class="custom-section">
      <div class="custom-section-label">${item.options.label}</div>
      <div class="option-grid" id="optionGrid">
        ${item.options.choices.map((c, i) => `
          <button class="option-btn" data-idx="${i}" data-price="${item.options.prices[i]}" onclick="selectOptionBtn(this)">${c}</button>
        `).join('')}
      </div>
    </div>`;
  }

  if (hasFlavours) {
    html += `
    <div class="custom-section">
      <div class="custom-section-label">Choose Flavour</div>
      <div class="option-grid" id="flavourGrid">
        ${item.flavours.map(f => `
          <button class="option-btn" data-flavour="${f}" onclick="selectFlavourBtn(this)">${f}</button>
        `).join('')}
      </div>
    </div>`;
  }

  html += `
    <div class="custom-total">
      <span>Total</span>
      <span class="price" id="customPrice">Rs.${item.price}</span>
    </div>
    <div class="custom-actions">
      <button class="btn-ghost-sm" onclick="closeCustomModal()">Cancel</button>
      <button class="btn btn-fire" onclick="addCustomToCart()">
        <i class="fas fa-plus"></i> Add to Cart
      </button>
    </div>`;

  content.innerHTML = html;
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function selectOptionBtn(btn) {
  document.querySelectorAll('#optionGrid .option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedOption = { label: btn.textContent.trim(), price: parseInt(btn.dataset.price) };
  updateCustomPrice();
}

function selectFlavourBtn(btn) {
  document.querySelectorAll('#flavourGrid .option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedFlavour = btn.dataset.flavour;
}

function updateCustomPrice() {
  const priceEl = document.getElementById('customPrice');
  if (!priceEl) return;
  priceEl.textContent = 'Rs.' + (selectedOption ? selectedOption.price : currentCustomItem.price);
}

function addCustomToCart() {
  const item = currentCustomItem;
  const hasOptions = item.options;
  const hasFlavours = item.flavours && item.flavours.length;

  if (hasOptions && !selectedOption) {
    showToast('Please choose a ' + item.options.label.toLowerCase() + ' ⚠️', 'error'); return;
  }
  if (hasFlavours && !selectedFlavour) {
    showToast('Please choose a flavour ⚠️', 'error'); return;
  }

  const price = selectedOption ? selectedOption.price : item.price;
  let customLabel = '';
  if (selectedOption) customLabel += selectedOption.label;
  if (selectedFlavour) customLabel += (customLabel ? ' · ' : '') + selectedFlavour;

  addToCart({
    id: item.id + '_' + (selectedOption ? selectedOption.price : '') + '_' + (selectedFlavour || ''),
    name: item.name, img: item.img, emoji: item.emoji || '',
    price, customLabel, tag: item.tag
  });
  closeCustomModal();
}

function closeCustomModal() {
  document.getElementById('customModal').classList.remove('active');
  document.body.classList.remove('no-scroll');
  currentCustomItem = selectedOption = selectedFlavour = null;
}

/* ════════════════════════════════
   CART
════════════════════════════════ */
function addToCart(item) {
  const key = String(item.id);
  const existing = cart.find(c => String(c.id) === key);
  if (existing) { existing.qty++; }
  else { cart.push({ ...item, qty: 1 }); }
  updateCartUI();
  showToast(`${item.name} added to cart! ✅`);
  const cc = document.getElementById('cartCount');
  cc.classList.add('bump');
  setTimeout(() => cc.classList.remove('bump'), 300);
}

function removeFromCart(id) {
  const idx = cart.findIndex(c => String(c.id) === String(id));
  if (idx > -1) {
    if (cart[idx].qty > 1) cart[idx].qty--;
    else cart.splice(idx, 1);
  }
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  showToast('Cart cleared!', 'error');
}

function updateCartUI() {
  const list = document.getElementById('cartItems');
  const totalBox = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const totalCount = cart.reduce((a, c) => a + c.qty, 0);
  countEl.textContent = totalCount;

  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><small>Add delicious items to get started</small></div>`;
    totalBox.style.display = 'none';
    checkoutBtn.disabled = true;
    return;
  }

  list.innerHTML = cart.map(c => `
    <li class="cart-item">
      <div class="cart-item-img">
        ${c.img ? `<img src="${c.img}" alt="${c.name}" loading="lazy"/>` : `<div class="cart-item-emoji">${c.emoji || '🍽️'}</div>`}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        ${c.customLabel ? `<div class="cart-item-sub">${c.customLabel}</div>` : ''}
        <div class="cart-item-price">Rs.${c.price * c.qty}</div>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="removeFromCart('${c.id}')"><span>−</span></button>
        <span>${c.qty}</span>
        <button class="qty-btn" onclick="addToCart(${JSON.stringify(c).replace(/"/g, '&quot;')})"><span>+</span></button>
      </div>
    </li>`).join('');

  const sub = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const fee = (orderType === 'pickup' || orderType === 'dine') ? 0 : (sub >= 800 ? 0 : 100);
  document.getElementById('subtotal').textContent = `Rs.${sub}`;
  document.getElementById('deliveryFee').textContent = fee === 0 ? '🆓 Free' : `Rs.${fee}`;
  document.getElementById('grandTotal').textContent = `Rs.${sub + fee}`;
  totalBox.style.display = 'block';
  checkoutBtn.disabled = false;
}

/* ════════════════════════════════
   RENDER MENU — Image-only cards (no duplicate emoji overlay)
════════════════════════════════ */
function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  if (!items.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted)"><i class="fas fa-search" style="font-size:3rem;display:block;margin-bottom:16px"></i>No items in this category.</div>`;
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="food-card reveal" data-tag="${item.tag}">
      <div class="food-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
        <div class="food-img-overlay"></div>
        <div class="food-badges">
          ${item.badge === 'hot' ? '<span class="badge badge-hot">🔥 HOT</span>' : ''}
          ${item.badge === 'new' ? '<span class="badge badge-new">✨ NEW</span>' : ''}
        </div>
      </div>
      <div class="food-info">
        <div class="food-meta">
          <div class="food-tag">${item.tag.toUpperCase()}</div>
          <div class="food-rating">⭐ ${item.rating}</div>
        </div>
        <div class="food-name">${item.name}</div>
        <div class="food-desc">${item.desc}</div>
        <div class="food-footer">
          <div class="food-price">Rs.${item.price} <span>/ serving</span></div>
          <button class="add-btn" onclick='handleMenuAdd(${JSON.stringify(item).replace(/'/g, "&#39;").replace(/"/g, "&quot;")})'>
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`).join('');
  observeAll();
  attachCursorHovers();
}

function handleMenuAdd(item) {
  if (item.options || item.flavours) openCustomModal(item);
  else addToCart(item);
}

function filterMenu(tag, btn) {
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const filtered = tag === 'all' ? menuItems : menuItems.filter(m => m.tag === tag);
  renderMenu(filtered);
}

/* ════════════════════════════════
   RENDER COFFEE — Image-only (no duplicate emoji overlay on top of image)
════════════════════════════════ */
function renderCoffee() {
  document.getElementById('coffeeGrid').innerHTML = coffeeItems.map(c => `
    <div class="coffee-card reveal">
      <div class="coffee-img-wrap">
        <img src="${c.img}" alt="${c.name}" loading="lazy"/>
        <div class="coffee-img-overlay"></div>
      </div>
      <div class="coffee-info">
        ${c.badge === 'new' ? '<span class="badge badge-new" style="margin-bottom:8px;display:inline-block">✨ NEW</span>' : ''}
        <div class="coffee-name">${c.name}</div>
        <div class="coffee-desc">${c.desc}</div>
        <div class="coffee-sizes">
          ${c.sizes.map((s, i) => `<span class="size-tag${i === 0 ? ' active' : ''}">${s}</span>`).join('')}
        </div>
        <div class="coffee-footer">
          <div class="coffee-price">From Rs.${c.price}</div>
          <button class="add-btn" onclick='openCoffeeModal(${JSON.stringify(c).replace(/'/g, "&#39;").replace(/"/g, "&quot;")})'>
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`).join('');

  document.querySelectorAll('.coffee-sizes').forEach(wrap => {
    wrap.querySelectorAll('.size-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        wrap.querySelectorAll('.size-tag').forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
      });
    });
  });
  observeAll();
  attachCursorHovers();
}

function openCoffeeModal(c) {
  currentCustomItem = {
    ...c, id: c.id, img: c.img, emoji: c.emoji, tag: 'coffee',
    options: {
      label: 'Choose Size',
      choices: c.sizes.map((s, i) => `${s} — Rs.${c.price + i * 40}`),
      prices: c.sizes.map((_, i) => c.price + i * 40)
    }
  };
  selectedOption = null;
  selectedFlavour = null;
  const modal = document.getElementById('customModal');
  const content = document.getElementById('customModalContent');

  content.innerHTML = `
    <div class="custom-food-header">
      <div class="custom-food-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy"/>
      </div>
      <div class="custom-food-info">
        <h3>${c.name}</h3>
        <div class="custom-food-price">From Rs.${c.price}</div>
      </div>
    </div>
    <div class="custom-section">
      <div class="custom-section-label">Choose Size</div>
      <div class="option-grid" id="optionGrid">
        ${c.sizes.map((s, i) => `
          <button class="option-btn" data-idx="${i}" data-price="${c.price + i * 40}" onclick="selectOptionBtn(this)">
            ${s} — Rs.${c.price + i * 40}
          </button>`).join('')}
      </div>
    </div>
    <div class="custom-total">
      <span>Total</span>
      <span class="price" id="customPrice">Rs.${c.price}</span>
    </div>
    <div class="custom-actions">
      <button class="btn-ghost-sm" onclick="closeCustomModal()">Cancel</button>
      <button class="btn btn-fire" onclick="addCustomToCart()">
        <i class="fas fa-plus"></i> Add to Cart
      </button>
    </div>`;

  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

/* ════════════════════════════════
   RENDER DRINKS — Image-only
════════════════════════════════ */
function renderDrinks() {
  document.getElementById('drinksGrid').innerHTML = drinksItems.map(d => `
    <div class="drink-card reveal">
      <div class="drink-img-wrap">
        <img src="${d.img}" alt="${d.name}" loading="lazy"/>
        <div class="drink-img-overlay"></div>
      </div>
      <div class="drink-info">
        <div class="drink-name">${d.name}</div>
        <div class="drink-variants">
          ${d.flavours.map(f => `<span class="variant-tag">${f}</span>`).join('')}
        </div>
        <div class="drink-price">From Rs.${d.price}</div>
        <button class="add-btn" style="margin:0 auto" onclick='openDrinkModal(${JSON.stringify(d).replace(/'/g, "&#39;").replace(/"/g, "&quot;")})'>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>`).join('');
  observeAll();
  attachCursorHovers();
}

function openDrinkModal(d) {
  currentCustomItem = { id: d.id, name: d.name, img: d.img, emoji: '🥤', price: d.price, tag: 'drinks', flavours: d.flavours };
  selectedOption = null;
  selectedFlavour = null;
  const modal = document.getElementById('customModal');
  const content = document.getElementById('customModalContent');

  content.innerHTML = `
    <div class="custom-food-header">
      <div class="custom-food-img">
        <img src="${d.img}" alt="${d.name}" loading="lazy"/>
      </div>
      <div class="custom-food-info">
        <h3>${d.name}</h3>
        <div class="custom-food-price">From Rs.${d.price}</div>
      </div>
    </div>
    <div class="custom-section">
      <div class="custom-section-label">Choose Flavour</div>
      <div class="option-grid" id="flavourGrid">
        ${d.flavours.map(f => `
          <button class="option-btn" data-flavour="${f}" onclick="selectFlavourBtn(this)">${f}</button>
        `).join('')}
      </div>
    </div>
    <div class="custom-total">
      <span>Total</span>
      <span class="price" id="customPrice">Rs.${d.price}</span>
    </div>
    <div class="custom-actions">
      <button class="btn-ghost-sm" onclick="closeCustomModal()">Cancel</button>
      <button class="btn btn-fire" onclick="addDrinkToCart(${d.id},${d.price})">
        <i class="fas fa-plus"></i> Add to Cart
      </button>
    </div>`;

  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function addDrinkToCart(id, price) {
  if (!selectedFlavour) { showToast('Please choose a flavour ⚠️', 'error'); return; }
  const d = drinksItems.find(x => x.id === id);
  addToCart({ id: id + '_' + selectedFlavour, name: d.name + ' (' + selectedFlavour + ')', img: d.img, emoji: '🥤', price, customLabel: selectedFlavour, tag: 'drinks' });
  closeCustomModal();
}

/* ════════════════════════════════
   DELIVERY
════════════════════════════════ */
function setOrderType(el) { orderType = el.value; updateCartUI(); }
function selectDelivery(card, type) {
  document.querySelectorAll('.delivery-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  orderType = type;
  updateCartUI();
}

/* ════════════════════════════════
   ORDER MODAL
════════════════════════════════ */
function showOrder() {
  if (!cart.length) { showToast('Add items to cart first! 🛒', 'error'); return; }
  const sub = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const fee = (orderType === 'pickup' || orderType === 'dine') ? 0 : (sub >= 800 ? 0 : 100);

  document.getElementById('modalOrderSummary').innerHTML = `
    <div class="osb-title">📋 Order Summary</div>
    ${cart.map(c => `<div class="osb-item"><span>${c.name}${c.customLabel ? ' (' + c.customLabel + ')' : ''} ×${c.qty}</span><span>Rs.${c.price * c.qty}</span></div>`).join('')}
    <div class="osb-total"><span>Total</span><span>Rs.${sub + fee}</span></div>`;

  document.getElementById('orderModal').classList.add('active');
  document.getElementById('bankDetails').style.display = 'none';
  document.body.classList.add('no-scroll');
}

function closeOrder() {
  document.getElementById('orderModal').classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function handlePaymentChange(val) {
  document.getElementById('bankDetails').style.display = (val === 'bank' || val === 'card') ? 'block' : 'none';
}

function formatAccountNum(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  const parts = [];
  for (let i = 0; i < v.length; i += 4) parts.push(v.substring(i, i + 4));
  input.value = parts.join(' ');
}

async function confirmOrder() {
  const name = document.getElementById('oName').value.trim();
  const phone = document.getElementById('oPhone').value.trim();
  const email = document.getElementById('oEmail').value.trim();
  const address = document.getElementById('oAddress').value.trim();
  const type = document.getElementById('oType').value;
  const payment = document.getElementById('oPayment');
  const payVal = payment.value;
  const payText = payment.options[payment.selectedIndex].text;
  const notes = document.getElementById('oNotes').value.trim();
  const bankDiv = document.getElementById('bankDetails');
  const bankName = document.getElementById('oBankName')?.value || '';
  const accountNum = document.getElementById('oAccountNum')?.value || '';
  const accountHolder = document.getElementById('oAccountName')?.value || '';

  let valid = true;
  ['oName', 'oPhone', 'oEmail'].forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    else el.classList.remove('error');
  });
  if (!valid) { showToast('Please fill all required fields ⚠️', 'error'); return; }
  if (!/\S+@\S+\.\S+/.test(email)) { showToast('Please enter a valid email ⚠️', 'error'); document.getElementById('oEmail').classList.add('error'); return; }
  if ((payVal === 'bank' || payVal === 'card') && bankDiv.style.display !== 'none') {
    if (!bankName) { showToast('Please select your bank ⚠️', 'error'); return; }
    if (!accountNum) { showToast('Please enter account/card number ⚠️', 'error'); return; }
  }

  const orderId = 'SL-' + Date.now().toString().slice(-6);
  const sub = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const fee = (orderType === 'pickup' || orderType === 'dine') ? 0 : (sub >= 800 ? 0 : 100);
  const total = sub + fee;
  const itemsList = cart.map(c => `${c.name}${c.customLabel ? ' (' + c.customLabel + ')' : ''} ×${c.qty} — Rs.${c.price * c.qty}`).join('\n');

  const btn = document.getElementById('confirmBtn');
  btn.innerHTML = '<div class="spinner"></div> Placing Order…';
  btn.disabled = true;

  const bankInfo = (payVal === 'bank' || payVal === 'card') && bankDiv.style.display !== 'none'
    ? `\n🏦 *Bank:* ${bankName}\n💳 *Account:* ${accountNum}\n👤 *Holder:* ${accountHolder}` : '';

  const restaurantMsg = encodeURIComponent(
    `🌶️ *New Order — SpiceLane*\n\n` +
    `🆔 *Order ID:* ${orderId}\n` +
    `👤 *Customer:* ${name}\n` +
    `📱 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `📍 *Address:* ${address || 'N/A'}\n` +
    `🚚 *Type:* ${type}\n` +
    `💳 *Payment:* ${payText}${bankInfo}\n\n` +
    `*🛒 ORDER ITEMS:*\n${itemsList}\n\n` +
    `💰 *Subtotal:* Rs.${sub}\n` +
    `🚚 *Delivery:* ${fee === 0 ? 'FREE' : 'Rs.' + fee}\n` +
    `💵 *TOTAL:* Rs.${total}\n\n` +
    `${notes ? `📝 *Notes:* ${notes}` : ''}\n\n` +
    `⏰ Prep: 15–20 mins | Delivery: 30–45 mins`
  );
  window.open(`https://wa.me/923285580982?text=${restaurantMsg}`, '_blank');

  try {
    emailjs.init('YOUR_PUBLIC_KEY');
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_name: name, to_email: email, order_id: orderId,
      order_items: itemsList, order_type: type, payment_method: payText,
      delivery_address: address || 'N/A', phone_number: phone,
      subtotal: `Rs.${sub}`, delivery_fee: fee === 0 ? 'Free' : `Rs.${fee}`,
      total_amount: `Rs.${total}`, special_notes: notes || 'None',
      restaurant_phone: '+92 3285580982',
      estimated_time: type === 'delivery' ? '30–45 minutes' : '15–20 minutes'
    });
  } catch (e) { console.log('EmailJS not configured'); }

  btn.innerHTML = '<i class="fas fa-check-circle"></i> Confirm Order';
  btn.disabled = false;

  document.getElementById('orderModalContent').innerHTML = `
    <div class="success-screen">
      <div class="success-icon">🎉</div>
      <h2>Order Confirmed!</h2>
      <div class="order-id-box">Order ID: <b>${orderId}</b></div>
      <p>
        Thank you, <b>${name}</b>! Your order has been received.<br/><br/>
        ✅ Restaurant notified via WhatsApp<br/>
        📧 Confirmation email sent to <b>${email}</b><br/>
        📞 We'll call you shortly to confirm<br/><br/>
        <b>Order Type:</b> ${type === 'delivery' ? '🛵 Home Delivery' : type === 'pickup' ? '🏪 Takeaway' : type === 'dine' ? '🍽️ Dine In' : '💻 Pre-order'}<br/>
        <b>Payment:</b> ${payText}<br/>
        ${(payVal === 'bank' || payVal === 'card') && bankDiv.style.display !== 'none' ? `<b>Bank:</b> ${bankName}<br/>` : ''}
        <b>Total:</b> Rs.${total}<br/>
        <b>Est. Time:</b> ${type === 'delivery' ? '30–45 mins' : '15–20 mins'}
      </p>
      <div class="send-to-customer-box">
        <div class="stc-label">📱 Send Confirmation to Customer</div>
        <div class="stc-row">
          <input type="tel" id="customerPhoneConfirm" value="${phone}" placeholder="+92 3XX XXXXXXX"/>
          <button class="btn btn-fire" style="padding:10px 18px;font-size:.85rem;flex-shrink:0;" onclick="sendToCustomer('${orderId}','${name}','${phone}','${type}','${payText}','${total}','${encodeURIComponent(itemsList)}','${notes}','${sub}','${fee}')">
            <i class="fab fa-whatsapp"></i> Send
          </button>
        </div>
        <div class="stc-note">Opens WhatsApp to send confirmation to customer's number</div>
      </div>
      <button class="btn btn-fire full" onclick="finishOrder()">
        <i class="fas fa-check"></i> Done — Continue Shopping
      </button>
    </div>`;
}

function sendToCustomer(orderId, name, customerPhone, type, payment, total, itemsEncoded, notes, sub, fee) {
  const phone = document.getElementById('customerPhoneConfirm').value.replace(/[^0-9+]/g, '');
  if (!phone || phone.length < 10) { showToast('Please enter valid phone number ⚠️', 'error'); return; }
  const itemsList = decodeURIComponent(itemsEncoded);
  const msg = encodeURIComponent(
    `🌶️ *SpiceLane Order Confirmation*\n\n` +
    `🆔 *Order ID:* ${orderId}\n` +
    `👤 *Dear ${name}*\n\n` +
    `✅ *Your order has been received!*\n\n` +
    `🚚 *Type:* ${type === 'delivery' ? '🛵 Home Delivery' : type === 'pickup' ? '🏪 Takeaway' : type === 'dine' ? '🍽️ Dine In' : '💻 Pre-order'}\n` +
    `💳 *Payment:* ${payment}\n\n` +
    `*🛒 Your Order:*\n${itemsList}\n\n` +
    `💰 Subtotal: Rs.${sub}\n` +
    `🚚 Delivery: ${fee == 0 ? 'FREE' : 'Rs.' + fee}\n` +
    `💵 *TOTAL: Rs.${total}*\n\n` +
    `${notes ? `📝 Notes: ${notes}\n\n` : ''}` +
    `⏰ ${type === 'delivery' ? 'Delivery in 30–45 mins' : 'Ready in 15–20 mins'}\n\n` +
    `📞 +92 328 5580982 | 📍 Main Bazaar, Kharian\n` +
    `*Thank you for choosing SpiceLane! 🔥*`
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  showToast('✅ WhatsApp opened — send confirmation!');
}

function finishOrder() {
  clearCart();
  closeOrder();
}

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.querySelector('i').className = type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
  t.className = `toast${type === 'error' ? ' error' : ''} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('.reveal:not(.in-view)').forEach(el => revealObserver.observe(el));
}

/* ════════════════════════════════
   STAT COUNTER ANIMATION
════════════════════════════════ */
function animateStats() {
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      if (target === 49) {
        let start = 40;
        const step = () => { start++; el.textContent = (start / 10).toFixed(1); if (start < target) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      } else {
        let start = 0;
        const increment = Math.ceil(target / 60);
        const step = () => { start += increment; if (start >= target) { el.textContent = target.toLocaleString(); return; } el.textContent = start.toLocaleString(); requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(el => statObserver.observe(el));
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Close modals on backdrop click
  document.getElementById('customModal').addEventListener('click', e => {
    if (e.target === document.getElementById('customModal')) closeCustomModal();
  });
  document.getElementById('orderModal').addEventListener('click', e => {
    if (e.target === document.getElementById('orderModal')) closeOrder();
  });
  // Cart backdrop
  document.getElementById('cartBackdrop').addEventListener('click', () => closeCart());

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCustomModal(); closeOrder(); closeDrawer(); closeCart(); }
  });
});
