#!/usr/bin/env node

/**
 * Development Server with Token Watcher
 *
 * Runs both the token watcher and Next.js dev server
 */

const { spawn } = require("child_process");
const path = require("path");

const watchScript = path.join(__dirname, "watch-tokens.js");
const nextDev = "next";

console.log("🚀 Starting development server with token watcher...\n");

// Start token watcher
const watcher = spawn("node", [watchScript], {
  stdio: "inherit",
  shell: true,
});

// Start Next.js dev server
const next = spawn("npx", [nextDev, "dev"], {
  stdio: "inherit",
  shell: true,
});

// Handle cleanup
function cleanup() {
  console.log("\n👋 Shutting down...");
  watcher.kill();
  next.kill();
  process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

// Handle process exits
watcher.on("exit", (code) => {
  if (code !== 0 && code !== null) {
    console.error("Token watcher exited with error");
  }
});

next.on("exit", (code) => {
  if (code !== 0 && code !== null) {
    console.error("Next.js dev server exited with error");
  }
  cleanup();
});
