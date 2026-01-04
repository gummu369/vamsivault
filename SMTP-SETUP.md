# 📧 SMTP Backend Setup Guide - Nodemailer

Your project has been migrated from **EmailJS** to a **Node.js + Nodemailer backend** for free, reliable email sending!

---

## ✅ What's Been Set Up

1. **Backend Server** - Express.js with Nodemailer
2. **Email API** - Single endpoint: `POST /send-booking-email`
3. **Updated Frontend** - Booking form now calls the backend API
4. **Environment Config** - Secure `.env` file for credentials

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create Gmail App Password

Since you're using Gmail (`vk522603@gmail.com`), you need an "App Password" (not your regular password).

#### For Gmail:
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go back to **Security** settings
4. Find **App passwords** (near the bottom)
5. Select **Mail** and **Windows Computer**
6. Copy the **16-character password** generated
7. Update your `.env` file with this password

---

### Step 2: Install Node.js

If you don't have Node.js installed:
- Download from [nodejs.org](https://nodejs.org/)
- Install the **LTS version** (recommended)
- Verify: Run `node --version` in terminal

---

### Step 3: Install Dependencies

Open terminal in the `backend/` folder and run:

```bash
npm install
```

This installs:
- `express` - Web server framework
- `nodemailer` - Email sending
- `dotenv` - Environment variables
- `cors` - Cross-origin requests
- `body-parser` - Request parsing

---

### Step 4: Configure Environment Variables

1. Open `backend/.env` file
2. Update with your Gmail App Password:

```env
PORT=3000
SMTP_EMAIL=vk522603@gmail.com
SMTP_PASSWORD=your_app_password_here
ADMIN_EMAIL=vk522603@gmail.com
NODE_ENV=development
```

**Important:** Replace `your_app_password_here` with the 16-character password from Gmail.

---

### Step 5: Start the Backend Server

In the `backend/` folder, run:

```bash
npm start
```

You should see:
```
✅ Server running on http://localhost:3000
✅ SMTP Server is ready to send emails
```

---

### Step 6: Test the Booking Form

1. Open `booking.html` in your browser (or run a local server)
2. Fill out a test booking
3. Submit the form
4. Check:
   - Your email inbox for customer confirmation
   - Admin email inbox (`vk522603@gmail.com`) for booking notification

---

## 📁 Project Structure

```
your-project/
├── booking.html              # Updated to use backend API
├── services.html
├── index.html
├── js/
│   └── script.js            # Updated email functions
├── css/
│   └── styles.css
└── backend/                 # NEW - Backend server
    ├── server.js            # Express app with email endpoint
    ├── package.json         # Node.js dependencies
    ├── .env                 # Your credentials (DO NOT share)
    └── .env.example         # Template for reference
```

---

## 🔧 How It Works

### Frontend → Backend → Gmail Flow:

```
1. User fills booking form
2. JavaScript sends POST request to http://localhost:3000/send-booking-email
3. Backend receives data
4. Nodemailer sends two emails:
   - Customer confirmation
   - Admin notification
5. Response sent back to frontend
```

### Email Data Sent:
```javascript
{
    customerName: "John Doe",
    customerEmail: "john@example.com",
    bookingRef: "123456abc123",
    serviceName: "House Cleaning",
    servicePrice: 49,
    bookingDate: "2026-01-10",
    bookingTime: "10:00",
    serviceAddress: "123 Main St",
    phone: "+91 1234567890",
    city: "New York",
    zip: "10001"
}
```

---

## 📧 Email Templates

### Customer Confirmation Email
- Dark professional design (matches your website)
- Booking reference
- Service details
- Address confirmation
- Contact info

### Admin Notification Email
- Customer details
- Booking reference
- Service and pricing info
- Address and phone
- Timestamp

---

## 🚀 Deployment

### For Local Testing:
✅ Done! Just run `npm start` in `backend/` folder

### For Production (Netlify/Heroku):

#### Option 1: Netlify Functions (Free)
1. Move `server.js` to `netlify/functions/email.js`
2. Deploy with Netlify CLI
3. Update frontend URL to your function endpoint

#### Option 2: Heroku (Free Tier Removed)
- Alternative: Railway.app, Render.com, or Replit

#### Option 3: Traditional Hosting
- Most hosting providers support Node.js
- Upload `backend/` folder
- Run `npm install && npm start`

**Note:** For production, you'll need a backend server that runs 24/7.

---

## 🔒 Security Best Practices

✅ **Already Done:**
- Credentials in `.env` (not in code)
- CORS enabled for same-origin requests
- Environment variables for sensitive data

⚠️ **Do This:**
1. **Never commit `.env`** - It's in `.gitignore`
2. **Use `.env.example`** as template for team members
3. **Rotate App Password** - Change it periodically
4. **Enable 2FA** - For your Gmail account

❌ **Don't Do:**
- Share `.env` file
- Commit passwords to GitHub
- Use Gmail password directly (always use App Password)

---

## ❓ Troubleshooting

### Problem: "Cannot find module 'express'"
**Solution:** Run `npm install` in the `backend/` folder

### Problem: "SMTP Error: Invalid login"
**Solution:** 
- Check App Password is correct (16 characters)
- Ensure 2-Step Verification is enabled on Gmail
- Try generating a new App Password

### Problem: "CORS error" or "fetch failed"
**Solution:**
- Check backend server is running (`npm start`)
- Verify port 3000 is not blocked
- Check frontend URL in browser matches `http://localhost:3000`

### Problem: Email not received
**Solution:**
- Check spam/junk folder
- Verify email address is correct in `.env`
- Check backend logs for errors
- Test SMTP connection: `npm run test` (if added)

---

## 📊 Advantages Over EmailJS

| Feature | Nodemailer | EmailJS |
|---------|-----------|---------|
| **Cost** | Free | Free tier (200 emails/month) |
| **Control** | Complete | Limited |
| **Email Limits** | Unlimited (Gmail limits apply) | 200/month free |
| **Custom Headers** | Yes | No |
| **Attachments** | Yes | Limited |
| **Learning Curve** | Easy | Very Easy |
| **Deployment** | Backend needed | No backend |

---

## 🎯 Next Steps

### Immediate:
1. ✅ Install dependencies (`npm install`)
2. ✅ Get Gmail App Password
3. ✅ Update `.env` file
4. ✅ Start server (`npm start`)
5. ✅ Test booking form

### Optional Enhancements:
- Add email attachments (booking PDF)
- Send test email endpoint
- Database for storing bookings
- Admin dashboard email logs
- WhatsApp integration (Twilio)

---

## 📚 Resource Links

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [CORS Explanation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## 💡 Tips

1. **Development:** Use `nodemon` for auto-restart on file changes
   ```bash
   npm install --save-dev nodemon
   npm run dev
   ```

2. **Email Testing:** Use services like [Mailtrap](https://mailtrap.io/) to test without sending real emails

3. **Monitoring:** Check backend logs in terminal for all email activities

4. **Rate Limiting:** Add rate limiting to prevent spam abuse (optional)

---

## ✨ Summary

You now have:
- ✅ Free email backend (no service limits)
- ✅ Professional email templates
- ✅ Complete control over emails
- ✅ Secure credential management
- ✅ Easy to maintain and scale

**Your website is now using SMTP with Nodemailer instead of EmailJS!**

Questions? Check the troubleshooting section or run `npm start` to begin!
