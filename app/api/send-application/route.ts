import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, position, portfolio, message } = body;

        // 1. Insert into Supabase
        const { error: dbError } = await supabase.from("job_applications").insert([
            {
                name,
                email,
                phone,
                position,
                portfolio_url: portfolio,
                message,
            },
        ]);

        if (dbError) {
            console.error("Supabase Database Error:", dbError);
            throw new Error(`Database save failed: ${dbError.message}`);
        }

        // 2. Send Email Notification
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Only send email if RESEND_API_KEY is present, otherwise just log (dev mode)
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
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
        } else {
            console.log("RESEND_API_KEY missing, skipping email send.");
        }

        return NextResponse.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error processing application:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 },
        );
    }
}
