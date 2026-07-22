// ═══════════════════════════════════════════════════════════
//  AirStay — Full Application JavaScript
// ═══════════════════════════════════════════════════════════

// ── DATA STORE ────────────────────────────────────────────
const DB = {
  properties: [
    { id:1, title:'Modern 1BR Apartment', location:'Nairobi', city:'Nairobi', type:'apartment', price:4500, rating:4.8, reviews:124, guests:2, beds:1, baths:1, img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80', tags:['WiFi','AC','Kitchen'], amenities:['WiFi','Air Conditioning','Kitchen','Parking','TV','Workspace'], desc:'A beautifully designed modern apartment in the heart of Westlands. Walking distance to restaurants, malls and public transport. Perfect for business or leisure travellers seeking a comfortable urban retreat.' },
    { id:2, title:'Beachfront Villa', location:'Diani', city:'Diani', type:'villa', price:12000, rating:4.9, reviews:87, guests:8, beds:4, baths:3, img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80', tags:['Pool','Beach','WiFi'], amenities:['WiFi','Pool','Beach Access','Kitchen','Parking','AC','BBQ Grill'], desc:'Wake up to the sound of waves in this stunning beachfront villa. Features a private pool, direct beach access and breathtaking Indian Ocean views from every room.' },
    { id:3, title:'Lakeview Cottage', location:'Naivasha', city:'Naivasha', type:'cottage', price:7500, rating:4.7, reviews:63, guests:4, beds:2, baths:2, img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', tags:['Lake View','Garden','WiFi'], amenities:['WiFi','Lake View','Garden','Kitchen','Fireplace','Parking'], desc:'A charming cottage nestled on the shores of Lake Naivasha. Perfect for couples and families seeking tranquillity, wildlife and stunning scenery away from the city.' },
    { id:4, title:'Executive Penthouse', location:'Nairobi', city:'Nairobi', type:'apartment', price:18000, rating:4.9, reviews:41, guests:4, beds:3, baths:2, img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', tags:['Rooftop','Pool','Gym'], amenities:['WiFi','Pool','Gym','AC','Kitchen','Concierge','Parking'], desc:'Elevated living in Nairobi\'s most prestigious address. This penthouse offers sweeping city views, access to rooftop pool and a 24/7 concierge service.' },
    { id:5, title:'Safari Bush Lodge', location:'Nanyuki', city:'Nanyuki', type:'lodge', price:22000, rating:5.0, reviews:29, guests:2, beds:1, baths:1, img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', tags:['Safari','Mt Kenya View','Breakfast'], amenities:['WiFi','Breakfast','Safari Drives','Fireplace','Mt Kenya View'], desc:'An exclusive bush lodge at the foot of Mount Kenya. Experience wildlife, stunning mountain views and luxury amenities in perfect harmony with nature.' },
    { id:6, title:'Coastal Beach House', location:'Malindi', city:'Malindi', type:'beach', price:9500, rating:4.6, reviews:52, guests:6, beds:3, baths:2, img:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80', tags:['Beach','Pool','WiFi'], amenities:['WiFi','Pool','Beach Access','Kitchen','AC','Outdoor Shower'], desc:'A charming coastal home just steps from Malindi\'s white sand beaches. Ideal for families and groups seeking sun, sea and relaxation on Kenya\'s north coast.' },
    { id:7, title:'Garden Studio', location:'Nairobi', city:'Nairobi', type:'apartment', price:3200, rating:4.5, reviews:98, guests:2, beds:1, baths:1, img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', tags:['Garden','WiFi','Quiet'], amenities:['WiFi','Garden','Kitchen','Workspace','Laundry'], desc:'A peaceful studio apartment with a private garden in Karen. Ideal for solo travellers or couples looking for a calm, green retreat close to Nairobi\'s attractions.' },
    { id:8, title:'Mombasa Old Town Riad', location:'Mombasa', city:'Mombasa', type:'villa', price:8200, rating:4.8, reviews:34, guests:6, beds:3, baths:2, img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', tags:['Historic','Rooftop','WiFi'], amenities:['WiFi','Rooftop Terrace','Kitchen','AC','Cultural Tours'], desc:'A beautifully restored riad in Mombasa\'s historic Old Town. Featuring Swahili architecture, rooftop terrace and easy access to Fort Jesus and the Old Port.' },
    { id:9, title:'Rift Valley Farmhouse', location:'Naivasha', city:'Naivasha', type:'cottage', price:5800, rating:4.7, reviews:45, guests:8, beds:4, baths:2, img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80', tags:['Farm','Views','WiFi'], amenities:['WiFi','Farm Animals','Kitchen','Fireplace','Garden','Parking'], desc:'A spacious farmhouse in the Rift Valley with spectacular views and rolling farmland. Perfect for large groups, retreats and those seeking an authentic rural Kenyan experience.' },
  ],
  bookings: [
    { id:'BK001', propertyId:2, propertyTitle:'Beachfront Villa', location:'Diani', checkIn:'2025-04-28', checkOut:'2025-05-02', guests:4, nights:4, total:48000, status:'confirmed', img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80' },
    { id:'BK002', propertyId:1, propertyTitle:'Modern 1BR Apartment', location:'Nairobi', checkIn:'2025-03-10', checkOut:'2025-03-13', guests:2, nights:3, total:13500, status:'completed', img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
    { id:'BK003', propertyId:5, propertyTitle:'Safari Bush Lodge', location:'Nanyuki', checkIn:'2025-06-01', checkOut:'2025-06-04', guests:2, nights:3, total:66000, status:'pending', img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
  ],
  users: [
    { id:1, name:'Alice Wanjiku', email:'alice@email.com', role:'guest', joined:'Jan 2024', bookings:5, spent:'Ksh 142,000' },
    { id:2, name:'Brian Omondi', email:'brian@email.com', role:'host', joined:'Mar 2024', bookings:0, spent:'—' },
    { id:3, name:'Carol Njeri', email:'carol@email.com', role:'guest', joined:'Feb 2024', bookings:3, spent:'Ksh 87,500' },
    { id:4, name:'David Kamau', email:'david@email.com', role:'guest', joined:'Apr 2024', bookings:8, spent:'Ksh 312,000' },
  ],
  currentUser: null,
  favorites: new Set([2]),
};

// ── NAVIGATION ────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  // Render page content
  if (page === 'home')     renderHomeGrid();
  if (page === 'listings') renderListings();
  if (page === 'bookings') renderBookings('all');
  if (page === 'admin')    renderAdmin();
  if (page === 'host')     hostShowStep(hostCurrentStep);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// ── RENDER PROPERTY CARD ──────────────────────────────────
function renderCard(p, animate = false) {
  const isFav = DB.favorites.has(p.id);
  return `
    <div class="prop-card ${animate ? 'card-enter' : ''}" onclick="openProperty(${p.id})">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <span class="card-location-badge">${p.location}</span>
        <button class="card-fav ${isFav ? 'liked' : ''}" onclick="toggleFav(event,${p.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? '#E8472A' : 'none'}" stroke="${isFav ? '#E8472A' : '#666'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-meta">
          <span class="card-price">Ksh ${p.price.toLocaleString()} <span>/night</span></span>
          <span class="card-rating"><span class="star">★</span> ${p.rating} (${p.reviews})</span>
        </div>
        <div class="card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          <span class="tag">${p.beds} bed${p.beds > 1 ? 's' : ''}</span>
          <span class="tag">${p.guests} guests</span>
        </div>
      </div>
    </div>`;
}

// ── HOME PAGE ─────────────────────────────────────────────
function renderHomeGrid(category = 'all') {
  const grid = document.getElementById('homeGrid');
  if (!grid) return;
  let props = DB.properties;
  if (category !== 'all') props = props.filter(p => p.type === category || p.tags.some(t => t.toLowerCase().includes(category)));
  grid.innerHTML = props.slice(0, 6).map(p => renderCard(p, true)).join('');
}

function filterCategory(cat, btn) {
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHomeGrid(cat);
}

// ── SEARCH ────────────────────────────────────────────────
function handleSearch() {
  const loc   = document.getElementById('searchLocation').value.trim().toLowerCase();
  const ci    = document.getElementById('checkIn').value;
  const co    = document.getElementById('checkOut').value;
  const g     = document.getElementById('guestCount').value;
  if (ci && co && new Date(co) <= new Date(ci)) {
    showToast('Check-out must be after check-in', 'error'); return;
  }
  showPage('listings');
  setTimeout(() => {
    if (loc) {
      const sel = document.getElementById('filterLocation');
      const match = Array.from(sel.options).find(o => o.value.toLowerCase().includes(loc) || loc.includes(o.value.toLowerCase()));
      if (match) sel.value = match.value;
    }
    applyFilters();
  }, 100);
}

// ── LISTINGS PAGE ─────────────────────────────────────────
let filteredProps = [...DB.properties];

// ── HOST WIZARD STATE ──────────────────────────────────────
let hostCurrentStep = 1;
let hostPhotos = []; // array of data-URL strings from FileReader

function renderListings() {
  filteredProps = [...DB.properties];
  renderGrid();
}

function applyFilters() {
  const loc     = document.getElementById('filterLocation')?.value || '';
  const price   = parseInt(document.getElementById('priceRange')?.value || 50000);
  const rating  = parseFloat(document.getElementById('filterRating')?.value || 0);
  const guests  = parseInt(document.getElementById('filterGuests')?.value || 0);
  const sort    = document.getElementById('sortBy')?.value || 'featured';
  const types   = Array.from(document.querySelectorAll('#typeFilters input:checked')).map(i => i.value);

  filteredProps = DB.properties.filter(p => {
    if (loc && p.city !== loc) return false;
    if (p.price > price) return false;
    if (p.rating < rating) return false;
    if (guests && p.guests < guests) return false;
    if (types.length && !types.includes(p.type)) return false;
    return true;
  });

  if (sort === 'price-low')  filteredProps.sort((a,b) => a.price - b.price);
  if (sort === 'price-high') filteredProps.sort((a,b) => b.price - a.price);
  if (sort === 'rating')     filteredProps.sort((a,b) => b.rating - a.rating);

  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('listingsGrid');
  const count = document.getElementById('resultsCount');
  if (!grid) return;
  count.textContent = `Showing ${filteredProps.length} propert${filteredProps.length !== 1 ? 'ies' : 'y'}`;
  if (filteredProps.length === 0) {
    grid.innerHTML = '<div class="empty-state"><h3>No properties found</h3><p>Try adjusting your filters</p></div>';
    return;
  }
  grid.innerHTML = filteredProps.map((p,i) => `<div style="animation-delay:${i*50}ms">${renderCard(p, true)}</div>`).join('');
}

function updatePrice(val) {
  document.getElementById('priceDisplay').textContent = `Ksh ${parseInt(val).toLocaleString()}`;
}

function clearFilters() {
  document.getElementById('filterLocation').value = '';
  document.getElementById('priceRange').value = 50000;
  document.getElementById('priceDisplay').textContent = 'Ksh 50,000';
  document.getElementById('filterRating').value = '0';
  document.getElementById('filterGuests').value = '0';
  document.querySelectorAll('#typeFilters input').forEach(i => i.checked = false);
  document.getElementById('sortBy').value = 'featured';
  applyFilters();
}

// ── PROPERTY DETAIL ───────────────────────────────────────
function openProperty(id) {
  const p = DB.properties.find(x => x.id === id);
  if (!p) return;
  const reviews = [
    { author:'Sarah M.', rating:'★★★★★', text:'Absolutely stunning property! The views were incredible and the host was very responsive. Will definitely return.' },
    { author:'James K.', rating:'★★★★☆', text:'Great location, clean and well-equipped. Exactly as described. Highly recommended for anyone visiting.' },
    { author:'Amina O.', rating:'★★★★★', text:'Perfect stay! Everything was spotless. The amenities listed are all there. Booked again for next month!' },
  ];
  document.getElementById('detailContent').innerHTML = `
    <div class="detail-back container"><a href="#" onclick="history.back()">← Back to listings</a></div>
    <div class="detail-hero"><img src="${p.img}" alt="${p.title}"/></div>
    <div class="detail-content">
      <div class="detail-info">
        <h1>${p.title}</h1>
        <div class="detail-meta">
          <span>📍 ${p.location}</span>
          <span>★ ${p.rating} · ${p.reviews} reviews</span>
          <span>👥 Up to ${p.guests} guests</span>
          <span>🛏 ${p.beds} bedroom${p.beds > 1 ? 's' : ''}</span>
          <span>🚿 ${p.baths} bathroom${p.baths > 1 ? 's' : ''}</span>
        </div>
        <p class="detail-desc">${p.desc}</p>
        <div class="detail-amenities">
          <h3>Amenities</h3>
          <div class="amenities-list">
            ${p.amenities.map(a => `<div class="amenity-item"><span class="check">✓</span> ${a}</div>`).join('')}
          </div>
        </div>
        <div class="reviews-section">
          <h3>Guest Reviews</h3>
          ${reviews.map(r => `
            <div class="review-card">
              <div class="review-author">${r.author}</div>
              <div class="review-stars">${r.rating}</div>
              <div class="review-text">${r.text}</div>
            </div>`).join('')}
        </div>
      </div>
      <!-- BOOKING WIDGET -->
      <div class="booking-widget" id="bookWidget-${p.id}">
        <div class="widget-price">Ksh ${p.price.toLocaleString()} <span>/ night</span></div>
        <div class="widget-dates">
          <div class="widget-date">
            <label>Check-in</label>
            <input type="date" id="wCheckIn-${p.id}" onchange="calcWidget(${p.id})"/>
          </div>
          <div class="widget-date">
            <label>Check-out</label>
            <input type="date" id="wCheckOut-${p.id}" onchange="calcWidget(${p.id})"/>
          </div>
        </div>
        <div class="widget-guests">
          <label>Guests</label>
          <select id="wGuests-${p.id}">
            ${Array.from({length:p.guests},(_,i)=>`<option value="${i+1}">${i+1} guest${i>0?'s':''}</option>`).join('')}
          </select>
        </div>
        <div class="price-breakdown" id="wBreakdown-${p.id}" style="display:none">
          <div class="price-row"><span id="wNightsLabel-${p.id}">Nights</span><span id="wSubtotal-${p.id}">—</span></div>
          <div class="price-row"><span>Service fee</span><span id="wFee-${p.id}">—</span></div>
          <div class="price-row total"><span>Total</span><span id="wTotal-${p.id}">—</span></div>
        </div>
        <button class="btn-book" onclick="openBookingModal(${p.id})">Reserve Now</button>
        <p style="font-size:.75rem;color:var(--muted);text-align:center;margin-top:10px">You won't be charged yet</p>
      </div>
    </div>`;
  showPage('detail');
  // Set min dates
  const today = new Date().toISOString().split('T')[0];
  const ci = document.getElementById(`wCheckIn-${p.id}`);
  const co = document.getElementById(`wCheckOut-${p.id}`);
  if (ci) ci.min = today;
  if (co) co.min = today;
}

function calcWidget(id) {
  const p  = DB.properties.find(x => x.id === id);
  const ci = document.getElementById(`wCheckIn-${id}`)?.value;
  const co = document.getElementById(`wCheckOut-${id}`)?.value;
  if (!ci || !co) return;
  const nights = Math.round((new Date(co) - new Date(ci)) / 86400000);
  if (nights <= 0) { showToast('Check-out must be after check-in','error'); return; }
  const subtotal = p.price * nights;
  const fee      = Math.round(subtotal * 0.08);
  const total    = subtotal + fee;
  document.getElementById(`wNightsLabel-${id}`).textContent = `Ksh ${p.price.toLocaleString()} × ${nights} night${nights>1?'s':''}`;
  document.getElementById(`wSubtotal-${id}`).textContent    = `Ksh ${subtotal.toLocaleString()}`;
  document.getElementById(`wFee-${id}`).textContent         = `Ksh ${fee.toLocaleString()}`;
  document.getElementById(`wTotal-${id}`).textContent       = `Ksh ${total.toLocaleString()}`;
  document.getElementById(`wBreakdown-${id}`).style.display = 'block';
}

// ── BOOKING MODAL ─────────────────────────────────────────
function openBookingModal(propId) {
  const p  = DB.properties.find(x => x.id === propId);
  const ci = document.getElementById(`wCheckIn-${propId}`)?.value;
  const co = document.getElementById(`wCheckOut-${propId}`)?.value;
  const g  = document.getElementById(`wGuests-${propId}`)?.value || 1;
  if (!ci || !co) { showToast('Please select check-in and check-out dates','error'); return; }
  const nights   = Math.round((new Date(co) - new Date(ci)) / 86400000);
  if (nights <= 0) { showToast('Invalid dates selected','error'); return; }
  const subtotal = p.price * nights;
  const fee      = Math.round(subtotal * 0.08);
  const total    = subtotal + fee;

  document.getElementById('modalTitle').textContent = 'Complete Your Booking';
  document.getElementById('modalContent').innerHTML = `
    <div class="booking-summary">
      <h3>${p.title}</h3>
      <div class="sum-row"><span>📍 ${p.location}</span><span>★ ${p.rating}</span></div>
      <div class="sum-row"><span>Check-in</span><span>${formatDate(ci)}</span></div>
      <div class="sum-row"><span>Check-out</span><span>${formatDate(co)}</span></div>
      <div class="sum-row"><span>Guests</span><span>${g}</span></div>
      <div class="sum-row"><span>Ksh ${p.price.toLocaleString()} × ${nights} night${nights>1?'s':''}</span><span>Ksh ${subtotal.toLocaleString()}</span></div>
      <div class="sum-row"><span>Service fee</span><span>Ksh ${fee.toLocaleString()}</span></div>
      <div class="sum-row total"><span>Total</span><span>Ksh ${total.toLocaleString()}</span></div>
    </div>
    <div class="form-group"><label>Select payment method</label></div>
    <div class="payment-methods">
      <div class="pay-method selected" onclick="selectPayment(this,'mpesa')">M-Pesa</div>
      <div class="pay-method" onclick="selectPayment(this,'card')">Card</div>
      <div class="pay-method" onclick="selectPayment(this,'bank')">Bank</div>
    </div>
    <div id="payFields">
      <div class="mpesa-input show" id="mpesaField">
        <div class="form-group">
          <label>M-Pesa Phone Number</label>
          <input type="tel" id="mpesaPhone" class="form-input" placeholder="+254 7XX XXX XXX"/>
        </div>
      </div>
      <div class="mpesa-input" id="cardField">
        <div class="form-group"><label>Card Number</label><input type="text" class="form-input" placeholder="1234 5678 9012 3456"/></div>
        <div class="form-row">
          <div class="form-group"><label>Expiry</label><input type="text" class="form-input" placeholder="MM/YY"/></div>
          <div class="form-group"><label>CVV</label><input type="text" class="form-input" placeholder="123"/></div>
        </div>
      </div>
      <div class="mpesa-input" id="bankField">
        <div class="form-group"><label>Account Name</label><input type="text" class="form-input" placeholder="Your name"/></div>
      </div>
    </div>
    <div class="form-group">
      <label>Special Requests (optional)</label>
      <textarea class="form-input" rows="2" placeholder="Early check-in, dietary needs..."></textarea>
    </div>
    <button class="btn-full" onclick="confirmBooking(${propId},'${ci}','${co}',${nights},${total},${g})">Confirm & Pay Ksh ${total.toLocaleString()}</button>
  `;
  document.getElementById('bookingModal').style.display = 'flex';
}

function selectPayment(btn, type) {
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('mpesaField').classList.toggle('show', type === 'mpesa');
  document.getElementById('cardField').classList.toggle('show', type === 'card');
  document.getElementById('bankField').classList.toggle('show', type === 'bank');
}

function confirmBooking(propId, ci, co, nights, total, guests) {
  const p = DB.properties.find(x => x.id === propId);
  const newBooking = {
    id: 'BK' + String(DB.bookings.length + 1).padStart(3,'0'),
    propertyId: propId,
    propertyTitle: p.title,
    location: p.location,
    checkIn: ci,
    checkOut: co,
    guests: parseInt(guests),
    nights,
    total,
    status: 'confirmed',
    img: p.img
  };
  DB.bookings.unshift(newBooking);
  closeModal();
  showToast(`Booking confirmed! 🎉 Booking ID: ${newBooking.id}`, 'success');
  // Update admin badge
  const badge = document.getElementById('adminBadge');
  if (badge) badge.textContent = DB.bookings.filter(b => b.status === 'confirmed').length;
}

function closeModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

// Close modal on overlay click
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── BOOKINGS PAGE ─────────────────────────────────────────
function renderBookings(filter) {
  const list = document.getElementById('bookingsList');
  if (!list) return;
  const bk = filter === 'all' ? DB.bookings : DB.bookings.filter(b => b.status === filter);
  if (bk.length === 0) {
    list.innerHTML = `<div class="empty-state"><h3>No ${filter === 'all' ? '' : filter + ' '}bookings found</h3><p>Your reservations will appear here after booking a property.</p><button class="btn-primary" onclick="showPage('listings')" style="margin-top:16px">Browse Properties</button></div>`;
    return;
  }
  list.innerHTML = bk.map(b => `
    <div class="booking-card fade-in">
      <img src="${b.img}" alt="${b.propertyTitle}" class="booking-img"/>
      <div class="booking-info">
        <h3>${b.propertyTitle}</h3>
        <div class="booking-dates">📍 ${b.location} &nbsp;|&nbsp; ${formatDate(b.checkIn)} → ${formatDate(b.checkOut)} &nbsp;|&nbsp; ${b.nights} night${b.nights>1?'s':''} &nbsp;|&nbsp; ${b.guests} guest${b.guests>1?'s':''}</div>
        <div class="booking-amount">Ksh ${b.total.toLocaleString()}</div>
        <div style="margin-top:8px"><span class="status-badge status-${b.status}">${b.status}</span><span style="font-size:.75rem;color:var(--muted);margin-left:8px">Booking ID: ${b.id}</span></div>
      </div>
      <div class="booking-actions">
        <button class="btn-sm btn-sm-outline" onclick="openProperty(${b.propertyId})">View Property</button>
        ${b.status === 'confirmed' ? `<button class="btn-sm btn-sm-red" onclick="cancelBooking('${b.id}')">Cancel</button>` : ''}
        ${b.status === 'completed' ? `<button class="btn-sm btn-sm-outline" onclick="openProperty(${b.propertyId})">Book Again</button>` : ''}
      </div>
    </div>`).join('');
}

function filterBookings(status, btn) {
  document.querySelectorAll('.b-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBookings(status);
}

function cancelBooking(id) {
  const b = DB.bookings.find(x => x.id === id);
  if (b) { b.status = 'cancelled'; renderBookings('all'); showToast('Booking cancelled successfully'); }
}

// ── AUTH ──────────────────────────────────────────────────
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) { showToast('Please fill in all fields','error'); return; }
  if (!email.includes('@')) { showToast('Please enter a valid email','error'); return; }
  DB.currentUser = { name: email.split('@')[0], email };
  document.getElementById('loginBtn').textContent = DB.currentUser.name;
  showToast(`Welcome back, ${DB.currentUser.name}! 👋`, 'success');
  showPage('home');
}

function handleRegister() {
  const first = document.getElementById('regFirst').value;
  const last  = document.getElementById('regLast').value;
  const email = document.getElementById('regEmail').value;
  const pass  = document.getElementById('regPassword').value;
  if (!first || !last || !email || !pass) { showToast('Please fill in all fields','error'); return; }
  if (pass.length < 8) { showToast('Password must be at least 8 characters','error'); return; }
  DB.currentUser = { name: first + ' ' + last, email };
  DB.users.push({ id: DB.users.length+1, name: DB.currentUser.name, email, role:'guest', joined: new Date().toLocaleDateString('en-GB',{month:'short',year:'numeric'}), bookings:0, spent:'Ksh 0' });
  document.getElementById('loginBtn').textContent = first;
  showToast(`Account created! Welcome, ${first}! 🎉`, 'success');
  showPage('home');
}

// ── HOST LISTING WIZARD ────────────────────────────────────

// Move to a given step: show/hide step panels, update the indicator dots
function hostShowStep(n) {
  document.querySelectorAll('.host-step').forEach(s => s.classList.remove('active'));
  const panel = document.getElementById('host-step-' + n);
  if (panel) panel.classList.add('active');
  document.querySelectorAll('.wizard-step-dot').forEach(d => {
    const s = parseInt(d.dataset.step);
    d.classList.toggle('active', s === n);
    d.classList.toggle('done', s < n);
  });
  hostCurrentStep = n;
  const card = document.querySelector('.host-form-card');
  if (card) window.scrollTo({ top: card.offsetTop - 90, behavior: 'smooth' });
}

// Validate only the fields relevant to the step being left
function hostValidateStep(step) {
  if (step === 1) {
    if (!document.getElementById('hName').value.trim())     { showToast('Please enter a property name','error'); return false; }
    if (!document.getElementById('hLocation').value.trim()) { showToast('Please enter a location','error'); return false; }
    return true;
  }
  if (step === 2) {
    const price = document.getElementById('hPrice').value;
    if (!price || parseInt(price) <= 0) { showToast('Please enter a valid price per night','error'); return false; }
    return true;
  }
  if (step === 3) {
    if (hostPhotos.length === 0) showToast('Tip: listings with photos get far more bookings', '');
    return true; // photos are encouraged, not required, to keep the demo frictionless
  }
  if (step === 4) {
    if (!document.getElementById('hHostName').value.trim()) { showToast('Please enter your name','error'); return false; }
    if (!document.getElementById('hPhone').value.trim())    { showToast('Please enter your phone number','error'); return false; }
    const email = document.getElementById('hEmail').value.trim();
    if (!email || !email.includes('@')) { showToast('Please enter a valid email','error'); return false; }
    return true;
  }
  return true;
}

function hostNextStep() {
  if (!hostValidateStep(hostCurrentStep)) return;
  const next = hostCurrentStep + 1;
  if (next === 5) renderHostReview();
  hostShowStep(next);
}

function hostBackStep() {
  hostShowStep(hostCurrentStep - 1);
}

// ── PHOTO UPLOAD (client-side preview via FileReader) ─────
function handlePhotoSelect(event) {
  handlePhotoFiles(Array.from(event.target.files || []));
  event.target.value = ''; // reset so selecting the same file again still fires onchange
}

function handlePhotoFiles(files) {
  const remaining = 8 - hostPhotos.length;
  if (remaining <= 0) { showToast('Maximum 8 photos allowed','error'); return; }
  files.slice(0, remaining).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      hostPhotos.push(e.target.result);
      renderPhotoPreviews();
    };
    reader.readAsDataURL(file);
  });
}

function handleDragOver(e)  { e.preventDefault(); document.getElementById('uploadZone').classList.add('dragover'); }
function handleDragLeave(e) { document.getElementById('uploadZone').classList.remove('dragover'); }
function handleDrop(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.remove('dragover');
  handlePhotoFiles(Array.from(e.dataTransfer.files || []));
}

function removePhoto(idx) {
  hostPhotos.splice(idx, 1);
  renderPhotoPreviews();
}

function renderPhotoPreviews() {
  const grid = document.getElementById('photoPreviewGrid');
  if (!grid) return;
  grid.innerHTML = hostPhotos.map((src, i) => `
    <div class="photo-preview-item">
      <img src="${src}" alt="Property photo ${i + 1}"/>
      ${i === 0 ? '<span class="cover-badge">Cover</span>' : ''}
      <button class="photo-remove" type="button" onclick="removePhoto(${i})">✕</button>
    </div>`).join('');
}

// ── REVIEW STEP ─────────────────────────────────────────────
function renderHostReview() {
  const name   = document.getElementById('hName').value.trim();
  const type   = document.getElementById('hType').value;
  const loc    = document.getElementById('hLocation').value.trim();
  const desc   = document.getElementById('hDesc').value.trim();
  const beds   = document.getElementById('hBeds').value;
  const baths  = document.getElementById('hBaths').value;
  const guests = document.getElementById('hGuests').value;
  const price  = document.getElementById('hPrice').value;
  const amenities = getAmenities();
  const hostName  = document.getElementById('hHostName').value.trim();
  const phone     = document.getElementById('hPhone').value.trim();
  const email     = document.getElementById('hEmail').value.trim();

  document.getElementById('hostReviewSummary').innerHTML = `
    <div class="review-block">
      <div class="review-block-title">Property</div>
      <div class="review-row"><span>Name</span><span>${name}</span></div>
      <div class="review-row"><span>Type</span><span>${type}</span></div>
      <div class="review-row"><span>Location</span><span>${loc}</span></div>
      ${desc ? `<div class="review-row"><span>Description</span><span>${desc}</span></div>` : ''}
    </div>
    <div class="review-block">
      <div class="review-block-title">Details &amp; Pricing</div>
      <div class="review-row"><span>Bedrooms</span><span>${beds}</span></div>
      <div class="review-row"><span>Bathrooms</span><span>${baths}</span></div>
      <div class="review-row"><span>Max Guests</span><span>${guests}</span></div>
      <div class="review-row"><span>Price per night</span><span>Ksh ${parseInt(price || 0).toLocaleString()}</span></div>
    </div>
    <div class="review-block">
      <div class="review-block-title">Photos (${hostPhotos.length})</div>
      ${hostPhotos.length
        ? `<div class="review-photos-strip">${hostPhotos.map(src => `<img src="${src}" alt=""/>`).join('')}</div>`
        : `<div class="review-row"><span>No photos uploaded — a placeholder image will be used</span><span></span></div>`}
    </div>
    <div class="review-block">
      <div class="review-block-title">Amenities</div>
      <div class="review-tags">${amenities.length ? amenities.map(a => `<span class="tag">${a}</span>`).join('') : '<span class="tag">None selected</span>'}</div>
    </div>
    <div class="review-block">
      <div class="review-block-title">Host Contact</div>
      <div class="review-row"><span>Name</span><span>${hostName}</span></div>
      <div class="review-row"><span>Phone</span><span>${phone}</span></div>
      <div class="review-row"><span>Email</span><span>${email}</span></div>
    </div>`;
}

// ── SUBMIT ───────────────────────────────────────────────────
function submitListing() {
  // Re-validate every required step in case someone reached step 5 via the
  // back button after clearing a field
  if (!hostValidateStep(1)) { hostShowStep(1); return; }
  if (!hostValidateStep(2)) { hostShowStep(2); return; }
  if (!hostValidateStep(4)) { hostShowStep(4); return; }

  const fallbackImgs = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
  ];
  const newProp = {
    id: DB.properties.length + 1,
    title: document.getElementById('hName').value.trim(),
    location: document.getElementById('hLocation').value.split(',')[0].trim(),
    city: document.getElementById('hLocation').value.split(',')[0].trim(),
    type: document.getElementById('hType').value.toLowerCase(),
    price: parseInt(document.getElementById('hPrice').value),
    rating: 5.0, reviews: 0,
    guests: parseInt(document.getElementById('hGuests').value),
    beds: parseInt(document.getElementById('hBeds').value),
    baths: parseInt(document.getElementById('hBaths').value),
    img: hostPhotos[0] || fallbackImgs[Math.floor(Math.random() * fallbackImgs.length)],
    tags: getAmenityTags(),
    amenities: getAmenities(),
    desc: document.getElementById('hDesc').value.trim() || 'A wonderful property available for booking.'
  };
  DB.properties.push(newProp);
  showToast('Property submitted for review! We\'ll notify you within 24hrs 🏠', 'success');
  resetHostForm();
  showPage('home');
}

function resetHostForm() {
  ['hName','hLocation','hDesc','hPrice','hHostName','hPhone','hEmail'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const type = document.getElementById('hType'); if (type) type.selectedIndex = 0;
  const beds = document.getElementById('hBeds'); if (beds) beds.value = 1;
  const baths = document.getElementById('hBaths'); if (baths) baths.value = 1;
  const guests = document.getElementById('hGuests'); if (guests) guests.value = 2;
  ['aWifi','aPool','aParking','aAC','aKitchen','aGym','aPets','aBreakfast'].forEach(id => {
    const el = document.getElementById(id); if (el) el.checked = false;
  });
  hostPhotos = [];
  renderPhotoPreviews();
  hostShowStep(1);
}

function getAmenities() {
  const items = ['aWifi:WiFi','aPool:Pool','aParking:Parking','aAC:Air Conditioning','aKitchen:Kitchen','aGym:Gym','aPets:Pet Friendly','aBreakfast:Breakfast'];
  return items.filter(i => document.getElementById(i.split(':')[0]).checked).map(i => i.split(':')[1]);
}

function getAmenityTags() {
  const all = getAmenities();
  return all.length ? all.slice(0, 3) : ['WiFi'];
}

// ── FAVORITES ─────────────────────────────────────────────
function toggleFav(e, id) {
  e.stopPropagation();
  if (DB.favorites.has(id)) DB.favorites.delete(id);
  else DB.favorites.add(id);
  const btn = e.currentTarget;
  btn.classList.toggle('liked', DB.favorites.has(id));
  btn.querySelector('svg').setAttribute('fill', DB.favorites.has(id) ? '#E8472A' : 'none');
  btn.querySelector('svg').setAttribute('stroke', DB.favorites.has(id) ? '#E8472A' : '#666');
  showToast(DB.favorites.has(id) ? 'Added to favourites ❤️' : 'Removed from favourites');
}

// ── ADMIN DASHBOARD ───────────────────────────────────────
function renderAdmin() {
  renderAdminOverview();
  renderAdminProperties();
  renderAdminBookings();
  renderAdminPayments();
  renderAdminUsers();
}

function showAdminTab(tab, link) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-link').forEach(l => l.classList.remove('active'));
  document.getElementById('admin-' + tab).classList.add('active');
  if (link) link.classList.add('active');
}

function renderAdminOverview() {
  const totalRevenue = DB.bookings.filter(b => b.status !== 'cancelled').reduce((s,b) => s+b.total, 0);
  const confirmed    = DB.bookings.filter(b => b.status === 'confirmed').length;
  document.getElementById('admin-overview').innerHTML = `
    <div class="admin-head">
      <div><h1>Dashboard Overview</h1><p class="admin-subtitle">Welcome back — here's what's happening</p></div>
    </div>
    <div class="admin-stats">
      <div class="a-stat"><div class="a-stat-label">Total Revenue</div><div class="a-stat-num">Ksh ${totalRevenue.toLocaleString()}</div><div class="a-stat-change">↑ 12% this month</div></div>
      <div class="a-stat"><div class="a-stat-label">Total Bookings</div><div class="a-stat-num">${DB.bookings.length}</div><div class="a-stat-change">↑ 8% this month</div></div>
      <div class="a-stat"><div class="a-stat-label">Active Properties</div><div class="a-stat-num">${DB.properties.length}</div><div class="a-stat-change">+${DB.properties.length - 9} new</div></div>
      <div class="a-stat"><div class="a-stat-label">Registered Users</div><div class="a-stat-num">${DB.users.length}</div><div class="a-stat-change">↑ 24% this month</div></div>
    </div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><h3>Recent Bookings</h3></div>
      <table>
        <thead><tr><th>ID</th><th>Property</th><th>Check-in</th><th>Check-out</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${DB.bookings.slice(0,5).map(b => `<tr>
            <td>${b.id}</td><td>${b.propertyTitle}</td>
            <td>${formatDate(b.checkIn)}</td><td>${formatDate(b.checkOut)}</td>
            <td>Ksh ${b.total.toLocaleString()}</td>
            <td><span class="status-badge status-${b.status}">${b.status}</span></td>
            <td>${b.status==='pending'?`<button class="admin-btn admin-btn-green" onclick="adminApprove('${b.id}')">Approve</button>`:'<button class="admin-btn admin-btn-gray">View</button>'}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminProperties() {
  document.getElementById('admin-properties').innerHTML = `
    <div class="admin-head"><div><h1>Properties</h1><p class="admin-subtitle">${DB.properties.length} total listings</p></div></div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><h3>All Properties</h3></div>
      <table>
        <thead><tr><th>Title</th><th>Location</th><th>Type</th><th>Price/night</th><th>Rating</th><th>Guests</th><th>Action</th></tr></thead>
        <tbody>
          ${DB.properties.map(p => `<tr>
            <td>${p.title}</td><td>${p.location}</td><td style="text-transform:capitalize">${p.type}</td>
            <td>Ksh ${p.price.toLocaleString()}</td><td>★ ${p.rating}</td><td>${p.guests}</td>
            <td><button class="admin-btn admin-btn-gray" onclick="openProperty(${p.id});showPage('detail')">View</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminBookings() {
  document.getElementById('admin-adminBookings').innerHTML = `
    <div class="admin-head"><div><h1>Bookings</h1><p class="admin-subtitle">Manage all reservations</p></div></div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><h3>All Bookings</h3></div>
      <table>
        <thead><tr><th>ID</th><th>Property</th><th>Location</th><th>Dates</th><th>Guests</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
        <tbody id="adminBookingRows">
          ${DB.bookings.map(b => `<tr id="abr-${b.id}">
            <td>${b.id}</td><td>${b.propertyTitle}</td><td>${b.location}</td>
            <td>${formatDate(b.checkIn)} – ${formatDate(b.checkOut)}</td>
            <td>${b.guests}</td><td>Ksh ${b.total.toLocaleString()}</td>
            <td><span class="status-badge status-${b.status}">${b.status}</span></td>
            <td style="display:flex;gap:6px">
              ${b.status==='pending'?`<button class="admin-btn admin-btn-green" onclick="adminApprove('${b.id}')">Approve</button>`:''}
              ${b.status==='confirmed'?`<button class="admin-btn admin-btn-red" onclick="adminCancel('${b.id}')">Cancel</button>`:''}
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminPayments() {
  const confirmed = DB.bookings.filter(b => b.status !== 'cancelled');
  const total = confirmed.reduce((s,b)=>s+b.total,0);
  document.getElementById('admin-payments').innerHTML = `
    <div class="admin-head"><div><h1>Payments</h1><p class="admin-subtitle">Revenue and transaction overview</p></div></div>
    <div class="admin-stats">
      <div class="a-stat"><div class="a-stat-label">Total Revenue</div><div class="a-stat-num">Ksh ${total.toLocaleString()}</div></div>
      <div class="a-stat"><div class="a-stat-label">Confirmed Txns</div><div class="a-stat-num">${confirmed.length}</div></div>
      <div class="a-stat"><div class="a-stat-label">Avg. Booking Value</div><div class="a-stat-num">Ksh ${confirmed.length ? Math.round(total/confirmed.length).toLocaleString() : 0}</div></div>
      <div class="a-stat"><div class="a-stat-label">Pending Payouts</div><div class="a-stat-num">Ksh ${DB.bookings.filter(b=>b.status==='confirmed').reduce((s,b)=>s+b.total,0).toLocaleString()}</div></div>
    </div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><h3>Transaction History</h3></div>
      <table>
        <thead><tr><th>Booking ID</th><th>Property</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          ${confirmed.map(b=>`<tr>
            <td>${b.id}</td><td>${b.propertyTitle}</td><td>Ksh ${b.total.toLocaleString()}</td>
            <td>M-Pesa</td><td>${formatDate(b.checkIn)}</td>
            <td><span class="status-badge status-${b.status}">${b.status}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminUsers() {
  document.getElementById('admin-users').innerHTML = `
    <div class="admin-head"><div><h1>Users</h1><p class="admin-subtitle">${DB.users.length} registered users</p></div></div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><h3>All Users</h3></div>
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Bookings</th><th>Total Spent</th><th>Action</th></tr></thead>
        <tbody>
          ${DB.users.map(u=>`<tr>
            <td>${u.name}</td><td>${u.email}</td>
            <td><span class="status-badge ${u.role==='host'?'status-completed':'status-confirmed'}">${u.role}</span></td>
            <td>${u.joined}</td><td>${u.bookings}</td><td>${u.spent}</td>
            <td><button class="admin-btn admin-btn-gray">View</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function adminApprove(id) {
  const b = DB.bookings.find(x => x.id === id);
  if (b) { b.status = 'confirmed'; renderAdmin(); showToast(`Booking ${id} approved ✓`, 'success'); }
}

function adminCancel(id) {
  const b = DB.bookings.find(x => x.id === id);
  if (b) { b.status = 'cancelled'; renderAdmin(); showToast(`Booking ${id} cancelled`); }
}

// ── UTILS ─────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return '—';
  return new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ── KEYBOARD SHORTCUTS ────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── ADMIN SHORTCUT (hidden feature) ──────────────────────
// Type "admin" anywhere to open admin dashboard
let adminKey = '';
document.addEventListener('keypress', e => {
  adminKey += e.key;
  if (adminKey.includes('admin')) { showPage('admin'); adminKey = ''; }
  if (adminKey.length > 10) adminKey = adminKey.slice(-10);
});

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomeGrid();
  // Set min dates on search bar
  const today = new Date().toISOString().split('T')[0];
  const ci = document.getElementById('checkIn');
  const co = document.getElementById('checkOut');
  if (ci) ci.min = today;
  if (co) co.min = today;
});
