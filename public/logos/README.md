# App Logos

This directory contains logos for all Ascella Studios apps displayed on the Apps page.

## File Naming Convention

Name your logo files using the app ID (lowercase, no spaces):
- `ghostlyclips.png` - Logo for GhostlyClips
- `yourappname.png` - Logo for Your App Name

## Image Specifications

- **Format**: PNG with transparency (preferred) or JPG
- **Dimensions**: 512x512px (minimum) - square format
- **File size**: Keep under 500KB for optimal loading
- **Style**: Should match your app's branding

## Adding a New App Logo

1. Export your app logo at 512x512px or larger (square format)
2. Save it in this directory as `[app-id].png` or `[app-id].jpg`
3. Update the app entry in `/src/app/apps/page.tsx` to include:
   ```typescript
   {
     id: 'yourappid',
     name: 'Your App Name',
     logo: '/logos/yourappid.png',
     // ... other fields
   }
   ```

## Current Apps

- **GhostlyClips** (`ghostlyclips.png`) - In Development
  - Status: Awaiting final logo design

## Tips

- Use transparent backgrounds for PNG files
- Ensure logos are clearly visible on both light and dark backgrounds
- Test your logo at different sizes (16px, 32px, 64px, 128px)
- Consider providing both light and dark variants if needed
