# AWS SES Migration & Cloudflare Email Cleanup

## Overview
Transitioning from Cloudflare Email Routing to AWS SES for the inquiry form, and removing all Cloudflare email-related code and configuration.

## Current Cloudflare Implementation
- **Pages Function**: `functions/api/inquiry.ts` - receives form submissions and calls Cloudflare worker
- **Email Worker**: `workers/email-forwarder.js` - sends emails via Cloudflare Email API
- **Worker Config**: `workers/wrangler.toml` - worker configuration with SEND_EMAIL binding
- **Deployment Docs**: `DEPLOYMENT.md` - Cloudflare-specific setup instructions
- **Old Worker**: `email-worker.js` - SendGrid-based worker (not currently used)

## Migration Plan

### Phase 1: Remove Cloudflare Files
- [ ] Delete `workers/email-forwarder.js`
- [ ] Delete `workers/wrangler.toml`
- [ ] Delete `email-worker.js`
- [ ] Delete `DEPLOYMENT.md`
- [ ] Clean up root `wrangler.toml` (currently minimal/empty)

### Phase 2: Implement AWS SES
- [ ] Update `functions/api/inquiry.ts` to use AWS SES SDK
- [ ] Add AWS SDK dependencies (`@aws-sdk/client-ses`)
- [ ] Configure environment variables for AWS credentials
- [ ] Use AWS SES to send emails directly from the Pages Function

### Phase 3: Configuration & Documentation
- [ ] Document required environment variables:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION` (e.g., us-east-1)
  - `CONTACT_EMAIL` (recipient)
  - `FROM_EMAIL` (verified SES sender)
- [ ] Create deployment notes for AWS SES setup

### Phase 4: Testing
- [x] Ready for deployment and testing

## Review - Completed Changes

### Files Deleted
- ✅ `workers/email-forwarder.js` - Cloudflare Email Worker
- ✅ `workers/wrangler.toml` - Worker configuration
- ✅ `email-worker.js` - Old SendGrid worker
- ✅ `DEPLOYMENT.md` - Cloudflare deployment docs
- ✅ `workers/` directory removed

### Files Modified
- ✅ [functions/api/inquiry.ts](../functions/api/inquiry.ts)
  - Removed Cloudflare worker fetch call
  - Added AWS SES SDK import and integration
  - Now sends emails directly via SES
  - Uses environment variables for AWS credentials

### Files Created
- ✅ [AWS-SES-SETUP.md](../AWS-SES-SETUP.md) - Complete setup guide

### Dependencies Added
- ✅ `@aws-sdk/client-ses` - AWS SES SDK (79 packages installed)

## Technical Approach

**AWS SES Integration:**
- Uses `@aws-sdk/client-ses` package
- Sends emails directly from Pages Function (no separate worker needed)
- Requires AWS credentials as environment variables in Cloudflare Pages
- From address must be verified in AWS SES

**Simplified Architecture:**
```
User fills form → Pages Function (/api/inquiry) → AWS SES → Recipient Email
```

## Next Steps for User

1. **Set up AWS SES** (see [AWS-SES-SETUP.md](../AWS-SES-SETUP.md)):
   - Verify sender email in AWS SES Console
   - Create IAM user with SES permissions
   - Get AWS access key ID and secret access key

2. **Configure Cloudflare Pages environment variables**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION` (e.g., `us-east-1`)
   - `CONTACT_EMAIL` (where inquiries go)
   - `FROM_EMAIL` (verified sender)

3. **Deploy and test**:
   - Push changes to GitHub
   - Cloudflare Pages will auto-deploy
   - Test the inquiry form
   - Check email delivery

## Notes
- Much simpler than Cloudflare approach (no separate worker needed)
- AWS SES free tier: 62,000 emails/month (from EC2) or $0.10/1000 emails
- Need to verify sender email in AWS SES console first
- SES Sandbox mode requires recipient verification OR production access request
- All Cloudflare email code has been removed
