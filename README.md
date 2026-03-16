
 Recipe Explorer: React + DaisyUI

A modern, responsive recipe dashboard built with **React**, styled with **Tailwind CSS**, and enhanced by the component libraries **DaisyUI** and **Mamba UI**. This project features a dynamic navigation system and a data-driven card layout.

## ✨ Features

* **Dynamic Card Rendering**: Maps through recipe data (JSON) to display content-rich cards.
* **Responsive Navigation**: A clean, mobile-ready navbar powered by DaisyUI.
* **Modern UI/UX**: Leverages Mamba UI's sleek patterns and DaisyUI's themeable components.
* **Utility-First Styling**: Built entirely with Tailwind CSS for rapid UI development.

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Styling**: Tailwind CSS
* **UI Libraries**: DaisyUI & Mamba UI

## 🚀 Getting Started

1. **Clone & Install**:
```bash
npm install

```


2. **Verify Tailwind Config**:
Ensure `tailwind.config.js` includes the DaisyUI plugin:
```javascript
module.exports = {
  // ...
  plugins: [require("daisyui")],
}

```


3. **Run**:
```bash
npm start

```



## 📂 Project Structure

* `src/components/Navbar.jsx` — DaisyUI Navigation
* `src/components/Card.jsx` — Individual Recipe Card
* `src/App.js` — Main logic and data mapping

---

### 💡 Troubleshooting Tip

If the **layout** looks broken after pasting, make sure you have both libraries installed in your `package.json`:

1. `npm i -D daisyui@latest`
2. Make sure your `tailwind.config.js` has the `content` array pointing to your files (e.g., `"./src/**/*.{js,jsx,ts,tsx}"`).

# Meal-BD
