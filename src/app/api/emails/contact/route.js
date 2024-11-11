import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    console.log("Request body received:", bodyJSON);

    const {
      yourName,
      email,
      phone,
      projectName,
      businessName,
      projectDescription,
      goals,
      contactPreference,
      bestTimeToReach,
      timeline,
      budget,
      additionalDetails,
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>',
      to: "noreply@holaxgroup.com",
      subject: "Contacts form",
      text: `
        Name: ${yourName}
        Email: ${email}
        Phone: ${phone}
        Project Name: ${projectName}
        Business Name: ${businessName}
        Project Description: ${projectDescription}
        Goals: ${businessName}
        Contact Preference: ${contactPreference.join(", ")}
        Best Time to Reach: ${bestTimeToReach}
        Timeline: ${timeline}
        Budget: ${budget}
        Additional Details: ${additionalDetails}
      `,
    };

    const mailOptionsClient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>',
      to: email,
      subject: "Thank You for Contacting Holaxgroup",
      html: `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
    <thead>
        <tr>
            <th style="background-image: url('https://holaxgroup.com/images/letter-top.png'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                <p style="font-size: 16px; line-height: 19px;">We appreciate you reaching out to Holax Group for your consulting needs! Your request has been received, and we are looking forward to assisting you. Our team will review your information and contact you soon to discuss the details.</p>
                <p style="font-size: 16px; line-height: 19px;">In the meantime, if you have any further details or specific preferences to share, please do not hesitate to let us know.</p>
                <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Holax Group. We are dedicated to providing outstanding results tailored to your requirements.</p>
                <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                    Best regards,
                    <br>
                    The Holax Group Team
                </p>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="background-color: #333333; font-weight: 600; font-family: Roboto, sans-serif;padding: 30px 0;">
                <a href="https://holaxgroup.com/"><img src="https://holaxgroup.com/images/letter-bottom.png" alt="Holaxgroup"></a>
            </td>
        </tr>
    </tfoot>
</table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}