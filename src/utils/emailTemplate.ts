// utils/emailTemplate.ts
export function generateContactTemplate({
    name,
    phone,
    email,
    message,
}: {
    name: string;
    phone: string;
    email: string;
    message: string;
}) {
    return `
  <div style="font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:20px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color:#2b6cb0;">New Contact Form Message</h2>
      <p>You received a new message from the website contact form:</p>

      <table style="width:100%; border-collapse:collapse; margin-top:10px;">
        <tr><td style="padding:8px; font-weight:bold;">Name:</td><td>${name}</td></tr>
        <tr><td style="padding:8px; font-weight:bold;">Phone:</td><td>${phone}</td></tr>
        <tr><td style="padding:8px; font-weight:bold;">Email:</td><td>${email}</td></tr>
        <tr><td style="padding:8px; font-weight:bold;">Message:</td><td>${message}</td></tr>
      </table>

      <hr style="margin:20px 0;"/>
      <p style="font-size:12px; color:#888;">This email was automatically generated from FernKris website's contact form.</p>
    </div>
  </div>`;
}
