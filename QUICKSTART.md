# Urban Vault - Quick Start Guide

## Getting Started in 30 Seconds

### Step 1: Open the Website
Simply open `index.html` in your web browser or use a local server:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Step 2: Explore the Website
- **Homepage**: Clean hero section with featured services
- **Services Page**: Browse all 9 available services with detailed descriptions
- **Book Service**: Complete the booking form to schedule a service
- **Admin Dashboard**: Access `admin/index.html` to manage bookings

## 🎯 Key Pages & URLs

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `index.html` | Main landing page |
| Services | `services.html` | Detailed service listings |
| Booking | `booking.html` | Service booking form |
| Admin | `admin/index.html` | Admin dashboard |

## 📋 Testing the Booking System

### Try Booking a Service:
1. Go to `booking.html` or click "Book Now"
2. Select a service (e.g., "House Cleaning")
3. Choose a date (today or future)
4. Pick a time slot
5. Enter address details
6. Add your contact information
7. Click "Confirm Booking"
8. You'll see a booking reference number

### View Your Booking:
1. Go to `admin/index.html`
2. See your booking in the "All Bookings" tab
3. Update the booking status
4. Click "Export as CSV" to download data

## 🎨 Customization Guide

### Change Business Name
Edit these files and replace "Urban Vault" with your business name:
- `index.html` - Logo and header
- `services.html` - Header
- `booking.html` - Header
- `admin/index.html` - Admin title
- `README.md` - Documentation

### Change Services
Edit `css/styles.css` and `js/script.js`:
```javascript
// In js/script.js
const servicePrices = {
    'your-service': 99,
    'another-service': 49,
    // Add more services here
};
```

### Change Colors
Edit `:root` in `css/styles.css`:
```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #ff6b35;    /* Orange accent */
    --accent-color: #ffd700;       /* Gold highlights */
    /* More colors... */
}
```

### Update Contact Info
Edit these sections in `index.html` and `admin/index.html`:
```html
<!-- Contact Section -->
<p>+1 (555) 123-4567</p>
<p>hello@urbanvault.com</p>
<p>123 Urban Street, City, State 12345</p>
```

## 🚀 Features Explained

### Mobile Menu
- Automatically appears on screens smaller than 768px
- Click ☰ button to toggle
- Menu closes when you click a link

### Service Cards
- Show service name, icon, and price
- "Book Now" button prefills the booking form
- "View Details" link (can be customized)

### Booking Form
- Validates all required fields
- Auto-formats phone numbers
- Shows booking reference on success
- Data saved to browser localStorage

### Admin Dashboard
- **Dashboard Tab**: Overview statistics
- **Bookings Tab**: View, edit, delete, and export bookings
- **Services Tab**: Manage service pricing
- **Customers Tab**: View customer list and spending
- **Settings Tab**: Business information and preferences

## 📊 Data Management

### View Saved Bookings (Browser DevTools)
1. Press `F12` to open Developer Tools
2. Go to "Console" tab
3. Type: `JSON.parse(localStorage.getItem('bookings'))`
4. Press Enter to see all bookings

### Clear All Data
- Go to Admin > Settings > "Clear All Data" button
- Or manually: `localStorage.removeItem('bookings')`

## 🔧 Troubleshooting

### Bookings Not Saving?
- Check if localStorage is enabled in your browser
- Private/Incognito browsers may not support localStorage
- Try in a regular browser window

### Mobile Menu Not Working?
- Make sure window is less than 768px wide
- Check browser console for JavaScript errors
- Try refreshing the page

### Form Validation Not Working?
- Ensure all required fields are filled (marked with *)
- Email must be in valid format (user@example.com)
- Phone number can include dashes and spaces

## 💡 Pro Tips

1. **Test Different Services**
   - Each service has a different price
   - Maintenance plan shows frequency options
   - Admin shows total revenue

2. **Export Data**
   - Go to Admin > Bookings
   - Click "Export as CSV"
   - Open in Excel or Google Sheets

3. **Mobile Testing**
   - Use Chrome DevTools (F12 > toggle device toolbar)
   - Test on different screen sizes
   - Check hamburger menu functionality

4. **Browser Compatibility**
   - Works in all modern browsers (Chrome, Firefox, Safari, Edge)
   - Uses standard HTML5, CSS3, and JavaScript
   - No external dependencies

## 📱 Responsive Design Test

Test your website on different screen sizes:
- **Desktop** (1200px+): Full layout with navigation
- **Tablet** (768-1199px): Adjusted grid layouts
- **Mobile** (480-767px): Single column, hamburger menu
- **Small Mobile** (<480px): Compact everything

Use Chrome DevTools: `F12` → Click the device toggle icon

## 🎓 Learning Resources

### Included Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, Grid, transitions, animations
- **JavaScript**: DOM manipulation, event handling, localStorage API

### Code Examples
- See `css/styles.css` for modern CSS practices
- Check `js/script.js` for vanilla JavaScript patterns
- View HTML files for semantic HTML5

## 🌟 Next Steps

1. **Deploy Online**
   - Upload files to web hosting (GoDaddy, Bluehost, etc.)
   - Or use GitHub Pages for free static hosting
   - Or use Netlify for easy deployment

2. **Add Backend**
   - Connect to a database (Firebase, MongoDB, SQL)
   - Add user authentication
   - Implement payment processing
   - Send real email confirmations

3. **Enhance Features**
   - Add customer login portal
   - Service provider management
   - Real-time availability checking
   - Review and rating system
   - Push notifications

4. **SEO Optimization**
   - Add meta descriptions
   - Optimize images
   - Add structured data (Schema.org)
   - Create sitemap.xml
   - Add robots.txt

## 📞 Support

For questions or issues:
1. Check the `README.md` file
2. Review the code comments in `js/script.js`
3. Open Browser DevTools (F12) to check for errors
4. Test in different browsers

---

**Happy Booking! 🎉**

Urban Vault v1.0 - Ready to use and customize
