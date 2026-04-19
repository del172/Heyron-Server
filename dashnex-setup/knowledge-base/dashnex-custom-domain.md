# DashNex Custom Domain Setup Guide

> Scraped from DashNex Support - April 2026

## Overview

To unlock full website features (Website Builder, Funnels, Pages, Offers), you need to connect a **custom domain** to your DashNex business. The free `.dashnexcloud.com` subdomain has limited features.

## Prerequisites

1. **Purchase a custom domain** from a 3rd party provider:
   - GoDaddy: https://www.godaddy.com/
   - Namecheap: https://www.namecheap.com/

2. **Create a CloudFlare account** (recommended):
   - https://dash.cloudflare.com/login

**Why CloudFlare?**
- SSL (essential for secure websites)
- MX records (needed for custom domains)

## Step-by-Step Process

### STEP 1: Access Domains Menu
From your DashNex home dashboard, click on **Domains** at the top of the page.

### STEP 2: Integrate with CloudFlare
Click the **Integrate with CloudFlare** button.

### STEP 3: Enter CloudFlare Credentials
- Enter the email address associated with your CloudFlare account
- Enter your Global API Key (found in CloudFlare: My Profile → API Tokens → Global API Key → View)

### STEP 4: Confirm Integration
Once you've entered the information, you will successfully integrate your CloudFlare account with DashNex.

### STEP 5: Add Domain
Click **Add domain** to start connecting your purchased domain.

### STEP 6: Enter Custom Domain
Enter your purchased custom domain (e.g., `yoursite.com`)

### STEP 7: Update Nameservers
You'll receive nameserver information to update in your domain registrar:
- Go to Domain Settings → Manage DNS → Change Nameservers
- Update with the provided nameservers

**Note:** Validation can take 24-48 hours.

### STEP 8: Wait for Validation
Once nameservers are validated, the status changes to "available" and the **'Assign Property'** button becomes active.

### STEP 9: Assign Property
Click **'Assign Property'** → Select your business (e.g., "Brain Training for Dogs") → Click **Confirm**

### STEP 10: Finalize
Click **Assign** to complete the connection.

## For Website Builder (ONE MORE STEP!)

After assigning the custom domain:

1. Go to your specific website → **Website Settings** → **Custom Domain** tab
2. Find the **Home Page** dropdown
3. Select the page you want as your home page

Now you won't be redirected to dashnex.com!

## Domain Management Actions

Once connected, you can:
- **Manage DNS records** (directly from DashNex)
- **Unassign** the custom domain
- **Re-verify** (if there's an error)
- **Delete** (remove completely)

## Support

If you have questions or issues:
- Email: support@dashnex.com
- Or use the chat icon in the bottom right corner

## Important Notes

- **1 license = 1 website**
- **1 website = 1 sub-domain** (you can add your custom domain as well)
- **No limit on pages** per website
- Custom domains enable full Website Builder features:
  - Landing Pages
  - Sales Pages
  - Funnels
  - Offers & Checkouts
  - Full page editing capabilities