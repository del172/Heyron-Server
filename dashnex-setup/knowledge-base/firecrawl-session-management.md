# Firecrawl Session Management - Complete Guide

> Scraped from Firecrawl docs - April 2026

## The Key Insight

**The problem:** Each scrape request creates a NEW browser session. If you make a new scrape request, you lose login state.

**The solution:** 
1. Scrape ONCE to get a `scrapeId`
2. Use that SAME `scrapeId` for ALL subsequent interact calls
3. NEVER make new scrape requests - just use interact to navigate

## How Interact Works

### Step 1: Scrape (Get scrapeId)

```bash
curl -s -X POST "https://api.firecrawl.dev/v2/scrape" \
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://dogtrainer.dashnexcloud.com/login", "formats": ["markdown"]}'
```

Response includes `scrapeId`:
```json
{
  "data": {
    "metadata": {
      "scrapeId": "019da33d-b6f4-74b5-adb5-312881f847d7"
    }
  }
}
```

### Step 2: Interact (Use SAME scrapeId)

```bash
# DON'T scrape again - use interact with the scrapeId!
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/019da33d-b6f4-74b5-adb5-312881f847d7/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Fill email derricktate28@gmail.com and click Next"}'
```

### Step 3: Continue Interacting

Every subsequent call uses the SAME scrapeId - state persists:

```bash
# Step 2b: Enter password (SAME scrapeId!)
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/019da33d-b6f4-74b5-adb5-312881f847d7/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Fill password eucFi*q7ba%grbE6 and click Sign in"}'

# Step 3: Navigate to pages (SAME scrapeId!)
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/019da33d-b6f4-74b5-adb5-312881f847d7/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Click on Website in the sidebar"}'
```

### Step 4: Stop Session When Done

```bash
curl -s -X DELETE "https://api.firecrawl.dev/v2/scrape/019da33d-b6f4-74b5-adb5-312881f847d7/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8"
```

## Persistent Profiles (Save State Across Sessions)

To preserve cookies/localStorage across DIFFERENT scrape sessions, use a profile:

```bash
curl -s -X POST "https://api.firecrawl.dev/v2/scrape" \
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://dogtrainer.dashnexcloud.com/login",
    "formats": ["markdown"],
    "profile": "dashnex-admin"
  }'
```

Then next time, use the same profile name:
```bash
curl -s -X POST "https://api.firecrawl.dev/v2/scrape" \
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://dogtrainer.dashnexcloud.com/admin",
    "formats": ["markdown"],
    "profile": "dashnex-admin"
  }'
```

## Key Rules

1. **Never make a new scrape request after login** - just use interact with the same scrapeId
2. **Keep prompts small and focused** - one action per prompt
3. **Use profile parameter** to persist across different sessions
4. **Stop session when done** - avoids credit charges
5. **Sessions expire after 10 minutes** of total time or 5 minutes of inactivity

## Pricing

- Prompt-based interaction: 7 credits per session minute
- Code-based interaction: 2 credits per session minute
- Scrape: 1 credit per scrape

## Common Errors

- "Session not found" - The session expired or you used a wrong scrapeId
- "Cache hit" - Use unique URL parameter like `?t=123456` to bypass cache
- Login not persisting - You're making new scrape requests instead of using interact with the SAME scrapeId

## Example: Complete Dashnex Login Flow

```bash
# 1. Scrape login page (get scrapeId)
SCRAPE_ID=$(curl -s -X POST "https://api.firecrawl.dev/v2/scrape" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://dogtrainer.dashnexcloud.com/login", "formats": ["markdown"]}' \
  | jq -r '.data.metadata.scrapeId')

# 2. Enter email (same scrapeId)
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/$SCRAPE_ID/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Fill email derricktate28@gmail.com and click Next"}'

# 3. Enter password (same scrapeId)
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/$SCRAPE_ID/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Fill password eucFi*q7ba%grbE6 and click Sign in"}'

# 4. Navigate to pages (same scrapeId!)
curl -s -X POST "https://api.firecrawl.dev/v2/scrape/$SCRAPE_ID/interact" \
  -H "Authorization: Bearer fc-f8021a0e96034206b644a8343259d4c8" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Click on Website in the sidebar"}'
```