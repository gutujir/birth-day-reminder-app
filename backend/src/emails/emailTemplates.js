export const birthdayWishesTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Happy Birthday!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
	<div style="min-height: 100vh; padding: 40px 20px; display: flex; align-items: center; justify-content: center;">
		<div style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
			<!-- Header with gradient -->
			<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
				<div style="font-size: 60px; margin-bottom: 10px;">🎉🎂🎈</div>
				<h1 style="color: #ffffff; margin: 0; font-size: 36px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
					Happy Birthday${name ? "," : "!"}
				</h1>
				${
          name
            ? `<p style="color: #ffffff; font-size: 28px; margin: 10px 0 0; font-weight: 600;">${name}!</p>`
            : ""
        }
			</div>
			
			<!-- Content -->
			<div style="padding: 40px 30px;">
				<div style="text-align: center; margin-bottom: 30px;">
					<div style="font-size: 48px; margin-bottom: 20px;">🎊✨🎁</div>
					<p style="color: #1a202c; font-size: 18px; line-height: 1.8; margin: 0 0 20px;">
						Wishing you a wonderful day filled with <strong>joy</strong>, <strong>laughter</strong>, and everything you love most!
					</p>
					<p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0;">
						May this special day bring you happiness and may the year ahead be filled with amazing moments, new adventures, and countless reasons to smile.
					</p>
				</div>
				
				<!-- Decorative section -->
				<div style="background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%); border-radius: 15px; padding: 25px; margin: 30px 0; text-align: center;">
					<p style="color: #2d3436; font-size: 16px; line-height: 1.6; margin: 0; font-weight: 600;">
						🌟 Thank you for being part of our community! 🌟
					</p>
					<p style="color: #636e72; font-size: 14px; margin: 10px 0 0;">
						We're grateful to have you with us!
					</p>
				</div>
				
				<!-- Closing -->
				<div style="text-align: center; margin-top: 30px;">
					<p style="color: #6366f1; font-size: 20px; font-weight: 700; margin: 0;">
						Cheers to you! 🥳
					</p>
					<div style="margin-top: 20px; font-size: 32px;">
						🎈🎀🎉
					</div>
				</div>
			</div>
			
			<!-- Footer -->
			<div style="background: #f7fafc; padding: 20px 30px; text-align: center; border-top: 2px solid #e2e8f0;">
				<p style="color: #718096; font-size: 13px; margin: 0;">
					This birthday wish was sent to you because you signed up for birthday reminders.
				</p>
			</div>
		</div>
	</div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our App!</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Welcome to Our App!</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hi <span style="font-weight: bold;">{name}</span>,</p>
    <p>Your email has been successfully verified. We're excited to have you join our community!</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 40px; color: #4CAF50;">🎉</span>
    </div>
    <p>Get started by exploring your dashboard and making the most of our features.</p>
    <p>If you have any questions, feel free to reply to this email or contact our support team.</p>
    <p>Best regards,<br>TodoPro App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>TodoPro App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>TodoPro App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>Your password reset code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{resetCode}</span>
    </div>
    <p>Enter this code in the app to reset your password. This code will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>TodoPro App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
