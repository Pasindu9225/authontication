// import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
// import { client, sender } from "./mailtrap.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
//   const recipient = [{ email }];

//   try {
//     const response = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Email verification",
//       html: VERIFICATION_EMAIL_TEMPLATE.replace(
//         "{verificationCode}",
//         verificationToken
//       ),
//       category: "Email verification",
//     });

//     console.log("Email sent successfully", response);
//   } catch (error) {
//     console.log(`Error sending verification email1`, error);
//     throw new Error(`Error sending verification email: ${error}`);
//   }
// };

import { MailtrapClient } from "mailtrap";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "pasindu auth Test 2",
};

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [
    {
      email: email,
    },
  ];

  try {
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: "Email verification",
      text: "Please verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification email:`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};
