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
      html: `Верстка письма`,
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