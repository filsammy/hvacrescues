import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize if there's a key, else we'll mock success.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!resend) {
      // Mock successful email send for demonstration if no API key is set
      console.log('Mock email sent:', data);
      return NextResponse.json({ success: true, mocked: true });
    }

    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use a verified domain in production
      to: ['hvacrescues@gmail.com'],
      subject: `New Lead: ${data.pestTypes?.join(', ') || 'Service'} from ${data.name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>System Issue:</strong> ${data.pestTypes ? data.pestTypes.join(', ') : 'None selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
