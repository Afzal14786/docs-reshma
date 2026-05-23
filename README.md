# Reshma‑Core Documentation

This repository contains the **official documentation** for the Reshma‑Core backend engine – a high‑performance, polymorphic e‑commerce API powering [Reshma Bangles & Boutique](https://github.com/Afzal14786/reshma-core).

The site is built with [Docusaurus 3](https://docusaurus.io/) and features a custom boutique theme (warm colours, elegant fonts, macOS‑inspired layout) along with Mermaid diagram support, full dark/light mode, and a horizontal footer with developer profiles.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 9+ (comes with Node)

### Installation

```bash
npm install
```  

### Local Development  

```bash
npm run start
```  

This command starts a local development server at `http://localhost:3000/reshma-docs/`. Changes to Markdown files and custom components will reload automatically.  

### Build  

```bash
npm run build
```  

Generates static files into the `build/` directory – ready for deployment to any static hosting service.  

### Deployment (GitHub Pages)  

The site is configured to deploy to `https://afzal14786.github.io/reshma-docs/`. To deploy manually:  

```bash
npm run deploy
```  

> This builds the site and pushes the `build/` folder to the `gh-pages` branch of this repository. GitHub Pages must be enabled in the repository settings (source = `gh-pages` branch, root folder).  

---  

### 📂 Project Structure  

```text
reshma-docs/
├── docs/                   # Markdown documentation (getting‑started, API, architecture, etc.)
├── src/                    # Custom React components, CSS, and theme overrides
├── static/                 # Static assets (images, logos, favicon)
├── docusaurus.config.js    # Site configuration
├── sidebars.js             # Sidebar definition (custom categories)
└── package.json            # Dependencies and scripts
```  

---  

### 🧑‍💻 Contributing  

This is a **private repository** – only authorised contributors can push changes. For internal updates:  

1. Clone the repository.
2. Create a new branch.
3. Make your changes (add/update Markdown files, adjust CSS, etc.).
4. Test locally with `npm run start`.  
5. Commit and push, then merge via PR.  

---  

### 📄 License  

All content in this repository (including documentation text, images, and code) is proprietary and confidential. See the [License](./docs/legal/license.md) page for terms.   

---  

### 👤 Maintainer  

**Md Afzal Ansari** – Lead Developer  
[**GitHub**](github.com/Afzal14786) | [**Portfolio**](https://iamafzal-dev.vercel.app) | [**Email**](mailto:mdafzal14777@gmail.com)  

---  

Built with [Docusaurus](docusaurus.io) and ❤️ for Reshma Bangles & Boutique.  

