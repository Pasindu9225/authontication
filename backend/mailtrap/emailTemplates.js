export const VERIFICATION_EMAIL_TEMPLATE = `
  <html>
    <head>
      <style>
        .email-container {
          font-family: Arial, sans-serif;
          color: #333;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 10px;
          text-align: center;
        }
        .email-header {
          background-color: #007bff;
          color: white;
          padding: 10px;
          font-size: 24px;
          border-radius: 10px 10px 0 0;
        }
        .email-body {
          margin: 20px 0;
          font-size: 18px;
        }
        .verification-code {
          font-weight: bold;
          font-size: 24px;
          color: #007bff;
        }
        .email-footer {
          font-size: 14px;
          color: #666;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          Email Verification
        </div>
        <div class="email-body">
          <p>Thank you for registering!</p>
          <p>Please use the following code to verify your email address:</p>
          <p class="verification-code">{{verificationCode}}</p>
        </div>
        <div class="email-footer">
          <p>If you did not request this, please ignore this email.</p>
        </div>
      </div>
    </body>
  </html>
`;
