
# 🚀 MLVerse — A Machine Learning Guide Platform

MLVerse is an educational platform built with **Next.js** and **Tailwind CSS** to help learners explore theoretical and practical aspects of Machine Learning in a structured, accessible way.

#### Visit Here : https://m-lverse-a-machine-learning-guide.vercel.app/
---

## ✨ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: JavaScript / TypeScript (choose based on your setup)
- **Package Manager**: npm

---

## 📁 Project Structure

```

mlverse/
├── app/
│   ├── page.tsx / index.jsx         # Homepage
│   ├── layout.tsx                   # Global layout
│   └── ...                          # Add routes like /theory, /practical etc.
├── components/                      # Reusable UI components
├── public/                          # Static assets
├── styles/
│   └── globals.css                  # Tailwind base styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

````

---
## 📷 Screenshots 
<img width="1905" height="962" alt="image" src="https://github.com/user-attachments/assets/1a854313-35d3-48e5-a8e2-9cae9e07fa78" />
<img width="1900" height="987" alt="image" src="https://github.com/user-attachments/assets/16f3426d-402d-4c00-abba-993293ba391f" />
<img width="1898" height="982" alt="image" src="https://github.com/user-attachments/assets/ed77ac0a-6110-4c03-955e-6b6791e6dea2" />

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mlverse.git
cd mlverse
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🧪 Tailwind Setup Check

Make sure `globals.css` includes the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Your `tailwind.config.js` should include:

```js
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
```

---


## 🛠 Future Enhancements

* Add login/authentication (NextAuth.js)
* Dark mode toggle
* ML model demos via WebAssembly or APIs
* Markdown blog integration for theory pages

---

## 📄 License

This project is licensed under the MIT License.

```
THANK YOU !!
