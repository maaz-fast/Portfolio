<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width="300" />
  
  <h1>Muhammad Maaz Bin Imtiaz - Portfolio</h1>
  
  <p>
    <strong>A sleek, modern, and interactive 3D web portfolio built for an SQA Engineer.</strong>
  </p>

  <p>
    <a href="#features">Features</a> • 
    <a href="#tech-stack">Tech Stack</a> • 
    <a href="#getting-started">Getting Started</a> • 
    <a href="#customization">Customization</a>
  </p>
</div>

<br />

## ✨ Features

- 🌓 **Dark & Light Mode**: Seamless theme switching with custom color palettes and optimized contrast for both modes.
- 🧊 **3D Card Aesthetics**: Smooth glassmorphism, glowing hover effects, and subtle depth interactions.
- 🤖 **Interactive Tech Background**: A beautiful, dynamic node-link animation powered by `react-tsparticles` that reacts to user interactions.
- 📱 **Fully Responsive**: Carefully crafted layouts that look perfect on desktops, tablets, and mobile devices.
- ⚡ **High Performance**: Built with Next.js App Router for optimal speed, SEO, and static generation.
- 💻 **Terminal Simulator**: A unique, eye-catching animated terminal hero section highlighting QA automation metrics.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [react-tsparticles](https://particles.js.org/) & Framer Motion
- **Language**: TypeScript

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v18 or higher) and npm installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/maaz-portfolio.git
   cd maaz-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *Note: If you encounter issues with legacy peer dependencies for tsparticles, you can use `npm install --legacy-peer-deps`.*

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action!

---

## 🎨 Customization

All personal data, projects, experience, and skills are centralized in a single file for easy updates.

To update the content of the portfolio, simply edit the `app/data/portfolio.ts` file:

```typescript
// app/data/portfolio.ts
export const personal = {
  name: "Muhammad Maaz Bin Imtiaz",
  title: "SQA Engineer / Test Automation Specialist",
  email: "maazimtlaz3456@gmail.com",
  // ... update your bio and links here
};
```

To modify global styles, variables, or theme colors, edit the `app/globals.css` file.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <br />
  <p>Built with ❤️ by Muhammad Maaz Bin Imtiaz</p>
</div>
