import { MailtrapClient } from "mailtrap-client";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

// export const mailtrapClient = new MailtrapClient({
//   token: process.env.MAILTRAP_TOKEN,
// });

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "pasindu auth Test 2",
};
