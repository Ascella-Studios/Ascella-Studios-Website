# App Logos

This directory holds logos for Ascella Studios apps. It is empty until the
first app ships — that's expected.

## File Naming Convention

Name logo files using the app ID (lowercase, no spaces):
- `yourappname.png` - Logo for Your App Name

## Image Specifications

- **Format**: PNG with transparency (preferred) or JPG
- **Dimensions**: 512x512px (minimum) - square format
- **File size**: Keep under 500KB for optimal loading
- **Style**: Should match the app's branding

## Adding a New App Logo

1. Export the app logo at 512x512px or larger (square format)
2. Save it in this directory as `[app-id].png` or `[app-id].jpg`
3. Reference it from the app's entry in `/src/data/apps.ts`:
   ```typescript
   {
     id: 'yourappid',
     name: 'Your App Name',
     logo: '/logos/yourappid.png',
     // ... other fields
   }
   ```

## Tips

- Use transparent backgrounds for PNG files
- Ensure logos are clearly visible on both light and dark backgrounds
- Test the logo at different sizes (16px, 32px, 64px, 128px)
- Consider providing both light and dark variants if needed
