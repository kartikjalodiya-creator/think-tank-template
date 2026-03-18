import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "jalodiyakartik@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({ name, email, phone, subject, message });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: true, message: "Saved but email not sent (no API key)" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subjectLine = subject
      ? `New Contact: ${subject} from ${name}`
      : `New Contact Form Submission from ${name}`;

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td><td style="padding: 8px; border: 1px solid #ddd;">${subject || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
      </table>
      <p style="color: #666; margin-top: 16px;">Sent from Kaivalya Library Contact Form</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kaivalya Library <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        subject: subjectLine,
        html: emailHtml,
      }),
    });

    const resendData = await resendRes.json();
    if (!resendRes.ok) {
      console.error("Resend error (notification):", resendData);
    } else {
      console.log("Notification email sent:", resendData);
    }

    // Send confirmation email to the submitter
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B6914;">Thank you for contacting Kaivalya Library, ${name}!</h2>
        <p>We've received your message and will get back to you shortly.</p>
        <div style="background: #f9f6f0; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <p style="margin: 4px 0;"><strong>Your message:</strong></p>
          <p style="margin: 4px 0; color: #555;">${message}</p>
        </div>
        <p>In the meantime, feel free to visit us at:</p>
        <p><strong>141, Bhopal Square, AB Road, Dewas, Madhya Pradesh, India</strong></p>
        <p style="color: #888; font-size: 12px; margin-top: 24px;">— The Kaivalya Library Team</p>
      </div>
    `;

    const confirmRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kaivalya Library <onboarding@resend.dev>",
        to: [email],
        subject: "We received your message — Kaivalya Library",
        html: confirmationHtml,
      }),
    });

    const confirmData = await confirmRes.json();
    if (!confirmRes.ok) {
      console.error("Resend error (confirmation):", confirmData);
    } else {
      console.log("Confirmation email sent:", confirmData);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted and emails sent" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});