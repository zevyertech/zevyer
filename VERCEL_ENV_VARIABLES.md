# Vercel Environment Variables

## Required Variables

These are the minimum variables needed for the site to work:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Replace `your-domain.vercel.app` with your actual Vercel deployment URL.

---

## Optional Variables (For Future Integrations)

### Email Service (Resend - Currently Integrated)

Email functionality is now integrated using Resend. Configure these variables:

```
# Resend (Currently Active)
RESEND_API_KEY=re_334hqrUf_MXM2LMLceb9QgYcMu982cLjL
RESEND_FROM_EMAIL=zevyertech@gmail.com
RESEND_TO_EMAIL=zevyertech@gmail.com
```

**Note**: The API routes will automatically send emails when these variables are set. If not configured, forms will still work but won't send emails.

**Alternative Email Services** (if you want to switch):
```
# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@zevyer.com
EMAIL_TO=hello@zevyer.com
```

### Database (PostgreSQL, MongoDB, etc.)

If you want to store form submissions:

```
# PostgreSQL (Supabase, Neon, etc.)
DATABASE_URL=postgresql://user:password@host:port/database

# OR MongoDB
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
```

### Analytics

```
# Google Tag Manager (Recommended - supports multiple tags)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# OR Google Analytics (GA4) - use if you don't have GTM
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Vercel Analytics (already included, no config needed)
```

**Note**: 
- If both `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_ID` are set, GTM will be used (GTM can include GA4)
- GTM is recommended as it allows you to manage multiple tags from Google Tag Manager dashboard
- Get your GTM ID from: https://tagmanager.google.com
- Get your GA4 ID from: https://analytics.google.com

### CRM Integration

```
# HubSpot
HUBSPOT_API_KEY=your_hubspot_api_key
HUBSPOT_PORTAL_ID=your_portal_id

# OR Salesforce
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
```

### Payment Processing (if needed)

**Note**: Stripe is NOT available in Pakistan. See `PAYMENT_GATEWAYS_PAKISTAN.md` for alternatives.

**Recommended for Pakistan:**
- **XPay by XStak** - Stripe-like API, best for e-commerce
- **JazzCash** - Widely used, good for local market
- **PayFast** - SBP approved, multiple payment methods
- **Easypaisa** - Large user base, mobile payments
- **Payoneer** - Best for international payments

See `PAYMENT_GATEWAYS_PAKISTAN.md` for detailed comparison and integration guides.

**Example for XPay (if implemented):**
```
XPAY_API_KEY=your_xpay_api_key
XPAY_MERCHANT_ID=your_merchant_id
NEXT_PUBLIC_XPAY_PUBLISHABLE_KEY=your_publishable_key
```

**Example for JazzCash (if implemented):**
```
JAZZCASH_MERCHANT_ID=your_merchant_id
JAZZCASH_PASSWORD=your_password
JAZZCASH_INTEGRITY_SALT=your_salt
```

### Calendar Integration (for booking)

```
# Google Calendar
GOOGLE_CALENDAR_CLIENT_ID=your_client_id
GOOGLE_CALENDAR_CLIENT_SECRET=your_client_secret
GOOGLE_CALENDAR_REFRESH_TOKEN=your_refresh_token
```

---

## How to Add Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add each variable:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_SITE_URL`)
   - **Value**: Variable value (e.g., `https://your-domain.vercel.app`)
   - **Environment**: Select where it applies (Production, Preview, Development)
5. Click **Save**
6. Redeploy your application

---

## Quick Setup for Basic Deployment

**Minimum required for deployment:**

```
NEXT_PUBLIC_SITE_URL=https://zevyer.vercel.app
```

(Replace with your actual Vercel URL after first deployment)

---

## Notes

- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Variables without `NEXT_PUBLIC_` are server-side only
- After adding variables, you need to redeploy for changes to take effect
- Vercel automatically provides some variables (like `VERCEL_URL`)

---

## Current Status

✅ **Site works without any environment variables** - All features function with defaults
✅ **NEXT_PUBLIC_SITE_URL** - Recommended for proper metadata and OpenGraph tags
⚠️ **Other variables** - Optional, for future integrations (email, database, CRM)
