import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot check — bots fill this hidden field, humans don't
    if (data.website) {
      // Return fake success so bots don't retry
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    if (!resend) {
      console.log('Mock email sent (no RESEND_API_KEY set):', data);
      return NextResponse.json({ success: true, mocked: true });
    }

    const systemIssues = data.pestTypes?.length
      ? data.pestTypes.join(', ')
      : 'Not specified';

    const { error } = await resend.emails.send({
      from: 'HVAC Rescue Website <onboarding@resend.dev>',
      to: ['hvacrescues@gmail.com'],
      replyTo: data.email || undefined,
      subject: `New Lead: ${systemIssues} — ${data.name}`,
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
                <td style="padding: 8px 0; color: #111827;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${data.phone}" style="color: #2563eb;">${data.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #111827;">${data.email ? `<a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>` : 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">System Issue(s)</td>
                <td style="padding: 8px 0; color: #111827;">${systemIssues}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111827;">${data.message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

