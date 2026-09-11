#!/bin/bash
mkdir -p "$CLAUDE_PLUGIN_ROOT/logs"
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
input=$(cat)
echo "---- $timestamp ----" >> "$CLAUDE_PLUGIN_ROOT/logs/meeting-notes-archive.log"
echo "$input" >> "$CLAUDE_PLUGIN_ROOT/logs/meeting-notes-archive.log"
