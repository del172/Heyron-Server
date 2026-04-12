# OpenClaw Capabilities Setup for Del
Created: 12 April 2026

## Current Status

### ✅ What Already Works

1. **Text-to-Speech (TTS)**
   - I can read any text to you out loud
   - Just ask: "Leo, read this to me" or "Leo, read out [text]"
   - Works on Telegram, WhatsApp as voice messages
   - In webchat, I send audio file you can play

2. **Reading Images**
   - I CAN read images once I have access to them
   - The `read` tool supports: jpg, png, gif, webp
   - Need to get the image first

3. **YouTube Videos**
   - I can fetch transcripts and content from YouTube URLs
   - Can take screenshots of videos via browser tool
   - Ask me to "watch this YouTube video" and give me the URL

### ❌ What's Missing (Webchat)

**File Upload to Webchat**
- Currently NOT supported in webchat UI
- This is a known feature request (#58)
- Every other channel (Telegram, Discord, WhatsApp) supports it
- Backend already supports it, waiting on UI

## Options to Enable File/Image Upload

### Option 1: Use Telegram (RECOMMENDED)
- Supports image/file uploads (up to 50MB)
- Supports TTS as voice messages
- How to connect: https://connect.c1.heyron.ai

### Option 2: Use Discord
- Supports image/file uploads (up to 25MB)
- Rich media support
- How to connect: https://connect.c1.heyron.ai

### Option 3: Use WhatsApp
- Supports image uploads (~16MB)
- TTS becomes voice messages
- How to connect: https://connect.c1.heyron.ai

### Option 4: Wait for Webchat Update
- File upload feature is being developed
- No ETA yet

### Option 5: Host Files Elsewhere
- Upload to Google Drive, Imgur, etc.
- Give me the URL/link
- I can fetch and process from there

## What I Can Do Now

1. **Read text to you** → Use `tts` tool
2. **Process images from URLs** → Give me a link
3. **Get YouTube content** → Give me a URL
4. **Take browser screenshots** → I can navigate and capture

## Action Items for Del

1. Choose a channel to connect (Telegram/Discord/WhatsApp) for full capabilities
2. Or continue using webchat and host files somewhere, share links
3. Let me know which you prefer and I'll guide you through setup
