#!/bin/bash
# Push SearchFit Pro to https://github.com/Stampola/SEO-web.git
# Run this from your Mac terminal — NOT from inside Cowork (network is sandboxed there).
set -e

cd "$(dirname "$0")"

# 1. Clean up the half-initialized .git from the Cowork attempt
if [ -f .git/index.lock ]; then
  echo "→ Removing stuck index.lock from previous attempt..."
  rm -f .git/index.lock
fi

# 2. If no commits yet, do a fresh init
if [ ! -d .git ] || ! git rev-parse HEAD >/dev/null 2>&1; then
  echo "→ Initializing fresh git repo..."
  rm -rf .git
  git init -b main
  git config user.email "mediaclaude4u@gmail.com"
  git config user.name "Stamp"
fi

# 3. Stage + commit
git add .
git commit -m "Initial commit — SearchFit Pro SEO platform" || echo "(nothing new to commit)"

# 4. Push (you'll be prompted for username + password)
#    Username: Stampola
#    Password: paste your Personal Access Token
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/Stampola/SEO-web.git
git push -u origin main

echo ""
echo "✓ Done. Open: https://github.com/Stampola/SEO-web"
