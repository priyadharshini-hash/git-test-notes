#!/bin/bash
input=$(cat)
prompt=$(echo "$input" | grep -o '"prompt":"[^"]*"' | sed 's/"prompt":"//;s/"$//')

if echo "$prompt" | grep -qiE "action item|meeting notes|huddle|attendees|log this meeting"; then
  mkdir -p "$CLAUDE_PLUGIN_ROOT/logs"
  timestamp=$(date "+%Y-%m-%d %H:%M:%S")
  echo "---- $timestamp ----" >> "$CLAUDE_PLUGIN_ROOT/logs/meeting-notes-archive.log"
  echo "$prompt" >> "$CLAUDE_PLUGIN_ROOT/logs/meeting-notes-archive.log"
fi
