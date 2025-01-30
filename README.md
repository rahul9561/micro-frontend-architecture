# 🚀 Micro-Frontend Architecture POC

This **Proof of Concept (POC)** demonstrates a **Micro-Frontend Architecture** using **React**. It consists of a **Main Application (Host)** that integrates two independent micro-frontends: **Chat Application** and **Email Application**.

---

## 📌 Tools & Frameworks Used

- ⚛ **React** - For building all applications.
- 📦 **PNPM** - For package management.
- 📡 **Event-based Communication** - To enable interaction between micro-frontends.
- 🎨 **Shared UI Components** - Defined in the main app for reusability.

---

## 📂 Project Structure

```
📁 micro-frontend-poc
│── 📁 main-app       # Host application (Shell)
│── 📁 chat-app       # Chat micro-frontend
│── 📁 email-app      # Email micro-frontend
│── 📜 README.md      # Project documentation
```

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/micro-frontend-poc.git
   cd micro-frontend-poc
   ```
2. **Install dependencies for each app:**
   ```sh
   cd main-app && pnpm install
   cd ../chat-app && pnpm install
   cd ../email-app && pnpm install
   ```
3. **Run all apps simultaneously:**
   ```sh
   cd main-app && pnpm run build-watch
   ```

---

## 🏗️ Key Architectural Decisions

### 🏠 **Main Application (Host App)**
- Serves as the **wrapper** for all micro-applications.
- Manages **shared UI components** (e.g., buttons, headers).
- Loads micro-frontends dynamically.

### 💬 **Chat Application (Micro-Frontend)**
- Standalone application responsible for **real-time messaging**.
- Communicates with the **main app** via events.

### ✉️ **Email Application (Micro-Frontend)**
- Independent module handling **email-related functionalities**.
- Uses shared components from the **main app**.

### 🔄 **Inter-App Communication**
- **Event-based communication** is used to share data between micro-frontends.
- Each micro-frontend operates **independently** while interacting with the **host app**.

---

## 🚀 Future Improvements

✅ **Integrate Module Federation** for dynamic loading of micro-frontends.
✅ **Implement shared state management** (e.g., Redux, Zustand) for better synchronization.
✅ **Develop a design system library** for a consistent UI across all applications.
✅ **Improve scalability** by adding more independent micro-frontends.

---

## 📜 License
This project is **MIT Licensed**.

---

## 🤝 Contributing
Feel free to **fork** this repo, **raise issues**, or **submit PRs** for improvements! 🚀
