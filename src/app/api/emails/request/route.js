import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    // Parse the request body to get form data
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      fullName,
      email,
      phone,
      message,
      service
    } = bodyJSON;


    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });


    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>', // Sender address
      to: "noreply@holaxgroup.com", // Change to your recipient's email
      subject: "New Request Form Submission",
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);

    // Uncomment and modify as necessary to send a confirmation email to the user

    const mailOptionsClient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>', // Sender address
      to: email, // Client's email
      subject:
        "We’ve Received Your Message – Thank You for Reaching Out to Holaxgroup!",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-family: Arial, sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://holaxgroup.com/images/email_header.png" alt="Holaxgroup Header" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${fullName},</h2>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                 We are pleased to confirm that we have received and accepted your order. At Holax Group, we are dedicated to providing exceptional service and delivering top-quality results tailored to your needs.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                  As agreed, we will soon send you the bank details necessary for payment. Once we receive the payment, we will promptly begin processing your order.
                </p>
                
                <ul style="text-align: left; font-size: 16px;">
                  <li>Description of Services: ${service}</li>
                </ul>

                <p style="text-align: left; font-size: 16px;color:#202020;">
                  To ensure timely processing of your order, please make the payment at your earliest convenience. If you have any questions or need further assistance, please feel free to contact us.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                 Thank you for choosing Holax Group. We look forward to serving you and exceeding your expectations!
                </p>
                <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br /> Holax Group Team</h2>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>
                <img style="width: 100%" src="https://holaxgroup.com/images/email_footer.png" alt="Holaxgroup Header" />
              </td>
          </tfoot>
        </table>
      `,
    };

    // Send confirmation email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
