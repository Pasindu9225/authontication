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

export const WELCOME_EMAIL_TEMPLATE = `
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
          Welcome to Our Platform!
        </div>
        <div class="email-body">
          <p>Hi {{name}},</p>
          <p>Thank you for joining us!</p>
          <p>We are excited to have you on board. Explore our features and let us know if you have any questions.</p>
        </div>
        <div class="email-footer">
          <p>If you have any issues, feel free to reach out to our support team.</p>
        </div>
      </div>
    </body>
  </html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
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
        .reset-link {
          font-weight: bold;
          font-size: 18px;
          color: #007bff;
          text-decoration: none;
        }
        .reset-link:hover {
          text-decoration: underline;
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
          Reset Your Password
        </div>
        <div class="email-body">
          <p>Hello,</p>
          <p>It looks like you requested a password reset. Please click the link below to reset your password:</p>
          <p><a href="{resetURL}" class="reset-link">Reset Password</a></p>
          <p>If you did not request this, please ignore this email.</p>
        </div>
        <div class="email-footer">
          <p>If you have any issues, feel free to reach out to our support team.</p>
        </div>
      </div>
    </body>
  </html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
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
        .reset-link {
          font-weight: bold;
          font-size: 18px;
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
          Reset Your Password
        </div>
        <div class="email-body">
          <p>Hello,</p>
          <p>It looks like you successfully your password reset.</p>
        </div>
        <div class="email-footer">
          <p>If you have any issues, feel free to reach out to our support team.</p>
        </div>
      </div>
    </body>
  </html>
`;
