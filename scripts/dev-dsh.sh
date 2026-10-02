#!/usr/bin/env bash
# Run a throwaway DeepSeek Harness web profile with this plugin installed.
# State lives in ./.dev-dsh so nothing touches ~/.dsh or any other dsh install.
#
#   PORT=3180 scripts/dev-dsh.sh                                   # dsh from npm (DSH_VERSION)
#   DSH_CHECKOUT=~/deepseek-harness PORT=3080 scripts/dev-dsh.sh   # dsh from a source checkout
set -euo pipefail

DSH_VERSION="${DSH_VERSION:-0.2.0-rc.2}"
PORT="${PORT:-3180}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export DSH_HOME="$ROOT/.dev-dsh/home"
export DSH_TELEMETRY_DISABLED=1
if [[ -n "${DSH_CHECKOUT:-}" ]]; then
  # tsx resolves from the checkout, so run the CLI from inside it.
  dsh() { (cd "$DSH_CHECKOUT" && node --import tsx/esm apps/cli/src/bin.ts "$@"); }
else
  dsh() { npx --yes "@deepseek-ai/dsh@$DSH_VERSION" "$@"; }
fi

cd "$ROOT"
mkdir -p .dev-dsh
npm run build
TARBALL="$(npm pack --silent --ignore-scripts --pack-destination .dev-dsh)"
# `dsh plugin` forwards to pnpm; remove first so a rebuilt tarball with the same
# version is not served from pnpm's cache.
dsh plugin --profile web remove dsh-vietnam >/dev/null 2>&1 || true
dsh plugin --profile web add "$ROOT/.dev-dsh/$TARBALL"
dsh web --no-open --port "$PORT"
