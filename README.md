# Skill Forward — Engineering Blog

A polished, production-ready personal technical blog built with **React + Vite + Tailwind CSS**, featuring dark mode, scroll animations, an interactive demo, and full Netlify deployment configuration.

---

## ✨ Features

- Modern editorial design (Playfair Display + DM Sans typography)
- Dark mode (auto-detects system preference + manual toggle)
- Scroll-triggered fade/slide animations via IntersectionObserver
- Interactive "Generate Variations" demo component
- Animated skill badge hover effects
- Fully responsive (mobile-first)
- Netlify SPA redirect config

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output: ./dist/
```

---

## 🌐 Deploy to Netlify

### Option A — Netlify CLI (fastest)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login
netlify login

# Deploy (from project root)
netlify deploy --prod --dir=dist
```

### Option B — GitHub + Netlify Dashboard (recommended for teams)

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "feat: initial blog setup"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/skill-forward-blog.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Choose **GitHub** and authorize Netlify
3. Select your `skill-forward-blog` repository
4. Netlify will auto-detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site** ✅

#### Step 3: Your site is live!

Netlify will give you a URL like `https://skill-forward-blog.netlify.app`

You can customize it under **Site settings → Domain management**.

---

## 🔄 Updating the Site

Every push to `main` triggers an automatic redeploy:

```bash
# Make your changes, then:
git add .
git commit -m "update: improved hero section"
git push origin main

# Netlify auto-builds and deploys in ~30 seconds
```

---

## 📁 Project Structure

```
skill-forward-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutPlatform.jsx
│   │   ├── Contribution.jsx
│   │   ├── SkillsAcquired.jsx
│   │   ├── GenerateVariations.jsx
│   │   ├── TechnicalChallenges.jsx
│   │   ├── TechStack.jsx
│   │   ├── Learnings.jsx
│   │   ├── FutureAndFinal.jsx
│   │   └── CTAAndFooter.jsx
│   ├── hooks/
│   │   └── useIntersection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── netlify.toml
```

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Your name / links | `src/components/CTAAndFooter.jsx` |
| Blog meta title | `index.html` |
| Color palette | `tailwind.config.js` → `colors` |
| Font family | `tailwind.config.js` → `fontFamily` + `index.html` Google Fonts link |
| Dark mode default | `src/App.jsx` → `useState(false)` → `useState(true)` |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Hosting | Netlify |
| Fonts | Google Fonts (Playfair Display, DM Sans, JetBrains Mono) |
