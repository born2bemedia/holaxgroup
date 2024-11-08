import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      firstName,
      lastName,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      zip,
      country,
      cart,
      totalAmount,
    } = bodyJSON;

    // Create HTML list of cart items
    const cartItemsHtml = cart
      .map(
        (item) => `
      <li>
         ${item.name} x ${item.quantity}: €${item.attributes.price}
      </li>
    `
      )
      .join("");

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

    const mailOptionsRecipient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>', // Sender address
      to: "noreply@holaxgroup.com", // Change to your recipient's email
      subject: "Order Form Submission",
      html: `
      <table style="border-collapse: collapse;font-style: sans-serif">
      <tbody>
        <tr>
          <td>
            <p style="text-align: left; font-size: 16px">
              Name: ${firstName} ${lastName}<br>
              Email: ${email}<br>
              Phone: ${phone}<br>
            </p>
            <p style="text-align: left; font-size: 16px;font-weight:600;">Order:</p>
            <ul style="text-align: left; font-size: 16px;">
              ${cartItemsHtml}
            </ul>
          <td>
        </tr>
      </tbody>
      </table>
      `,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Holaxgroup" <noreply@holaxgroup.com>', // Sender address
      to: email, // Client's email
      subject: "Holaxgroup: Order Confirmation from",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://holaxgroup.com/images/email_header.png" alt="Holaxgroup Header" />
              </td>
            </tr>
          </thead>
          <tbody style="background: #FFFFFF;">
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px">Dear ${firstName} ${lastName},</h2>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                 We are pleased to confirm that we have received and accepted your order. At Holax Group, we are dedicated to providing exceptional service and delivering top-quality results tailored to your needs.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                  As agreed, we will soon send you the bank details necessary for payment. Once we receive the payment, we will promptly begin processing your order.
                </p>
                <ul style="text-align: left; font-size: 16px;list-style-type: none;margin: 0;padding: 10px 20px;background-color: #F3F3F3;">
                 ${cartItemsHtml}
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

    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "Could not send message",
      error: error.message,
    });
  }
}
