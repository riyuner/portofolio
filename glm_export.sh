#!/bin/bash
# GLM-4.6 Environment Configuration for Claude Code
# Usage: source glm_export.sh  (or: . glm_export.sh)

export ANTHROPIC_BASE_URL=https://api.z.ai/api/anthropic
export ANTHROPIC_AUTH_TOKEN=918cce6f55074c59b22098db34149036.mNZIJfdnXOoer5yp
export ANTHROPIC_MODEL=GLM-4.6
export ANTHROPIC_SMALL_FAST_MODEL=GLM-4.6

echo "✓ Claude Code environment configured for GLM-4.6"
echo "  Base URL: $ANTHROPIC_BASE_URL"
echo "  Model: $ANTHROPIC_MODEL"
