import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "sheidabdulahad0@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Inclusive Market Limited <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side validation with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, subject, message } = validationResult.data;

    // Load IML Logo for email embedding
    let logoAttachment: { filename: string; content: Buffer; contentType: string; contentId: string } | null = null;
    try {
      const logoPath = path.join(process.cwd(), "public", "images", "IML-LOGO.png");
      if (fs.existsSync(logoPath)) {
        logoAttachment = {
          filename: "IML-LOGO.png",
          content: fs.readFileSync(logoPath),
          contentType: "image/png",
          contentId: "iml-logo",
        };
      }
    } catch (logoErr) {
      console.warn("[IML Contact Warning] Could not load logo for email attachment:", logoErr);
    }

    // Build professional formatted email HTML with IML logo in header
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #B03104; color: #ffffff; padding: 24px; text-align: left; }
            .content { padding: 28px 24px; }
            .badge { display: inline-block; padding: 4px 10px; background: #fef2f2; color: #B03104; border: 1px solid #fee2e2; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
            .field-group { margin-bottom: 18px; }
            .field-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 14px; font-weight: 500; color: #0f172a; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 20px; }
            .message-content { font-size: 14px; color: #334155; white-space: pre-wrap; word-break: break-word; line-height: 1.6; }
            .footer { padding: 20px 24px; background: #f1f5f9; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header with IML Logo Letterhead -->
            <div class="header">
              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                <tr>
                  <td style="width: 56px; vertical-align: middle;">
                    <div style="width: 48px; height: 48px; background: #ffffff; border-radius: 10px; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center;">
                      <img src="cid:iml-logo" alt="IML Logo" width="44" height="44" style="display: block; margin: 2px auto; width: 44px; height: 44px; object-fit: contain;" />
                    </div>
                  </td>
                  <td style="padding-left: 14px; vertical-align: middle;">
                    <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; line-height: 1.2;">Inclusive Market Limited</h1>
                    <p style="margin: 3px 0 0 0; font-size: 11px; opacity: 0.95; text-transform: uppercase; letter-spacing: 1px; color: #ffffff;">Corporate Inquiries & Communications</p>
                  </td>
                </tr>
              </table>
            </div>

            <div class="content">
              <span class="badge">New Corporate Enquiry</span>
              
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${fullName}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #B03104; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not specified"}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Company / Organization</div>
                <div class="field-value">${company || "Not specified"}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Enquiry Subject</div>
                <div class="field-value" style="font-weight: 700;">${subject}</div>
              </div>

              <div class="message-box">
                <div class="field-label">Project Brief / Message</div>
                <div class="message-content">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Sent securely via the official contact portal on <strong>inclusivemarket.com</strong></p>
              <p style="margin: 4px 0 0 0; font-size: 11px;">You can reply directly to this email to respond to ${fullName}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.warn("[IML Contact Warning] RESEND_API_KEY is not configured in .env. Logging payload locally.");
      console.log("[IML Mock Email Delivery]", { to: TO_EMAIL, from: email, subject, fullName });
      return NextResponse.json(
        {
          success: true,
          message: "Enquiry received in development mode. Please configure RESEND_API_KEY for live delivery.",
        },
        { status: 200 }
      );
    }

    // Send email using Resend with attached IML Logo
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[IML Enquiry] ${subject} - ${fullName}`,
      html: emailHtml,
      attachments: logoAttachment ? [logoAttachment] : undefined,
    });

    if (data.error) {
      console.error("[Resend Delivery Error]", data.error);
      return NextResponse.json(
        {
          success: false,
          message: data.error.message || "Failed to dispatch enquiry email via Resend.",
        },
        { status: 500 }
      );
    }

    console.log("[Resend Success] Email sent ID:", data.data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been successfully delivered to Inclusive Market Limited.",
        id: data.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Exception]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
