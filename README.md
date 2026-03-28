# Gnanasekaran D - Portfolio

A modern, professional portfolio showcasing my work as a Full-Stack Developer. Built with React, Tailwind CSS, and Framer Motion.

🌐 **Live Demo:** [View Portfolio](https://gnanasekaran2004.github.io/PROTFOLIO)

---

## ✨ Features

- **Modern Design**: Editorial-style layout with muted slate/emerald color palette
- **Dark Mode**: Persistent theme switching with localStorage
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **Case Study Projects**: Detailed project showcases with problem-solution structure
- **Accessibility**: WCAG AA compliant with semantic HTML and keyboard navigation

---

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.316.0
- **Build Tool**: Create React App

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gnanasekaran2004/PROTFOLIO.git
   cd PROTFOLIO
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the production-ready files.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx    # Navigation bar with dark mode toggle
│   │   └── Footer.jsx         # Footer with social links
│   └── sections/
│       ├── Hero.jsx           # Landing section
│       ├── About.jsx          # Personal narrative
│       ├── Experience.jsx     # Timeline of work & education
│       ├── Projects.jsx       # Featured projects showcase
│       ├── Skills.jsx         # Technical skills by domain
│       └── Contact.jsx        # Contact information
├── data/
│   ├── projects.js            # Project data
│   ├── experience.js          # Work experience & education
│   └── skills.js              # Skills organized by category
├── App.js                     # Main app component
└── index.css                  # Tailwind CSS imports
```

---

## 🎨 Design Philosophy

This portfolio follows an **"Engineering Narrative"** design concept:

- **Typography-led**: Strong hierarchy using Inter font
- **Content-first**: Impact-focused writing, no buzzwords
- **Subtle motion**: Purposeful animations that enhance UX
- **Professional palette**: Muted colors (slate/zinc) with emerald accents
- **Editorial layout**: Generous whitespace and intentional spacing

---

## 🌟 Featured Projects

### Urban Voice
A secure civic engagement platform built with Node.js, Express, and MongoDB.
- RESTful API architecture
- BCrypt + JWT authentication
- Real-time status tracking
- [Live Demo](https://urban-voice-app.onrender.com) | [GitHub](https://github.com/Gnanasekaran2004/Urban-Voice)

### SparkCRM
Full-stack CRM application with Spring Boot and React.
- Spring Data JPA with dual-database setup
- Material Tailwind UI with Framer Motion
- Protected routes with React Router v7
- [GitHub](https://github.com/Gnanasekaran2004/SparkCRM)

---

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- WCAG AA color contrast compliance
- Focus states for all interactive elements

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Connect repository in [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `build`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://gnanasekaran2004.github.io/PROTFOLIO",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Gnanasekaran D**
- Email: [sgnana238@gmail.com](mailto:sgnana238@gmail.com)
- GitHub: [@Gnanasekaran2004](https://github.com/Gnanasekaran2004)
- LinkedIn: [Gnana Sekaran](https://www.linkedin.com/in/gnana-sekaran-20041025gs)

---

## 🙏 Acknowledgments

- Design inspiration from modern editorial layouts
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**⭐ If you like this portfolio, please give it a star!**
