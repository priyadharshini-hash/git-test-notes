---
name: check-releases
description: Checks the Notion release management database for tickets missing QA sign-off or release date fields, then posts a reminder to the #automation Slack channel tagging each assigned developer.
---

# Release Ticket Checker

## What this does
1. Query the Notion "Release Management" database for all tickets.
2. Flag any ticket where either:
   - QA sign-off is missing, or
   - The Expected Release Date / Updated Expected Release Date is missing
3. For each flagged ticket, note the assigned developer.

## Output
Post a single reminder message to the **#automation** Slack channel (not a direct message). The message should:
- List each flagged ticket by name/link
- Tag the assigned developer for that ticket using `<@USER_ID>`
- Group all tickets into one message rather than sending one per ticket

## Format
Follow the team's existing reminder format and tone used in prior release reminders.
