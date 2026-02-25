<div align="center">

# 🚀 DataVault

### Next-Generation Data Management Platform

<br/>

![DataVault](https://img.shields.io/badge/DataVault-v1.0.0-00FFFF?style=for-the-badge&labelColor=000000)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/PrasanthKumarS777/datavault?style=social)](https://github.com/PrasanthKumarS777/datavault/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/PrasanthKumarS777/datavault?style=social)](https://github.com/PrasanthKumarS777/datavault/network/members)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/PrasanthKumarS777/datavault)](https://github.com/PrasanthKumarS777/datavault/commits)

<br/>

> A modern, futuristic full-stack data management platform featuring aurora animations,  
> real-time analytics, and seamless CSV data handling.

<br/>

[✨ Features](#-features) &nbsp;•&nbsp; [🖥️ Tech Stack](#️-tech-stack) &nbsp;•&nbsp; [🚀 Installation](#-installation) &nbsp;•&nbsp; [📖 Usage](#-usage-guide) &nbsp;•&nbsp; [📡 API Docs](#-api-documentation) &nbsp;•&nbsp; [🤝 Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🖥️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Installation](#-installation)
- [🏃 Running the Application](#-running-the-application)
- [📖 Usage Guide](#-usage-guide)
- [📡 API Documentation](#-api-documentation)
- [🎨 Color Palette](#-color-palette)
- [⚡ Performance Optimizations](#-performance-optimizations)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🌟 Overview

**DataVault** is a cutting-edge, full-stack data management platform built with a focus on user experience, performance, and visual appeal. It combines powerful data handling capabilities with a stunning visual design featuring animated aurora backgrounds and a sleek glass-morphism UI.

<br/>

<div align="center">

| 🎨 Stunning UI | 🔐 Secure Auth | 📊 Real-time Analytics | ⚡ Blazing Fast |
|:-:|:-:|:-:|:-:|
| Cyan/teal aurora animations on pure black | Protected routes & session management | Interactive charts & live updates | Optimized animations & efficient processing |

</div>

---

## ✨ Features

<details>
<summary><b>🎨 Beautiful UI/UX</b></summary>
<br/>

- **Aurora Background Animations** — Flowing cyan/teal northern lights effect with smooth transitions, wave-like motion, and a pure black (#000000) backdrop
- **Glass-morphism Design** — Transparent cards with backdrop blur, gradient borders, and modern dark-theme aesthetics
- **3D Rolling Cube** — Animated puzzle cube on the login page with unique geometric patterns on each face and smooth rotation effects

</details>

<details>
<summary><b>🔐 Authentication & Security</b></summary>
<br/>

- Email/password authentication with demo login for quick access
- Session persistence via `localStorage`
- Protected routes — dashboard inaccessible without login
- Auto-redirect to login when unauthenticated
- Clean logout with full session cleanup

</details>

<details>
<summary><b>📊 Data Management</b></summary>
<br/>

- **CSV Upload** — Drag-and-drop interface with real-time parsing, validation, and progress indicators
- **Data Table** — Sortable columns, row selection (individual & bulk), search/filter, pagination, and delete operations
- **Export** — Export all or selected rows as a CSV with a custom filename

</details>

<details>
<summary><b>📈 Analytics Dashboard</b></summary>
<br/>

- Line charts for upload trends (6-month view)
- Bar charts for storage usage
- Pie charts for data type distribution
- Activity timeline with recent events
- Real-time stats: total records, data size, last updated, API status

</details>

<details>
<summary><b>⚡ Performance & Additional Features</b></summary>
<br/>

- **Auto-refresh** — Configurable 30-second intervals with visual countdown and manual refresh option
- **Calendar Integration** — Date picker and scheduling support
- **Notifications Panel** — Real-time alerts and messages
- **Theme Toggle** — Switch between light/dark modes
- **Responsive Sidebar** — Collapsible navigation menu

</details>

---

## 🖥️ Tech Stack

<div align="center">

### Frontend

| Technology | Version | Purpose |
|:----------:|:-------:|:-------:|
| ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black) | 18.3.1 | UI Framework |
| ![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite&logoColor=white) | 5.4.2 | Build Tool & Dev Server |
| ![React Router](https://img.shields.io/badge/React_Router-6.26.1-CA4245?logo=react-router&logoColor=white) | 6.26.1 | Client-side Routing |
| ![Recharts](https://img.shields.io/badge/Recharts-2.12.7-22B5BF) | 2.12.7 | Data Visualization |
| ![Axios](https://img.shields.io/badge/Axios-1.7.7-5A29E4?logo=axios&logoColor=white) | 1.7.7 | HTTP Client |

### Backend

| Technology | Version | Purpose |
|:----------:|:-------:|:-------:|
| ![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-339933?logo=node.js&logoColor=white) | ≥16.0.0 | Runtime Environment |
| ![Express](https://img.shields.io/badge/Express-4.19.2-000000?logo=express&logoColor=white) | 4.19.2 | Web Framework |
| ![Multer](https://img.shields.io/badge/Multer-1.4.5-orange) | 1.4.5 | File Upload Handling |
| ![CSV Parser](https://img.shields.io/badge/CSV_Parser-3.0.0-green) | 3.0.0 | CSV File Parsing |
| ![CORS](https://img.shields.io/badge/CORS-2.8.5-blue) | 2.8.5 | Cross-Origin Resource Sharing |

</div>

---

## 📁 Project Structure

```
datavault/
│
├── 📂 datavault-frontend/          # React Frontend Application
│   ├── public/                     # Static Assets
│   └── src/
│       ├── 📂 components/          # Reusable Components
│       │   ├── AuroraBackground.jsx
│       │   ├── RollingCube.jsx
│       │   ├── Sidebar.jsx
│       │   ├── DataTable.jsx
│       │   ├── NotificationPanel.jsx
│       │   ├── CalendarModal.jsx
│       │   └── ProfileMenu.jsx
│       │
│       ├── 📂 pages/               # Page Components
│       │   ├── Login.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Analytics.jsx
│       │   └── Settings.jsx
│       │
│       ├── 📂 context/             # React Context Providers
│       │   ├── AuthContext.jsx
│       │   └── ThemeContext.jsx
│       │
│       ├── 📂 utils/               # Utility Functions
│       │   ├── api.js
│       │   └── exportCSV.js
│       │
│       ├── App.jsx
│       ├── App.css
│       └── main.jsx
│
├── 📂 datavault-backend/           # Express Backend Server
│   ├── server.js
│   ├── data.json                   # Data storage (gitignored)
│   └── package.json
│
├── README.md
└── LICENSE
```

---

## 🚀 Installation

### Prerequisites

Ensure the following are installed before proceeding:

- **[Node.js](https://nodejs.org/)** v16.0.0 or higher
- **npm** (bundled with Node.js) or **yarn**
- **[Git](https://git-scm.com/)**
- A modern web browser (Chrome, Firefox, Edge, Safari)

### Step-by-Step Setup

**1. Clone the Repository**

```bash
git clone https://github.com/PrasanthKumarS777/datavault.git
cd datavault
```

**2. Install Frontend Dependencies**

```bash
cd datavault-frontend
npm install
```

**3. Install Backend Dependencies**

```bash
cd ../datavault-backend
npm install
```

---

## 🏃 Running the Application

### Option 1 — Manual (Two Terminals)

**Terminal 1 — Start Backend**

```bash
cd datavault-backend
npm start
```

```
╔════════════════════════════════════════╗
║    DataVault Backend Server Running   ║
║                                        ║
║   🚀 Port: 8080                        ║
║   🌐 URL: http://localhost:8080        ║
║                                        ║
║   Endpoints:                           ║
║   → POST /upload                       ║
║   → GET  /data                         ║
║   → GET  /search?query=keyword         ║
╚════════════════════════════════════════╝
```

**Terminal 2 — Start Frontend**

```bash
cd datavault-frontend
npm run dev
```

```
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Option 2 — One-Click (Windows)

Create `start.bat` in the project root:

```bat
@echo off
start cmd /k "cd datavault-backend && npm start"
timeout /t 3
start cmd /k "cd datavault-frontend && npm run dev"
start http://localhost:5173
```

### Option 3 — One-Click (Mac/Linux)

Create `start.sh` in the project root:

```bash
#!/bin/bash
cd datavault-backend && npm start &
sleep 3
cd datavault-frontend && npm run dev &
sleep 3
open http://localhost:5173
```

```bash
chmod +x start.sh && ./start.sh
```

---

## 📖 Usage Guide

### 🔐 Login

Navigate to `http://localhost:5173`. You'll see the aurora background with a 3D rolling cube.

- **Option A** — Enter any email & password, then click **Sign In**
- **Option B** — Click **⚡ Quick Demo Login** for instant access

### 📁 Uploading Data

1. Go to the **Upload** section on the Dashboard
2. Drag-and-drop or click to select a `.csv` file
3. Wait for the success toast — data appears in the table instantly

Supported CSV format:
```
id,name,email,age
1,John Doe,john@example.com,30
2,Jane Smith,jane@example.com,25
```

### 🔍 Search, Sort & Filter

- **Search** — Type a keyword in the search box and press Enter; click **Reset** to clear
- **Sort** — Click any column header to sort; click again to reverse
- **Filter** — Use the built-in filter controls above the table

### ☑️ Select, Delete & Export

- Check individual row checkboxes or click **Select All**
- Click **🗑️ Delete (X)** to remove selected rows
- Click **📥 Export** to download as `datavault_export.csv`

### 📊 Analytics

Click **Analytics** in the sidebar to view upload trends, storage usage, data type distribution, and activity timeline.

### 🔄 Auto-Refresh

Auto-refresh is enabled by default (every 30 seconds). Toggle it with the 🔄 button in the header or click **Refresh Now** for an immediate update.

---

## 📡 API Documentation

**Base URL:** `http://localhost:8080`

### `POST /upload` — Upload CSV File

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| `file` | `multipart/form-data` | CSV file to upload |

```bash
curl -X POST http://localhost:8080/upload -F "file=@data.csv"
```

```json
{ "message": "File uploaded successfully", "count": 150 }
```

---

### `GET /data` — Get All Data

```bash
curl http://localhost:8080/data
```

```json
[
  { "id": "1", "name": "John Doe", "email": "john@example.com", "age": "30" },
  { "id": "2", "name": "Jane Smith", "email": "jane@example.com", "age": "25" }
]
```

---

### `GET /search?query={keyword}` — Search Data

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| `query` | `string` | Keyword to search across all fields |

```bash
curl "http://localhost:8080/search?query=john"
```

```json
[
  { "id": "1", "name": "John Doe", "email": "john@example.com", "age": "30" }
]
```

---

## 🎨 Color Palette

<div align="center">

| Color | Hex | Usage |
|:-----:|:---:|:-----:|
| ![#000000](https://via.placeholder.com/16/000000/000000?text=+) Pure Black | `#000000` | Background |
| ![#00FFFF](https://via.placeholder.com/16/00FFFF/00FFFF?text=+) Cyan | `#00FFFF` | Primary Aurora |
| ![#00E6E6](https://via.placeholder.com/16/00E6E6/00E6E6?text=+) Teal | `#00E6E6` | Secondary Aurora |
| ![#00DCDC](https://via.placeholder.com/16/00DCDC/00DCDC?text=+) Turquoise | `#00DCDC` | Accent Aurora |
| ![#0F172A](https://via.placeholder.com/16/0F172A/0F172A?text=+) Dark Slate | `#0F172A` | Cards & Containers |
| ![#1E293B](https://via.placeholder.com/16/1E293B/1E293B?text=+) Slate | `#1E293B` | Secondary Containers |
| ![#F1F5F9](https://via.placeholder.com/16/F1F5F9/F1F5F9?text=+) White | `#F1F5F9` | Primary Text |
| ![#10B981](https://via.placeholder.com/16/10B981/10B981?text=+) Success Green | `#10B981` | Success States |
| ![#EF4444](https://via.placeholder.com/16/EF4444/EF4444?text=+) Error Red | `#EF4444` | Error States |

</div>

---

## ⚡ Performance Optimizations

**Animation Optimizations**
- Reduced blur radius from `120px` → `80px` for faster GPU rendering
- Simplified keyframe chains to reduce paint cost
- Added `will-change: transform` for hardware acceleration
- Eliminated unnecessary `::before` / `::after` pseudo-elements

**React Optimizations**
- Lazy loading of page-level components
- `React.memo` applied to expensive render paths
- Debounced search input to reduce API call frequency
- Aurora component conditionally rendered only when authenticated

**Backend Optimizations**
- File size limits to prevent memory overload
- Stream-based CSV parsing for large files
- CORS configured for specific allowed origins

---

## 🗺️ Roadmap

| Timeline | Milestone |
|:--------:|:---------:|
| **Q2 2026** | More chart types · Data validation · Bulk edit · PDF export |
| **Q3 2026** | Firebase Auth · MongoDB · WebSocket updates · Email notifications |
| **Q4 2026** | Multi-user collaboration · RBAC · React Native app · CI/CD pipeline |

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn and grow. Any contribution you make is **greatly appreciated**!

```bash
# 1. Fork the Project (click "Fork" on GitHub)

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/datavault.git

# 3. Create your feature branch
git checkout -b feature/AmazingFeature

# 4. Commit your changes
git add .
git commit -m "✨ Add AmazingFeature"

# 5. Push to your branch
git push origin feature/AmazingFeature

# 6. Open a Pull Request on GitHub
```

**Contribution Guidelines**
- Follow the existing code style and naming conventions
- Write meaningful, emoji-prefixed commit messages
- Test your changes thoroughly before submitting a PR
- Update documentation for any new features
- Be respectful and constructive in all discussions

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

```
✅ Commercial use   ✅ Modification   ✅ Distribution   ✅ Private use
⚠️  Must include copyright notice        ❌ No warranty provided
```

---

## 👨‍💻 Author

<div align="center">

**Prasanth Kumar Sahu**

[![GitHub](https://img.shields.io/badge/GitHub-PrasanthKumarS777-181717?style=for-the-badge&logo=github)](https://github.com/PrasanthKumarS777)

**Skills Demonstrated through this project:**

`React.js` &nbsp; `Node.js & Express` &nbsp; `UI/UX Design & CSS Animations`  
`RESTful API Development` &nbsp; `Git & Version Control` &nbsp; `Full-Stack Project Management`

</div>

---

## 🙏 Acknowledgments

- **[React Team](https://reactjs.org/)** — For the incredible UI library
- **[Vite Team](https://vitejs.dev/)** — For the lightning-fast build tool
- **[Recharts](https://recharts.org/)** — For the beautiful charting library
- **[Express.js](https://expressjs.com/)** — For the minimalist web framework
- **Aurora Inspiration** — The natural beauty of northern lights phenomena
- **Community** — Stack Overflow, GitHub, Dev.to

---

<div align="center">

### 🔖 Version History

| Version | Date | Highlights |
|:-------:|:----:|:----------:|
| `v1.0.0` | February 2026 | Initial release — Aurora UI · Authentication · Analytics · CSV Management · 3D Cube |

<br/>

---

**⭐ If you found this project helpful, please consider giving it a star!**

*Built with ❤️ and ☕ by [Prasanth Kumar Sahu](https://github.com/PrasanthKumarS777)*

</div>
