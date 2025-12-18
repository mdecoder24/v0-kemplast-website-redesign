import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, product, subject, message } = body;

        const data = await resend.emails.send({
            from: 'Kemplast Website <onboarding@resend.dev>', // Change this to your verified domain later
            to: ['info@kemplast.in'], // Replace with the admin email where you want to receive quotes
            replyTo: email,
            subject: `New Quote Request: ${subject}`,
            html: `
        <h2>New Quote Request from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Products of Interest:</strong> ${product.join(', ') || 'None selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
