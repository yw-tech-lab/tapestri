#!/usr/bin/env node

/**
 * Watch Design Tokens Script
 *
 * Watches design-tokens.json for changes and automatically
 * syncs to globals.css
 *
 * Run in a separate terminal: npm run dev:watch
 * Or use with dev server in package.json scripts
 */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const tokensPath = path.join(__dirname, "..", "design-tokens.json");
const syncScriptPath = path.join(__dirname, "sync-tokens.js");

let isSyncing = false;

function syncTokens() {
  if (isSyncing) return;
  isSyncing = true;

  console.log("🔄 design-tokens.json changed, syncing...");

  const syncProcess = spawn("node", [syncScriptPath], {
    stdio: "inherit",
    shell: true,
  });

  syncProcess.on("close", (code) => {
    isSyncing = false;
    if (code === 0) {
      console.log("✅ Sync complete!\n");
    } else {
      console.error("❌ Sync failed\n");
    }
  });
}

console.log("👀 Watching design-tokens.json for changes...");
console.log(`   File: ${tokensPath}`);
console.log("   Press Ctrl+C to stop\n");

// Run sync once on startup
syncTokens();

// Watch for changes using fs.watch (more efficient than watchFile)
const watcher = fs.watch(tokensPath, (eventType) => {
  if (eventType === "change") {
    // Small delay to ensure file write is complete
    setTimeout(syncTokens, 100);
  }
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Stopping token watcher...");
  watcher.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  watcher.close();
  process.exit(0);
});
