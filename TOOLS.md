# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

## Website Building (Rank & Rent)

### Stack
- **Hosting**: Vercel (vercel.com)
- **Source**: GitHub repositories
- **CLI**: vercel CLI, gh (GitHub CLI) installed
- **Skill**: website-builder

### Setup Needed from User
1. **GitHub Personal Access Token** - With repo permissions
2. **Vercel Account** - Connected to GitHub
3. **Vercel Token** - For CLI deployments (or use `vercel link`)

### Workflow
1. I generate website code (HTML/CSS/JS)
2. Push to GitHub repo
3. Vercel auto-deploys from GitHub
4. SEO work begins to rank the site
5. Rent to local business

### Environment Variables
Set these for full automation:
- `GITHUB_TOKEN` - GitHub PAT
- `VERCEL_TOKEN` - Vercel API token

---

Add whatever helps you do your job. This is your cheat sheet.

## Related

- [Agent workspace](/concepts/agent-workspace)
