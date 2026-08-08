<div align="center">

  <h1>🌌 Aura Workspace</h1>
  <p><strong>A High-End E-Commerce & Productivity Guide Platform for Developer Desk Setups</strong></p>
  <p><em>Developed during the CodeAlpha Full-Stack Web Development Internship</em></p>

  <p>
    <a href="https://aura-workspace.vercel.app"><strong>View Live Demo »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://github.com/Rehman-dev288/CodeAlpha_AuraWorkSpace"><strong>Explore Repository »</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-10.x-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Supabase-BaaS-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

---

## 📌 Executive Overview

**Aura Workspace** is a curated web application engineered for software developers, creative professionals, and digital nomads who seek to optimize their physical work environments. Developed as a flagship full-stack project during the **CodeAlpha Web Development Internship**, the platform seamlessly bridges minimalist e-commerce hardware shopping with actionable productivity setup engineering.

Rather than acting purely as a static digital storefront, Aura Workspace evaluates workspace aesthetics, ergonomic lighting, and audio gear, pairing product catalogs directly with context-aware setup guides explaining *why* specific hardware improves workflow efficiency.

---

## 🎯 Key Platform Features

* **Desk Setup Productivity Engine:** Curated workspace categories featuring detailed breakdowns of hardware configurations, lighting setups, and cable management strategies.
* **Minimalist E-Commerce Interface:** High-contrast product catalog with real-time price calculations, interactive cart management, dynamic product filters, and privacy policy compliance pages.
* **Supabase BaaS Integration:** Serverless user authentication (Sign Up / Sign In) and persistent form submissions for user contacts powered by Supabase PostgreSQL.
* **Intentional Desktop Viewport Guard:** Enforces a dedicated screen resolution guard (`"See You On a Big Screen"`) for lower resolutions, ensuring the visual grid alignment and spatial product aesthetics are experienced exactly as designed.
* **Fluid UI/UX Animations:** Powered by Framer Motion for high-frame-rate layout transitions, interactive product popovers, and polished micro-interactions.

---

## 🛠️ Architecture & Tech Stack

Aura Workspace is built as a client-first, serverless React application with zero backend server overhead, utilizing Supabase as a Backend-as-a-Service (BaaS) directly configured via environment variables.

* **Frontend Framework:** React.js
* **Styling & Layout:** Tailwind CSS
* **Animation Engine:** Framer Motion
* **Database & Auth:** Supabase (PostgreSQL / GoTrue Engine)
* **Iconography:** Lucide React
* **Deployment:** Vercel CDN

```text
[ Client Browser ]
       │
       ├──> UI Components (React + Tailwind CSS + Framer Motion)
       │
       ├──> Desktop Screen Guard (Viewport Resolution Detection)
       │
       └──> Direct BaaS API Calls (Supabase SDK)
              ├── User Auth (SignUp / Login)
              └── Contact Form Data Insertion
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory and populate it with your Supabase credentials:

```env
VITE_SUPABASE_URL=[https://your-supabase-project.supabase.co](https://your-supabase-project.supabase.co)
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Rehman-dev288/CodeAlpha_AuraWorkSpace.git](https://github.com/Rehman-dev288/CodeAlpha_AuraWorkSpace.git)
   cd CodeAlpha_AuraWorkSpace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

<div align="center">

Developed with ❤️ by **Rehman-dev288**  
🌐 Live Demo: [aura-workspace.vercel.app](https://aura-workspace.vercel.app)

</div>
