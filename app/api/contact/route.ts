import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, phoneNumber, email, message, selectedCountry } = body;

        // More robust SMTP configuration for Gmail
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Helps with local certificate issues
            }
        });

        const subject = `Inquiry from ${firstName} ${lastName} - Dilshaj Infotech`;
        const emailBody = `
            <h2>New Inquiry received</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${selectedCountry.dialCode} ${phoneNumber}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // Send email to company
        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: "dilshajinfotech.it@gmail.com",
            subject: subject,
            html: emailBody,
        });

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("SMTP Error:", error);
        return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }
}
