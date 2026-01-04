# EmailJS Setup for Vamsi Vault

## Overview
EmailJS has been integrated to send automated email notifications when customers book services. This replaces the non-functional Formspree service.

## What Was Updated

### 1. **booking.html** (Lines 8-14)
- Added EmailJS library: `https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js`
- Initialized EmailJS with public key: `P5pLfn2vNE0Rg0Y5P`
- The library loads before the form, so all functions can use it

### 2. **js/script.js** - Three Email Functions Updated

#### Function 1: `sendBookingEmail()` (Lines 567-583)
- **Purpose**: Send booking confirmation to customer
- **Replaced**: Old Formspree fetch with EmailJS
- **Service**: `service_gmail`
- **Template**: `template_customer_confirmation`
- **Parameters Sent**:
  - `to_email`: Customer's email
  - `customer_name`: Full name
  - `booking_ref`: Unique booking reference
  - `service_name`: Service booked
  - `booking_date`: Formatted date
  - `booking_time`: Time slot
  - `service_price`: Price in ₹
  - `service_address`: Full address
  - And more details...

#### Function 2: `sendAdminNotificationEmail()` (Lines 675-691)
- **Purpose**: Send admin alert when customer books
- **Replaced**: Old Formspree fetch with EmailJS
- **Service**: `service_gmail`
- **Template**: `template_admin_notification`
- **Recipient**: `gummu.369@gmail.com`
- **Includes**: All booking details formatted for easy reading

#### Function 3: `sendAdminWhatsAppMessage()` (Lines 745-761)
- **Purpose**: Send WhatsApp-formatted message to admin
- **Replaced**: Old Formspree fetch with EmailJS
- **Service**: `service_gmail`
- **Template**: `template_admin_whatsapp`
- **Features**: Contains WhatsApp-style formatting with emojis and bold text

## How It Works

When a customer submits the booking form:

1. **Form Validation**: Form data is validated
2. **Generate Reference**: Unique booking reference is created (e.g., `267845hlyaioe7am`)
3. **Save to LocalStorage**: Booking is saved locally
4. **Three Emails Sent** (via EmailJS):
   - ✅ Confirmation email to customer
   - ✅ Admin notification email to admin
   - ✅ WhatsApp-formatted alert to admin email
5. **Redirect**: User is redirected to confirmation page with booking reference

## EmailJS Configuration

- **Public Key**: `P5pLfn2vNE0Rg0Y5P`
- **Service ID**: `service_gmail`
- **Templates Used**:
  - `template_customer_confirmation` - Customer booking confirmation
  - `template_admin_notification` - Admin notification with full details
  - `template_admin_whatsapp` - WhatsApp-styled admin alert

> **Note**: You need to set up these email templates in your EmailJS account dashboard (https://dashboard.emailjs.com)

## Required EmailJS Templates

### Template 1: Customer Confirmation
```
From: no-reply@vamsivault.com
To: {{to_email}}
Subject: Booking Confirmation - {{booking_ref}}

Body: Use the email body parameters
```

### Template 2: Admin Notification  
```
From: no-reply@vamsivault.com
To: gummu.369@gmail.com
Subject: NEW BOOKING: {{service_name}} - {{booking_ref}}

Body: Include all booking details
```

### Template 3: Admin WhatsApp
```
From: no-reply@vamsivault.com
To: gummu.369@gmail.com
Subject: 📱 NEW BOOKING WHATSAPP: {{service_name}}

Body: {{whatsapp_message}}
```

## Testing

To test the email delivery:

1. Go to http://localhost:8000/booking.html (or your website)
2. Fill in all form fields
3. Click "Confirm Booking"
4. You should be redirected to confirmation.html with your booking reference
5. Check the admin email (gummu.369@gmail.com) for:
   - Booking notification email
   - WhatsApp-formatted alert email
6. Check the customer email field for:
   - Booking confirmation email

## Troubleshooting

**Emails not arriving?**
- Check browser console for errors (F12 → Console)
- Verify EmailJS service and templates are set up correctly
- Ensure the public key `P5pLfn2vNE0Rg0Y5P` is correct
- Check spam/junk folder in email

**Missing templates?**
- Log in to https://dashboard.emailjs.com
- Go to "Email Templates" section
- Create the three templates mentioned above
- Get the template IDs and update in script.js if needed

## Files Modified

- ✅ `booking.html` - Added EmailJS library and initialization
- ✅ `js/script.js` - Updated all three email functions to use EmailJS
- ✅ `EMAILJS-SETUP.md` - This file (documentation)

## Status

✅ EmailJS integration complete
✅ All three email functions converted
✅ No syntax errors
✅ Ready for testing

Next step: Set up email templates in EmailJS dashboard and test with an actual booking!
