# OpenClaw Capabilities & Skills for Leo
Created: 13 April 2026
Last Updated: 13 April 2026

## Current Tools & Capabilities

### My Available Tools (Built-in)
| Tool | Description |
|------|-------------|
| read | Read file contents (text + images: jpg, png, gif, webp) |
| write | Create or overwrite files |
| edit | Make precise edits to files |
| exec | Run shell commands |
| process | Manage background exec sessions |
| web_search | Search the web (Brave API) |
| web_fetch | Fetch & extract readable content from URLs |
| browser | Control web browser |
| canvas | Present/eval/snapshot Canvas |
| nodes | Discover and control paired nodes |
| message | Send, delete, manage messages via channels |
| tts | Convert text to speech (audio playback) |
| sessions_list | List other sessions |
| sessions_ history | Fetch message history |
| sessions_send | Send message to another session |
| sessions_spawn | Spawn isolated sub-agent or ACP session |
| subagents | List, kill, steer sub-agents |
| session_ status | Show session status card |
| memory_ search | Search MEMORY.md + memory/*.md |
| memory_ get | Safe snippet read from memory files |

### Currently Available Skills
Located: `/usr/local/lib/node_modules/openclaw/skills/`

**Communication:**
- discord - Discord ops
- slack - Slack ops
- imsg - iMessage
- signal - Signal

**Data & Storage:**
- notion - Notion integration
- obsidian - Obsidian notes
- apple-notes - Apple Notes
- 1password - 1Password

**Media:**
- openai-image-gen - AI image generation
- openai-whisper - Voice transcription
- video-frames - Extract frames from video
- spotify-player - Spotify control

**Development:**
- github - GitHub operations
- coding-agent - Code execution
- gh-issues - GitHub issues
- trello - Trello

**Utilities:**
- weather - Get weather & forecasts
- healthcheck - Host security & hardening
- skill- creator - Create new skills
- canvas - Canvas control
- xurl - URL utilities

### Channels I Can Use
- WebChat (current)
- Discord
- Telegram
- WhatsApp
- Signal
- Slack
- iMessage
- And more via plugins

---

## How to Add New Skills

### What Are Skills?
Skills are modular packages that extend my capabilities. Each skill has:
```
skill-name/
├── SKILL.md (required) - Name, description, instructions
└── (optional)
    ├── scripts/ - Executable code
    ├── references/ - Documentation to load as needed
    └── assets/ - Files for output (templates, icons)
```

### Creating a New Skill
1. Run: `scripts/init_skill.py <skill-name> --path skills/`
2. Edit SKILL.md with name, description, instructions
3. Add scripts/references/assets as needed
4. Package: `scripts/package_skill.py <path>`

### Finding More Skills
- ClawHub: https://clawhub.com (skill marketplace)
- Community skills in OpenClaw GitHub

---

## OpenClaw Documentation Summary

**What is OpenClaw?**
- Self-hosted gateway connecting chat apps to AI agents
- Runs on YOUR hardware, YOUR rules
- Multi-channel: Discord, Telegram, WhatsApp, Signal, Slack, etc.
- Agent-native: tool use, sessions, memory, multi-agent routing

**Key Capabilities:**
- Multi-channel gateway
- Plugin channels (Matrix, Nostr, Twitch, Zalo)
- Multi-agent routing
- Media support (images, audio, documents)
- Web Control UI
- Mobile nodes (iOS/Android)

**Installation:**
```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
openclaw dashboard
```

---

## RSS / Update Monitoring

### Option 1: GitHub Releases (Recommended)
Watch OpenClaw GitHub for releases:
- URL: https://github.com/openclaw/openclaw/releases.atom
- Can set up webhook or polling

### Option 2: Docs RSS
- Main docs: https://docs.openclaw.ai/llms.txt (index)
- Check for updates periodically

### Option 3: ClawHub
- Skill marketplace: https://clawhub.com
- Check for new skills regularly

---

## Action Items for Del

1. **To enable file upload**: Connect Telegram/Discord/WhatsApp
2. **To enable voice**: Use channel with TTS (all voice channels)
3. **To watch videos**: Give me YouTube URLs - I can fetch transcripts
4. **To add skills**: Ask me to create one, or browse ClawHub

---

## Notes
- TTS works: I can read text to you
- Images: Can read if I have URL or file path (NOTE: Bug - sometimes holds onto previous image, need to test fresh)
- YouTube: Can fetch transcript content
- Browser: Can navigate and take screenshots
- File upload: Needs different channel (Telegram/Discord)

## Known Issues
- **Image context bug**: When multiple images sent in sequence, may reference first image instead of latest. Needs investigation.
