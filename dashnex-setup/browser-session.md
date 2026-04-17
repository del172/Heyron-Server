# Firecrawl Browser Session

**Created:** 2026-04-17
**API Key:** fc-f8021a0e96034206b644a8343259d4c8

## Active Session
- **Session ID:** 019d9dac-df7a-7701-bd0e-736f5c5af6b9
- **CDP URL:** wss://browser.firecrawl.dev/cdp/c15308292c52d560?token=a18bb298dde502b59d616fab4421c3f6efe2b6f68b035d7085f74897e5536387
- **Live View:** https://liveview.firecrawl.dev/d3NzOi8vYnJvd3Nlci5maXJlY3Jhd2wuZGV2L3NjcmVlbmNhc3QvYzE1MzA4MjkyYzUyZDU2MD90b2tlbj01NmU4Yjk5Zjg3OGUzYzI1ZjQ2MzE4YWFkYWNhNGQ3MTNkMTczZTNhNTdiYTE0ODFlMDYyNzEyYmVkMmJmMjhh
- **Expires:** 2026-04-17T23:10:45.687Z

## Usage
- Node.js SDK with `FirecrawlApp`
- Can execute Playwright code
- Can use agent-browser CLI commands

## To Use
```javascript
const Firecrawl = require('firecrawl').default;
const fc = new Firecrawl({apiKey: 'fc-f8021a0e96034206b644a8343259d4c8'});
// Then use fc.browser() to create sessions
```