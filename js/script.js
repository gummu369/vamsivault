// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navbar = document.getElementById('navbar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// ============ BOOKING PAGE FUNCTIONS ============

// Service pricing
const servicePrices = {
    'house-cleaning': 49,
    'laundry': 29,
    'deep-cleaning': 89,
    'maintenance': 39,
    'kitchen': 59,
    'bathroom': 49,
    'move-in-out': 99,
    'post-event': 79,
    'window': 39
};

// Check if we're on the booking page
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    const serviceSelect = document.getElementById('service');
    const frequencyGroup = document.getElementById('frequencyGroup');
    const priceDisplay = document.getElementById('priceDisplay');
    const priceValue = document.getElementById('priceValue');
    const dateInput = document.getElementById('date');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Handle service selection
    serviceSelect.addEventListener('change', (e) => {
        const selectedService = e.target.value;
        
        // Show/hide frequency for maintenance cleaning
        if (selectedService === 'maintenance') {
            frequencyGroup.style.display = 'block';
            document.getElementById('frequency').required = true;
        } else {
            frequencyGroup.style.display = 'none';
            document.getElementById('frequency').required = false;
        }

        // Update price display
        if (selectedService && servicePrices[selectedService]) {
            priceValue.textContent = '₹' + servicePrices[selectedService];
            priceDisplay.style.display = 'block';
        } else {
            priceDisplay.style.display = 'none';
        }
    });

    // Check if URL has a service parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && servicePrices[serviceParam]) {
        serviceSelect.value = serviceParam;
        serviceSelect.dispatchEvent(new Event('change'));
    }

    // Handle form submission
    window.handleBookingSubmit = function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            address: document.getElementById('address').value,
            address2: document.getElementById('address2').value,
            city: document.getElementById('city').value,
            zip: document.getElementById('zip').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            notes: document.getElementById('notes').value,
            frequency: document.getElementById('frequency').value || 'N/A'
        };

        // Validate form
        if (!formData.service || !formData.date || !formData.time || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate phone format
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid phone number');
            return;
        }

        // Generate booking reference
        const bookingRef = 'UB-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();

        // Save to localStorage for admin panel
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push({
            ...formData,
            bookingRef: bookingRef,
            timestamp: new Date().toISOString(),
            status: 'Pending'
        });
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Hide form and show success message
        document.querySelector('.booking-form').style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        document.getElementById('bookingRef').textContent = bookingRef;
        successMessage.style.display = 'block';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
    };
}

// ============ ADMIN PAGE FUNCTIONS ============

// Admin statistics
function updateAdminStats() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const pendingCount = bookings.filter(b => b.status === 'Pending').length;
    const completedCount = bookings.filter(b => b.status === 'Completed').length;
    const cancelledCount = bookings.filter(b => b.status === 'Cancelled').length;

    const totalRevenueValue = document.getElementById('totalRevenueValue');
    const totalBookingsValue = document.getElementById('totalBookingsValue');
    const pendingBookingsValue = document.getElementById('pendingBookingsValue');
    const completedBookingsValue = document.getElementById('completedBookingsValue');

    if (totalBookingsValue) {
        totalBookingsValue.textContent = bookings.length;
    }
    if (pendingBookingsValue) {
        pendingBookingsValue.textContent = pendingCount;
    }
    if (completedBookingsValue) {
        completedBookingsValue.textContent = completedCount;
    }
    if (totalRevenueValue) {
        let totalRevenue = 0;
        bookings.forEach(b => {
            const price = servicePrices[b.service] || 0;
            totalRevenue += price;
        });
        totalRevenueValue.textContent = '$' + totalRevenue.toFixed(2);
    }
}

// Display bookings in table
function displayBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsBody = document.getElementById('bookingsBody');

    if (!bookingsBody) return;

    if (bookings.length === 0) {
        bookingsBody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #999;">No bookings yet</td></tr>';
        return;
    }

    bookingsBody.innerHTML = bookings.map(booking => `
        <tr>
            <td>${booking.bookingRef}</td>
            <td>${booking.firstName} ${booking.lastName}</td>
            <td>${booking.service.replace(/-/g, ' ').toUpperCase()}</td>
            <td>${booking.date} at ${booking.time}</td>
            <td>$${servicePrices[booking.service] || 0}</td>
            <td>
                <select class="status-select" onchange="updateBookingStatus('${booking.bookingRef}', this.value)">
                    <option value="Pending" ${booking.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Confirmed" ${booking.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="Completed" ${booking.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    <option value="Cancelled" ${booking.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </td>
            <td>
                <button class="action-btn edit" onclick="editBooking('${booking.bookingRef}')">Edit</button>
                <button class="action-btn delete" onclick="deleteBooking('${booking.bookingRef}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Update booking status
window.updateBookingStatus = function(bookingRef, newStatus) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings = bookings.map(b => {
        if (b.bookingRef === bookingRef) {
            b.status = newStatus;
        }
        return b;
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    updateAdminStats();
};

// Edit booking (shows alert for demo)
window.editBooking = function(bookingRef) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.bookingRef === bookingRef);
    if (booking) {
        alert('Edit functionality: Would open editor for\n\n' + booking.firstName + ' ' + booking.lastName + '\n' + booking.service + '\n' + booking.date);
    }
};

// Delete booking
window.deleteBooking = function(bookingRef) {
    if (confirm('Are you sure you want to delete this booking?')) {
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings = bookings.filter(b => b.bookingRef !== bookingRef);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        displayBookings();
        updateAdminStats();
    }
};

// Display services in admin
function displayServices() {
    const servicesBody = document.getElementById('servicesBody');
    if (!servicesBody) return;

    const services = Object.keys(servicePrices).map(key => ({
        id: key,
        name: key.replace(/-/g, ' ').toUpperCase(),
        price: servicePrices[key]
    }));

    servicesBody.innerHTML = services.map(service => `
        <tr>
            <td>${service.id}</td>
            <td>${service.name}</td>
            <td>$${service.price}</td>
            <td>Active</td>
            <td>
                <button class="action-btn edit" onclick="editService('${service.id}')">Edit</button>
                <button class="action-btn delete" onclick="deleteService('${service.id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Edit service
window.editService = function(serviceId) {
    const newPrice = prompt('Enter new price for ' + serviceId.replace(/-/g, ' '), servicePrices[serviceId]);
    if (newPrice && !isNaN(newPrice)) {
        servicePrices[serviceId] = parseInt(newPrice);
        localStorage.setItem('servicePrices', JSON.stringify(servicePrices));
        displayServices();
        alert('Service price updated!');
    }
};

// Delete service
window.deleteService = function(serviceId) {
    if (confirm('Are you sure you want to delete this service?')) {
        delete servicePrices[serviceId];
        localStorage.setItem('servicePrices', JSON.stringify(servicePrices));
        displayServices();
        alert('Service deleted!');
    }
};

// Tab switching for admin
function setupAdminTabs() {
    const tabButtons = document.querySelectorAll('.admin-tabs button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            if (tabContents[index]) {
                tabContents[index].classList.add('active');
            }
        });
    });

    // Set first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }
    if (tabContents.length > 0) {
        tabContents[0].classList.add('active');
    }
}

// Initialize admin page
if (window.location.pathname.includes('admin')) {
    setupAdminTabs();
    updateAdminStats();
    displayBookings();
    displayServices();

    // Refresh stats and bookings every 5 seconds
    setInterval(() => {
        updateAdminStats();
        displayBookings();
    }, 5000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading for images (if needed)
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease-in';
});

// Format phone number as user types
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });
}

console.log('Vamsi Vault - JavaScript loaded successfully');
