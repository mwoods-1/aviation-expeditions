# AWS SES Setup Guide

This guide explains how to configure AWS Simple Email Service (SES) for the Aviation Expeditions inquiry form.

## Architecture

The inquiry form now uses AWS SES directly from the Cloudflare Pages Function:

```
User fills form → Pages Function (/api/inquiry) → AWS SES → Recipient Email
```

## Prerequisites

1. **AWS Account** - You need an active AWS account
2. **Verified Email Address** - The sender email must be verified in AWS SES
3. **AWS Credentials** - Access key ID and secret access key with SES permissions

## Step 1: Set Up AWS SES

### 1.1 Verify Your Email Address

1. Log in to the [AWS Console](https://console.aws.amazon.com)
2. Navigate to **Simple Email Service (SES)**
3. In the left sidebar, click **Verified identities**
4. Click **Create identity**
5. Choose **Email address**
6. Enter your email (e.g., `mark99woods@gmail.com`)
7. Click **Create identity**
8. Check your email and click the verification link

**Note:** In SES Sandbox mode (default), you can only send TO verified email addresses. To send to any email, you need to request production access.

### 1.2 Create IAM User for SES

1. Go to **IAM** in AWS Console
2. Click **Users** → **Create user**
3. Username: `aviation-expeditions-ses`
4. Click **Next**
5. Select **Attach policies directly**
6. Search for and select: `AmazonSESFullAccess` (or create a custom policy with just `ses:SendEmail` permission)
7. Click **Next** → **Create user**
8. Click on the user name
9. Go to **Security credentials** tab
10. Click **Create access key**
11. Choose **Application running outside AWS**
12. Click **Next** → **Create access key**
13. **SAVE THESE CREDENTIALS** (you won't see them again):
    - Access key ID
    - Secret access key

## Step 2: Configure Cloudflare Pages Environment Variables

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Select your **aviation-expeditions** project
4. Go to **Settings** → **Environment variables**
5. Add the following variables for **Production**:

| Variable Name | Value | Example |
|---------------|-------|---------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key ID | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret access key | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
| `AWS_REGION` | AWS region for SES | `us-east-1` |
| `CONTACT_EMAIL` | Recipient email (where inquiries go) | `mark99woods@gmail.com` |
| `FROM_EMAIL` | Sender email (must be verified in SES) | `mark99woods@gmail.com` |

6. Click **Save** for each variable
7. Click **Redeploy** to apply the new environment variables

## Step 3: Test the Form

1. Visit your production site: `https://aviation-expeditions.pages.dev/inquiry`
2. Fill out and submit the inquiry form
3. Check your email (including spam folder)
4. Check Cloudflare Pages logs for any errors

## Troubleshooting

### Email Not Sending

**Check Cloudflare Pages Logs:**
1. Cloudflare Dashboard → Workers & Pages → aviation-expeditions
2. Click **View logs** or **Functions logs**
3. Look for AWS SES errors

**Common Issues:**

1. **"Email address is not verified"**
   - Make sure the `FROM_EMAIL` address is verified in AWS SES
   - Go to SES Console → Verified identities

2. **"Invalid credentials"**
   - Verify `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are correct
   - Make sure the IAM user has SES permissions

3. **"MessageRejected: Email address is not verified"** (for recipient)
   - This happens in SES Sandbox mode
   - Either verify the recipient email OR request production access:
     - SES Console → Account dashboard → Request production access

4. **"InvalidParameterValue"**
   - Check that `AWS_REGION` is set correctly (e.g., `us-east-1`)
   - Make sure SES is available in that region

### Moving Out of SES Sandbox

To send emails to ANY email address (not just verified ones):

1. Go to SES Console → Account dashboard
2. Click **Request production access**
3. Fill out the form:
   - **Mail type:** Transactional
   - **Website URL:** aviation-expeditions.com
   - **Use case description:** "Sending inquiry form submissions from aviation tour booking website to business email"
   - **Compliance with AWS policies:** Confirm you comply
4. Submit the request
5. AWS typically approves within 24 hours

## Cost

**AWS SES Pricing:**
- First 62,000 emails/month (from EC2): **FREE**
- Otherwise: **$0.10 per 1,000 emails**

For a small inquiry form, costs will be minimal (likely $0/month).

## Security Notes

- Never commit AWS credentials to version control
- Use environment variables exclusively
- Rotate access keys periodically
- Use minimal IAM permissions (only `ses:SendEmail` if possible)

## Next Steps

Once verified and working:
1. Consider requesting SES production access
2. Monitor SES sending statistics in AWS Console
3. Set up bounce/complaint handling (optional)
4. Consider adding email templates with HTML formatting (optional)
