# WRAITH PROTOCOL: ASSASSIN GRID - PRD

## Overview
A 2D stealth action game. The player (a white dot) must navigate a grid, assassinating enemies (black dots). With each kill, a new power is unlocked. After a set number of kills or points, the player levels up. Bosses appear at intervals, triggering cinematic anime-style fights.

## Core Mechanics
- White dot = Player
- Black dots = Shadow enemies
- Bosses = Special enemies with animated encounters
- Movement: Grid-based
- Collision with an enemy = kill (or be killed if seen head-on)

## Power System
Each kill unlocks a power. Player can select 1 from 2 offered options (like a roguelike). Powers include:

1. **Silent Kill** - dash to and kill enemies without alerting others.
2. **Flow Like Water** - smooth chaining between multiple kills.
3. **Ghost Dive** - become fluid and pass through enemies for 1.5s.
4. **Raging Thunder Clap** - stuns all enemies for 2 seconds.
5. **Afterimage Slash** - leaves a clone that kills behind you.
6. **Phase Pulse** - blink to next nearest shadow.
7. **Shatter Void** - area blast on a 3-sec cooldown.

## Boss Battles
- Cinematic bounce-back when player and boss meet.
- Flash + slowdown effect on clash (anime-style)
- Bosses have **special flames** to visually indicate threat.
- Defeating a boss = major level-up + ultimate power unlock.

## Level-Up System
- Earn XP per kill
- Power unlock choices shown at milestone XP points
- UI should show level, XP bar, kill count, and powers collected

## UI Components (Must Match Figma)
- Top-left: Level, XP bar, Kills, Powers unlocked
- Bottom-left: Quick-select action bar
- Right-side: Power unlock popup after each kill
- Enemies and player visible on screen always
- Pause/Restart/Quit menu

## Animation Requirements (Use anime.js)
- Power popup slides in from right
- Power icon hover = scale + glow
- Kill = short screen shake or pulse
- Boss clash = flash + slow zoom out
