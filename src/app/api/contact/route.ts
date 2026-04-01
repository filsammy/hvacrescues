import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Escape HTML entities to prevent XSS in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Sanitize and trim a string input
function sanitize(input: unknown, maxLength = 500): string {
  if (typeof input !== 'string') return '';
  return escapeHtml(input.trim().slice(0, maxLength));
}

// Allowed system issue values (whitelist)
const ALLOWED_PEST_TYPES = new Set([
  'General HVAC Repair',
  'AC Repair / Install',
  'Furnace / Heating',
  'Maintenance',
  'Ductwork',
  'Air Quality',
  'Emergency Support',
  'Other',
]);

// Simple email format check
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple phone format check (digits, dashes, parens, spaces, plus)
function isValidPhone(phone: string): boolean {
  return /^[0-9()+\-\s.]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot check — bots fill this hidden field, humans don't
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    // Sanitize all inputs
    const name = sanitize(data.name, 100);
    const phone = sanitize(data.phone, 20);
    const email = sanitize(data.email, 254);
    const message = sanitize(data.message, 2000);

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    // Validate phone format
    if (!isValidPhone(data.phone)) {
      return NextResponse.json({ error: 'Invalid phone number format.' }, { status: 400 });
    }

    // Validate email if provided
    if (data.email && !isValidEmail(data.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Whitelist pest types — only allow known values
    const pestTypes: string[] = Array.isArray(data.pestTypes)
      ? data.pestTypes.filter((t: unknown) => typeof t === 'string' && ALLOWED_PEST_TYPES.has(t))
      : [];

    const systemIssues = pestTypes.length > 0
      ? pestTypes.map(escapeHtml).join(', ')
      : 'Not specified';

    if (!resend) {
      console.log('Mock email sent (no RESEND_API_KEY set):', { name, phone, email, pestTypes, message });
      return NextResponse.json({ success: true, mocked: true });
    }

    // NOTE: Until hvacrescuellc.com is verified in the Resend dashboard,
    // the 'from' must use 'onboarding@resend.dev' AND 'to' must be the
    // email address tied to your Resend account (not an arbitrary Gmail).
    // Once the domain is verified, change 'from' to e.g. noreply@hvacrescuellc.com
    const { data: sendData, error } = await resend.emails.send({
      from: 'HVAC Rescue Website <onboarding@resend.dev>',
      to: ['hvacrescues@gmail.com'],
      replyTo: (data.email && isValidEmail(data.email)) ? data.email : undefined,
      subject: `New Lead: ${systemIssues} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; padding: 20px 30px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">New Service Request</h2>
            <p style="color: #93c5fd; margin: 4px 0 0;">from hvacrescuellc.com</p>
          </div>
          <div style="background: #f9fafb; padding: 24px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 130px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #111827;">${email || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">System Issue(s)</td>
                <td style="padding: 8px 0; color: #111827;">${systemIssues}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111827;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      // Log full Resend error to the server terminal for easier debugging
      console.error('[Resend Error]', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('[Resend] Email sent successfully. ID:', sendData?.id);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
