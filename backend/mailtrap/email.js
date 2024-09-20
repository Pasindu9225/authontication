import { MailtrapClient } from "mailtrap";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
} from "./emailTemplates.js";
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

// Function to send verification email
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [{ email }];

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
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

// Function to send welcome email
export const sendWelcomeEmail = async (email, name) => {
  const recipients = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to Our Platform",
      text: `Welcome, ${name}! Thank you for joining us.`,
      html: WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name),
      category: "welcome email",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipients = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "reset password",
    });
  } catch (error) {
    console.error("Error sending reset password email:", error);
    throw new Error(`Error sending reset password email: ${error}`);
  }
};
