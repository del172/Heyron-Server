#!/bin/bash
# Workspace backup script
# Auto-backed up to GitHub

cd /root/.openclaw/workspace

# Add all changes
git add -A

# Commit with timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M UTC")
git commit -m "Auto-backup: $TIMESTAMP"

# Push to GitHub
git push

echo "Backup completed at: $TIMESTAMP"
