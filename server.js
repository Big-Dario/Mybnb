/**
 * AirStay — Express Backend Server
 * Run: npm install express cors dotenv && node server.js
 */

const express = require('express');
const cors    = require('cors');
const path    = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── IN-MEMORY DATA (replace with MySQL/MongoDB in production) ──
let properties = [
  { id:1, title:'Modern 1BR Apartment', location:'Nairobi', type:'apartment', price:4500, rating:4.8, reviews:124, guests:2, beds:1, baths:1, img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80', tags:['WiFi','AC','Kitchen'], amenities:['WiFi','Air Conditioning','Kitchen','Parking'], desc:'A beautifully designed modern apartment in the heart of Westlands.' },
  { id:2, title:'Beachfront Villa', location:'Diani', type:'villa', price:12000, rating:4.9, reviews:87, guests:8, beds:4, baths:3, img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80', tags:['Pool','Beach','WiFi'], amenities:['WiFi','Pool','Beach Access','Kitchen'], desc:'Stunning beachfront villa with private pool and ocean views.' },
  { id:3, title:'Lakeview Cottage', location:'Naivasha', type:'cottage', price:7500, rating:4.7, reviews:63, guests:4, beds:2, baths:2, img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', tags:['Lake View','Garden','WiFi'], amenities:['WiFi','Lake View','Garden','Kitchen'], desc:'A charming cottage on the shores of Lake Naivasha.' },
];

let bookings = [
  { id:'BK001', propertyId:2, guestName:'Alice Wanjiku', checkIn:'2025-04-28', checkOut:'2025-05-02', guests:4, nights:4, total:48000, status:'confirmed', createdAt: new Date().toISOString() },
  { id:'BK002', propertyId:1, guestName:'Brian Omondi', checkIn:'2025-03-10', checkOut:'2025-03-13', guests:2, nights:3, total:13500, status:'completed', createdAt: new Date().toISOString() },
];

let users = [
  { id:1, name:'Admin User', email:'admin@airstay.co.ke', role:'admin', createdAt: new Date().toISOString() },
];

let nextBookingId = 3;
let nextUserId    = 2;
let nextPropId    = 4;

// ── PROPERTIES ─────────────────────────────────────────────
// GET all properties
app.get('/api/properties', (req, res) => {
  let result = [...properties];
  const { location, type, minPrice, maxPrice, minRating, guests, sort } = req.query;
  if (location) result = result.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
  if (type)     result = result.filter(p => p.type === type);
  if (maxPrice) result = result.filter(p => p.price <= parseInt(maxPrice));
  if (minRating)result = result.filter(p => p.rating >= parseFloat(minRating));
  if (guests)   result = result.filter(p => p.guests >= parseInt(guests));
  if (sort === 'price-low')  result.sort((a,b) => a.price - b.price);
  if (sort === 'price-high') result.sort((a,b) => b.price - a.price);
  if (sort === 'rating')     result.sort((a,b) => b.rating - a.rating);
  res.json({ success:true, count:result.length, data:result });
});

// GET single property
app.get('/api/properties/:id', (req, res) => {
  const p = properties.find(x => x.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({ success:false, error:'Property not found' });
  res.json({ success:true, data:p });
});

// POST create property
app.post('/api/properties', (req, res) => {
  const { title, location, type, price, guests, beds, baths, desc } = req.body;
  if (!title || !location || !price) return res.status(400).json({ success:false, error:'title, location and price are required' });
  const newProp = { id: nextPropId++, title, location, type: type||'apartment', price: parseInt(price), rating:5.0, reviews:0, guests: parseInt(guests)||2, beds: parseInt(beds)||1, baths: parseInt(baths)||1, img:'', tags:[], amenities:[], desc: desc||'', createdAt: new Date().toISOString() };
  properties.push(newProp);
  res.status(201).json({ success:true, data:newProp });
});

// PUT update property
app.put('/api/properties/:id', (req, res) => {
  const idx = properties.findIndex(x => x.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success:false, error:'Property not found' });
  properties[idx] = { ...properties[idx], ...req.body, id: parseInt(req.params.id) };
  res.json({ success:true, data:properties[idx] });
});

// DELETE property
app.delete('/api/properties/:id', (req, res) => {
  const idx = properties.findIndex(x => x.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success:false, error:'Property not found' });
  properties.splice(idx, 1);
  res.json({ success:true, message:'Property deleted' });
});

// ── BOOKINGS ────────────────────────────────────────────────
// GET all bookings
app.get('/api/bookings', (req, res) => {
  const { status, propertyId } = req.query;
  let result = [...bookings];
  if (status)     result = result.filter(b => b.status === status);
  if (propertyId) result = result.filter(b => b.propertyId === parseInt(propertyId));
  res.json({ success:true, count:result.length, data:result });
});

// GET single booking
app.get('/api/bookings/:id', (req, res) => {
  const b = bookings.find(x => x.id === req.params.id);
  if (!b) return res.status(404).json({ success:false, error:'Booking not found' });
  const property = properties.find(p => p.id === b.propertyId);
  res.json({ success:true, data: { ...b, property } });
});

// POST create booking
app.post('/api/bookings', (req, res) => {
  const { propertyId, guestName, guestEmail, checkIn, checkOut, guests } = req.body;
  if (!propertyId || !checkIn || !checkOut) return res.status(400).json({ success:false, error:'propertyId, checkIn and checkOut are required' });
  const property = properties.find(p => p.id === parseInt(propertyId));
  if (!property) return res.status(404).json({ success:false, error:'Property not found' });
  // Check date validity
  const ci = new Date(checkIn), co = new Date(checkOut);
  if (co <= ci) return res.status(400).json({ success:false, error:'checkOut must be after checkIn' });
  const nights   = Math.ceil((co - ci) / 86400000);
  const subtotal = property.price * nights;
  const fee      = Math.round(subtotal * 0.08);
  const total    = subtotal + fee;
  const newBooking = {
    id: 'BK' + String(nextBookingId++).padStart(3,'0'),
    propertyId: parseInt(propertyId),
    guestName: guestName || 'Guest',
    guestEmail: guestEmail || '',
    checkIn, checkOut,
    guests: parseInt(guests) || 1,
    nights, subtotal, fee, total,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  bookings.push(newBooking);
  res.status(201).json({ success:true, data:newBooking });
});

// PATCH update booking status
app.patch('/api/bookings/:id/status', (req, res) => {
  const b = bookings.find(x => x.id === req.params.id);
  if (!b) return res.status(404).json({ success:false, error:'Booking not found' });
  const { status } = req.body;
  const allowed = ['pending','confirmed','completed','cancelled'];
  if (!allowed.includes(status)) return res.status(400).json({ success:false, error:'Invalid status' });
  b.status = status;
  res.json({ success:true, data:b });
});

// DELETE / cancel booking
app.delete('/api/bookings/:id', (req, res) => {
  const b = bookings.find(x => x.id === req.params.id);
  if (!b) return res.status(404).json({ success:false, error:'Booking not found' });
  b.status = 'cancelled';
  res.json({ success:true, message:'Booking cancelled', data:b });
});

// ── USERS ────────────────────────────────────────────────────
app.get('/api/users', (req, res) => res.json({ success:true, data:users }));

app.post('/api/users/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ success:false, error:'All fields required' });
  if (users.find(u => u.email === email)) return res.status(409).json({ success:false, error:'Email already registered' });
  const user = { id: nextUserId++, name, email, role:'guest', createdAt: new Date().toISOString() };
  users.push(user);
  res.status(201).json({ success:true, data:{ id:user.id, name:user.name, email:user.email, role:user.role } });
});

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ success:false, error:'Email and password required' });
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ success:false, error:'Invalid credentials' });
  // In production: verify bcrypt hash
  res.json({ success:true, data:{ id:user.id, name:user.name, email:user.email, role:user.role }, token:'demo-jwt-token' });
});

// ── STATS ────────────────────────────────────────────────────
app.get('/api/stats', (req, res) => {
  const revenue = bookings.filter(b => b.status !== 'cancelled').reduce((s,b) => s + b.total, 0);
  res.json({
    success: true,
    data: {
      totalProperties: properties.length,
      totalBookings:   bookings.length,
      totalUsers:      users.length,
      totalRevenue:    revenue,
      pendingBookings: bookings.filter(b => b.status === 'pending').length,
      confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    }
  });
});

// ── SERVE FRONTEND ────────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🏠  AirStay Server running on http://localhost:${PORT}`);
  console.log(`   API: http://localhost:${PORT}/api\n`);
  console.log('Available endpoints:');
  console.log('  GET    /api/properties');
  console.log('  GET    /api/properties/:id');
  console.log('  POST   /api/properties');
  console.log('  GET    /api/bookings');
  console.log('  POST   /api/bookings');
  console.log('  PATCH  /api/bookings/:id/status');
  console.log('  POST   /api/users/register');
  console.log('  POST   /api/users/login');
  console.log('  GET    /api/stats\n');
});

module.exports = app;
