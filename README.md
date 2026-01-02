# Urban Vault - Service Booking Website

A modern, responsive service-booking website for urban home services like house cleaning, laundry, and deep cleaning.

## 🚀 Features

### Core Features
- **Modern, Professional UI**: Clean and urban-style design with modern color palette (dark + orange + gold)
- **Responsive Design**: Mobile-friendly and optimized for all devices
- **Fast Loading**: Optimized CSS and minimal JavaScript for quick performance
- **Service Booking**: Easy-to-use booking form for scheduling services

### Pages

1. **Homepage (index.html)**
   - Hero section with call-to-action
   - Feature highlights (Quick Booking, Trusted & Verified, etc.)
   - Service preview cards
   - About section
   - Contact information
   - Footer with links

2. **Services Page (services.html)**
   - Detailed service listings (9 services)
   - Complete descriptions and features for each service
   - Pricing information
   - Quick booking buttons

3. **Booking Page (booking.html)**
   - Comprehensive booking form
   - Service selection
   - Date and time picker
   - Address and contact details
   - Special requests field
   - Form validation
   - Success confirmation with booking reference
   - FAQ section
   - How it works guide

4. **Admin Dashboard (admin/index.html)**
   - Statistics overview (Total Bookings, Pending, Completed, Revenue)
   - Booking management with status updates
   - Service management
   - Customer list and analytics
   - Settings and business information
   - Export bookings as CSV
   - Data management

## 📋 Services Offered

1. **House Cleaning** - $49
   - Standard home cleaning with dusting, vacuuming, and surface cleaning

2. **Laundry Service** - $29
   - Professional laundry with pickup and delivery

3. **Deep Cleaning** - $89
   - Comprehensive cleaning for every corner of the home

4. **Maintenance Cleaning** - $39
   - Recurring weekly/bi-weekly cleaning plans with discounts

5. **Kitchen Deep Clean** - $59
   - Specialized kitchen cleaning including appliances

6. **Bathroom Deep Clean** - $49
   - Professional bathroom cleaning with sanitization

7. **Move-In/Out Cleaning** - $99
   - Complete home cleaning for moving

8. **Post-Event Cleaning** - $79
   - Cleanup after parties and events

9. **Window Cleaning** - $39
   - Interior and exterior window cleaning

## 🎨 Design Features

### Color Palette
- **Primary**: #1a1a1a (Dark Gray/Black)
- **Secondary**: #ff6b35 (Orange - Accent)
- **Accent**: #ffd700 (Gold - Highlights)
- **Light**: #f5f5f5 (Light Gray - Text)
- **Dark**: #0f0f0f (Near Black - Background)

### Typography
- Clean, modern sans-serif fonts (Segoe UI, Tahoma, Geneva, Verdana)
- Consistent font sizes and line heights
- Professional heading hierarchy

### Components
- Service cards with hover effects
- Smooth transitions and animations
- Responsive grid layouts
- Mobile-friendly navigation with hamburger menu
- Form validation with helpful error messages
- Modal dialogs for admin actions

## 💾 Data Storage

The website uses **Browser LocalStorage** for data persistence:
- Bookings are automatically saved to localStorage
- Admin dashboard reads from localStorage
- No server required - perfect for learning and small deployments
- Data persists across browser sessions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adjusted grid layouts)
- **Mobile**: Below 768px (Single column, hamburger menu)
- **Small Mobile**: Below 480px (Compact text and spacing)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and CSS Grid
- **Vanilla JavaScript**: No dependencies, pure JS functionality
- **LocalStorage API**: Client-side data persistence

## 📂 Project Structure

```
urban-vault/
├── index.html           # Homepage
├── services.html        # Services listing
├── booking.html         # Booking form
├── css/
│   └── styles.css       # Main stylesheet (1000+ lines)
├── js/
│   └── script.js        # JavaScript functionality
├── admin/
│   └── index.html       # Admin dashboard
└── assets/              # Images and media folder
```

## 🚀 How to Use

### 1. **Local Development**
   - Open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`
   - Navigate to `http://localhost:8000`

### 2. **Booking a Service**
   - Click "Book Now" on the homepage or services page
   - Fill in the booking form
   - Select service, date, time, and enter address
   - Provide contact information
   - Submit to get a booking reference number
   - Booking is automatically saved

### 3. **Admin Dashboard**
   - Navigate to `admin/index.html`
   - View all bookings and statistics
   - Update booking status (Pending, Confirmed, Completed, Cancelled)
   - Manage services and pricing
   - View customer list
   - Export bookings as CSV

### 4. **Mobile Navigation**
   - Click the hamburger menu (☰) on mobile devices
   - Navigate smoothly between pages
   - Menu closes automatically when a link is clicked

## ✨ Key Features

### Booking System
- Service selection with dynamic pricing display
- Date picker with minimum date validation
- Time slots from 8 AM to 7 PM
- Address collection with city and zip code
- Phone number auto-formatting
- Email validation
- Special requests field
- Instant booking confirmation with reference number

### Admin Features
- Real-time statistics dashboard
- Booking status management
- Service price editing
- Add new services
- Customer analytics
- CSV export functionality
- Data backup and management

### UX/UI Features
- Smooth hover animations on all interactive elements
- Mobile hamburger menu
- Smooth scrolling to sections
- Form validation with user-friendly messages
- Loading states and success confirmations
- Accessible colors and typography
- Touch-friendly buttons and links

## 🔐 Security Notes

- All data is stored in browser localStorage (client-side only)
- No sensitive data should be stored here in production
- For production use, integrate with a backend server and database
- Implement proper authentication for admin access
- Use HTTPS for secure data transmission

## 📈 Future Enhancements

- Backend server integration
- User authentication and login
- Payment gateway integration
- Email notifications
- SMS notifications
- Service provider management
- Rating and review system
- Advanced scheduling with availability
- Customer portal for booking management
- Push notifications
- Multi-language support
- Dark mode toggle

## 📞 Contact & Support

- Email: hello@urbanvault.com
- Phone: +1 (555) 123-4567
- Address: 123 Urban Street, City, State 12345

## 📄 License

This project is free to use and modify for personal and commercial purposes.

---

**Created**: January 2026
**Version**: 1.0
**Status**: Production Ready
