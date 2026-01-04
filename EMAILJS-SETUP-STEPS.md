# Next Steps: Complete EmailJS Setup

## ✅ What I've Done

1. **Added EmailJS Library** to booking.html
2. **Initialized EmailJS** with public key: `P5pLfn2vNE0Rg0Y5P`
3. **Converted 3 email functions** from broken Formspree to EmailJS:
   - `sendBookingEmail()` - Customer confirmation
   - `sendAdminNotificationEmail()` - Admin alert
   - `sendAdminWhatsAppMessage()` - WhatsApp-style alert

## 📋 What You Need to Do

### Step 1: Create EmailJS Account
- Go to https://www.emailjs.com
- Sign up for free account
- Verify your email

### Step 2: Connect Gmail Service
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect with Gmail**
5. Sign in with gummu.369@gmail.com
6. Copy the **Service ID** (should be like `service_gmail`)
7. Update [script.js](js/script.js) line 567 if the service ID is different

### Step 3: Create Email Templates

#### Template 1: Customer Confirmation
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name: `template_customer_confirmation`
4. Subject: `Booking Confirmation - {{booking_ref}}`
5. Email content:
```
Hello {{customer_name}},

Thank you for booking with VAMSI VAULT! Your booking has been confirmed.

BOOKING DETAILS:
Booking Reference: {{booking_ref}}
Service: {{service_name}}
Price: ₹{{service_price}}
Date: {{booking_date}}
Time: {{booking_time}}

SERVICE ADDRESS:
{{service_address}}

Our team will contact you 24 hours before the scheduled service.

Best regards,
VAMSI VAULT Team
Phone: +91 9133813168
Email: gummu.369@gmail.com
```
6. Save template

#### Template 2: Admin Notification
1. Create New Template
2. Name: `template_admin_notification`
3. To email: `gummu.369@gmail.com`
4. Subject: `NEW BOOKING: {{service_name}} - {{booking_ref}}`
5. Email content:
```
NEW BOOKING RECEIVED - VAMSI VAULT

========================================
BOOKING DETAILS:
========================================
Booking Reference: {{booking_ref}}
Service: {{service_name}}
Price: ₹{{service_price}}
Date: {{booking_date}}
Time: {{booking_time}}

========================================
CUSTOMER INFORMATION:
========================================
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

========================================
SERVICE ADDRESS:
========================================
{{service_address}}

========================================
SPECIAL REQUESTS:
========================================
{{special_requests}}

========================================
BOOKING TIME: {{booking_time_received}}
========================================

Please follow up with the customer within 24 hours.
```
6. Save template

#### Template 3: Admin WhatsApp Alert
1. Create New Template
2. Name: `template_admin_whatsapp`
3. To email: `gummu.369@gmail.com`
4. Subject: `📱 NEW BOOKING WHATSAPP: {{service_name}}`
5. Email content:
```
{{whatsapp_message}}

---
Copy and paste the above message directly to WhatsApp Web for quick follow-up.
```
6. Save template

### Step 4: Get Your Public Key
1. Go to **Account Settings**
2. Copy your **Public Key**
3. Verify it matches: `P5pLfn2vNE0Rg0Y5P`
   - If different, update [booking.html line 12](booking.html#L12)

### Step 5: Test It!
1. Open http://localhost:8000/booking.html
2. Fill in test booking details
3. Click "Confirm Booking"
4. Check if you receive emails at gummu.369@gmail.com

## 🔧 Files to Reference

- [EmailJS Setup Documentation](EMAILJS-SETUP.md)
- [booking.html](booking.html#L8-L14) - Library initialization
- [js/script.js](js/script.js) - Updated email functions:
  - Lines 567-583: `sendBookingEmail()`
  - Lines 675-691: `sendAdminNotificationEmail()`
  - Lines 745-761: `sendAdminWhatsAppMessage()`

## ❓ Need Help?

**EmailJS Dashboard**: https://dashboard.emailjs.com
**EmailJS Docs**: https://www.emailjs.com/docs/
**Email Templates Guide**: https://www.emailjs.com/docs/user-guide/email-templates/

## ✨ What Happens After Setup

When customer submits booking form:
1. ✅ Booking saved locally
2. ✅ Email sent to customer (confirmation)
3. ✅ Email sent to admin (detailed notification)
4. ✅ Email sent to admin (WhatsApp-formatted for quick messaging)
5. ✅ Customer redirected to confirmation page

Your admin will get instant notifications for every booking! 🎉
