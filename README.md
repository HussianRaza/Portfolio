# Syed Hussain Raza — Developer Portfolio

Modern, high-performance, single-page developer portfolio for **Syed Hussain Raza** (AI/ML Engineer & Full-Stack Developer from Karachi, Pakistan).

Built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**, packaged and built with **Bun**, and configured for static export to **GitHub Pages** and **Vercel**.

---

## ⚡ Tech Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Dark-mode first, Glassmorphism)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Respects `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark / System mode toggle)
- **Deployment**: GitHub Pages (via GitHub Actions) & Vercel

---

## 🚀 Quick Start (Local Development)

Ensure you have [Bun](https://bun.sh/) installed:

```bash
# 1. Install dependencies
bun install

# 2. Run local development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Static Export Build

To test the static export build locally:

```bash
bun run build
```

This compiles and generates the production-ready static site into the `./out` folder.

---

## ✏️ How to Edit Content

All portfolio content is centralized in a single typed file:
📁 **`src/data/portfolio.ts`** (also mirrored at `data/portfolio.ts`).

You can edit:
- **Personal Information**: Name, headline, rotating role titles, tagline, bio, contact details, social links.
- **Education**: Institution, degree, GPA (cumulative and final-year), credit hours, coursework badges.
- **Skills**: 4 categories (`Languages`, `AI & Machine Learning`, `Full-Stack & Systems`, `Databases, DevOps & Automation`), along with tooltips and badges (such as the n8n automation badge).
- **Projects**: Title, summary, category tags, technology stack, GitHub URLs, Live Demo URLs, and custom badges (`"Internship Project"`, `"Private / Case Study"`).
- **Experience Timeline**: Roles, companies, locations, dates, and itemized impact points.
- **Research & Seminars**: Academic presentations, topics, and cross-links to projects.

---

## 🖼️ How to Add Screenshots to Project Cards

1. Place your project screenshot image into the `public/projects/` directory (e.g., `public/projects/finsense.png`).
2. Update the project in `src/data/portfolio.ts`:
   ```typescript
   {
     id: "finsense",
     title: "FinSense: Financial Sentiment Intelligence Engine",
     image: "/projects/finsense.png", // add your image path here
     // ... other fields
   }
   ```
3. Use the `getBasePath()` utility when rendering images in static export:
   ```tsx
   import { getBasePath } from '@/lib/utils';
   <img src={getBasePath(project.image)} alt={project.title} />
   ```

---

## 📬 Contact Form Configuration

The contact form is configured to work with **Web3Forms** (or Formspree).
To receive form submissions to your inbox:
1. Obtain a free access key at [web3forms.com](https://web3forms.com/).
2. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
If no key is configured, the form performs client-side validation and demonstrates the smooth loading and success states, while also offering direct mailto/copy options.

---

## 🌐 Deploying to GitHub Pages

This repository includes a fully automated GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step 1: Enable GitHub Pages in your repository
1. Go to your GitHub repository: `https://github.com/HussianRaza/<repo-name>`
2. Click **Settings** ➔ **Pages**.
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.

### Step 2: Configure Base Path (If not a root user site)
- **If your repository is named `<username>.github.io`** (User Site):
  - No configuration needed! It deploys directly to the root (`https://<username>.github.io`).
- **If your repository is a project site** (e.g., `https://github.com/HussianRaza/portfolio`):
  1. Go to repository **Settings** ➔ **Secrets and variables** ➔ **Actions** ➔ **Variables** tab.
  2. Click **New repository variable**.
  3. Name: `NEXT_PUBLIC_BASE_PATH`
  4. Value: `/portfolio` (replace with your repository name).

### Step 3: Push to Main
Push your changes to the `main` branch. The GitHub Actions workflow will automatically build with Bun and publish the site.

---

## ▲ Deploying to Vercel

1. Import this repository into [Vercel](https://vercel.com).
2. Framework Preset: **Next.js**
3. Install Command: `bun install`
4. Build Command: `bun run build`
5. Output Directory: `.next` (or `./out` for static export)
6. Click **Deploy**.

---

## 📄 License

MIT &copy; Syed Hussain Raza
