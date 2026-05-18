#!/usr/bin/env bash
# set-domain.sh — replace https://example.com with your real domain
# Usage: ./set-domain.sh https://searchfit-pro.pages.dev

set -e
NEW="${1:-}"
if [ -z "$NEW" ]; then
  echo "Usage: $0 https://your-domain.com"
  exit 1
fi
# strip trailing slash
NEW="${NEW%/}"

cd "$(dirname "$0")"

# Files that may contain the placeholder
FILES=$(grep -l "https://example.com" *.html *.xml *.txt *.json 2>/dev/null || true)
if [ -z "$FILES" ]; then
  echo "Nothing to replace — example.com not found."
  exit 0
fi

echo "Replacing https://example.com → $NEW in:"
for f in $FILES; do
  echo "  - $f"
  # macOS sed needs '' after -i; Linux sed doesn't. Use a portable approach:
  if sed --version >/dev/null 2>&1; then
    sed -i "s|https://example.com|$NEW|g" "$f"
  else
    sed -i '' "s|https://example.com|$NEW|g" "$f"
  fi
done
echo "✓ Done. Commit and push:"
echo "  git add . && git commit -m 'Set production domain' && git push"
