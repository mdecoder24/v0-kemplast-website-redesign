import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await req.json();
        const { name, email, phone, position, portfolio, message } = body;

        const data = await resend.emails.send({
            from: "Kemplast Careers <onboarding@resend.dev>",
            to: ["sales@kemplast.in"],
            replyTo: email,
            subject: `New Job Application: ${name} - ${position}`,
            html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Portfolio/Resume:</strong> ${portfolio || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message || "No message provided."}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error sending application email:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 },
        );
    }
}
