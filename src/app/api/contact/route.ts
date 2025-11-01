import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateContactTemplate } from "@/utils/emailTemplate";

console.log("SMTP_USER:", process.env);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    // --- Validation ---
    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!message.trim().length) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    const html = generateContactTemplate({ name, phone, email, message });

    // --- Email Transport ---
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "a475679b758e8b",
        pass: "283491e9e0dd20"
      }
    });

    // Optionally verify connection
    await transporter.verify();

    // --- Email Content ---
    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // destination email
      cc: `gokulan.dhatchinamoorthy@gmail.com`, // send copy to sender
      subject: `New Contact from ${name}`,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err: any) {
    console.error("Error sending contact email:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
