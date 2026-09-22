# Puisetso Maluke: portfolio (React Native + Expo)

One codebase for iOS, Android and the web. Visitors can switch between two views,
**Software engineer** and **Systems support**, and the projects, experience and skills
change with it, along with the accent colour.

## Run it

```bash
npm install
npx expo install --fix     # aligns package versions with your Expo SDK
npx expo start             # press a / i / w, or scan the QR code with Expo Go
```

## Make it yours (everything is in `src/data.js`)

Fill in the items marked `TODO`:

- `contact.email`, `contact.linkedin`, `contact.whatsapp`: buttons appear once set
- `contact.cvUrl`: adds a "Download CV" button in the hero
- Start year on the Systems Support Officer role
- Earlier degrees, diplomas and certifications under `education`
- Optional: a screenshot or live link for each project

Colours and fonts are in `src/theme.js`.

## Put it online

Web (Vercel or Netlify):

```bash
npm run build:web          # outputs to dist/
```

Set the build command to `npx expo export --platform web` and the output directory to `dist`.

Mobile: use EAS Build (`npx eas build`) to produce an Android APK or an iOS build.

## Structure

```
App.js                     entry: fonts, role state, scroll and sticky nav
src/data.js                all content
src/theme.js               colours, fonts, sizes
src/components/Hero.js     name, role switch, intro
src/components/Nav.js      sticky section links
src/components/Sections.js About, Experience, Projects, Skills, Education, Contact, Footer
src/components/ui.js       Button, Chip, Bullet, Section
```
