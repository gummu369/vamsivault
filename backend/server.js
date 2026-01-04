const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter - Simple Gmail setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

// Test email configuration on startup
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email Connection Error:', error.message);
        console.log('💡 Make sure your Gmail App Password is correct in .env file');
    } else {
        console.log('✅ Email Server is ready to send emails');
    }
});

// Route: Send booking confirmation email
app.post('/send-booking-email', async (req, res) => {
    try {
        const {
            customerName,
            customerEmail,
            bookingRef,
            serviceName,
            servicePrice,
            bookingDate,
            bookingTime,
            serviceAddress,
            phone,
            city,
            zip
        } = req.body;

        // Validate required fields
        if (!customerEmail || !bookingRef || !serviceName) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // Customer confirmation email
        const customerMailOptions = {
            from: process.env.SMTP_EMAIL,
            to: customerEmail,
            subject: `Booking Confirmation - ${bookingRef}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
                        <h1 style="color: #ffa500; margin: 0;">VAMSI VAULT</h1>
                    </div>
                    
                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <h2 style="color: #1a1a1a; margin-top: 0;">Booking Confirmation</h2>
                        <p style="color: #666;">Hello <strong>${customerName}</strong>,</p>
                        
                        <p style="color: #666;">Thank you for booking with <strong>VAMSI VAULT</strong>! Your booking has been confirmed.</p>
                        
                        <div style="background-color: #fff; border-left: 4px solid #ffa500; padding: 20px; margin: 20px 0;">
                            <h3 style="color: #1a1a1a; margin-top: 0;">Booking Details</h3>
                            <p style="margin: 10px 0;"><strong>Booking Reference:</strong> ${bookingRef}</p>
                            <p style="margin: 10px 0;"><strong>Service:</strong> ${serviceName}</p>
                            <p style="margin: 10px 0;"><strong>Price:</strong> ₹${servicePrice}</p>
                            <p style="margin: 10px 0;"><strong>Date:</strong> ${bookingDate}</p>
                            <p style="margin: 10px 0;"><strong>Time:</strong> ${bookingTime}</p>
                            <p style="margin: 10px 0;"><strong>Contact:</strong> ${phone}</p>
                        </div>
                        
                        <div style="background-color: #fff; border-left: 4px solid #ffa500; padding: 20px; margin: 20px 0;">
                            <h3 style="color: #1a1a1a; margin-top: 0;">Service Address</h3>
                            <p style="margin: 5px 0;">${serviceAddress}</p>
                            <p style="margin: 5px 0;">${city}, ${zip}</p>
                        </div>
                        
                        <p style="color: #666; margin-top: 30px;">Our team will contact you shortly to confirm the details.</p>
                        <p style="color: #666;">Thank you for choosing VAMSI VAULT!</p>
                    </div>
                    
                    <div style="background-color: #1a1a1a; padding: 20px; text-align: center; color: #999; font-size: 12px;">
                        <p>© 2026 VAMSI VAULT. All rights reserved.</p>
                    </div>
                </div>
            `
        };

        // Admin notification email
        const adminMailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: `New Booking - ${bookingRef}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
                        <h1 style="color: #ffa500; margin: 0;">VAMSI VAULT - New Booking Alert</h1>
                    </div>
                    
                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <h2 style="color: #1a1a1a; margin-top: 0;">New Booking Received</h2>
                        
                        <div style="background-color: #fff; border-left: 4px solid #ffa500; padding: 20px; margin: 20px 0;">
                            <h3 style="color: #1a1a1a; margin-top: 0;">Customer Information</h3>
                            <p style="margin: 10px 0;"><strong>Name:</strong> ${customerName}</p>
                            <p style="margin: 10px 0;"><strong>Email:</strong> ${customerEmail}</p>
                            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
                        </div>
                        
                        <div style="background-color: #fff; border-left: 4px solid #ffa500; padding: 20px; margin: 20px 0;">
                            <h3 style="color: #1a1a1a; margin-top: 0;">Booking Information</h3>
                            <p style="margin: 10px 0;"><strong>Booking Reference:</strong> ${bookingRef}</p>
                            <p style="margin: 10px 0;"><strong>Service:</strong> ${serviceName}</p>
                            <p style="margin: 10px 0;"><strong>Price:</strong> ₹${servicePrice}</p>
                            <p style="margin: 10px 0;"><strong>Date:</strong> ${bookingDate}</p>
                            <p style="margin: 10px 0;"><strong>Time:</strong> ${bookingTime}</p>
                            <p style="margin: 10px 0;"><strong>Address:</strong> ${serviceAddress}, ${city}, ${zip}</p>
                        </div>
                        
                        <p style="color: #666; margin-top: 30px;"><strong>Action Required:</strong> Contact customer to confirm booking.</p>
                    </div>
                    
                    <div style="background-color: #1a1a1a; padding: 20px; text-align: center; color: #999; font-size: 12px;">
                        <p>© 2026 VAMSI VAULT. Admin Notification System.</p>
                    </div>
                </div>
            `
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(customerMailOptions),
            transporter.sendMail(adminMailOptions)
        ]);

        res.json({
            success: true,
            message: 'Emails sent successfully',
            bookingRef: bookingRef
        });

    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

// Health check route
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Server error',
        error: err.message
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
