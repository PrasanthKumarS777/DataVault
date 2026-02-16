# 🚀 DataVault - Next-Gen Data Management Platform

<div align="center">

![DataVault Logo](https://img.shields.io/badge/DataVault-Next--Gen-00FFFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==)

**A modern, futuristic full-stack data management platform with stunning aurora animations, real-time analytics, and seamless CSV data handling.**

[![GitHub Stars](https://img.shields.io/github/stars/PrasanthKumarS777/datavault?style=social)](https://github.com/PrasanthKumarS777/datavault/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/PrasanthKumarS777/datavault?style=social)](https://github.com/PrasanthKumarS777/datavault/network/members)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18.0-61DAFB?logo=react)](https://reactjs.org/)

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Development Journey](#-development-journey)
- [Color Palette](#-color-palette)
- [Performance Optimizations](#-performance-optimizations)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**DataVault** is a cutting-edge data management platform built with a focus on user experience, performance, and visual appeal. It combines powerful data handling capabilities with a stunning visual design featuring animated aurora backgrounds and a sleek glass-morphism UI.

### Key Highlights

- 🎨 **Stunning Visual Design** - Cyan/teal aurora animations on pure black background
- 🔐 **Secure Authentication** - Protected routes with session management
- 📊 **Real-time Analytics** - Interactive charts and live data updates
- ⚡ **Blazing Fast** - Optimized animations and efficient data processing
- 🎲 **3D Elements** - Animated puzzle cube on login page
- 📱 **Responsive Design** - Works seamlessly on all devices

---

## ✨ Features

### 🎨 Beautiful UI/UX
- **Aurora Background Animations**
  - Flowing cyan/teal northern lights effect
  - Smooth transitions and wave-like motion
  - Optimized for performance with reduced blur
  - Pure black background (#000000)

- **Glass-morphism Design**
  - Transparent cards with backdrop blur
  - Gradient borders and shadows
  - Modern dark theme aesthetic

- **3D Rolling Cube**
  - Animated puzzle cube on login page
  - Unique geometric patterns on each face
  - Smooth rotation and floating effects

### 🔐 Authentication & Security
- **Login System**
  - Email/password authentication
  - Demo login for quick access
  - Session persistence with localStorage
  - Protected routes (cannot access dashboard without login)
  - Auto-redirect to login if not authenticated
  - Logout functionality with session cleanup

### 📊 Data Management
- **CSV File Upload**
  - Drag-and-drop interface
  - Real-time parsing and validation
  - Support for large files
  - Progress indicators

- **Data Table**
  - Sortable columns (click headers to sort)
  - Row selection (individual and bulk select)
  - Search and filter functionality
  - Pagination support
  - Delete operations (single and bulk)

- **Export Functionality**
  - Export all data or selected rows
  - CSV format with proper formatting
  - Download with custom filename

### 📈 Analytics Dashboard
- **Visual Data Insights**
  - Line charts for upload trends (6-month view)
  - Bar charts for storage usage
  - Pie charts for data type distribution
  - Activity timeline with recent events

- **Real-time Stats**
  - Total records count
  - Data size calculation
  - Last updated timestamp
  - API connection status

### ⚡ Performance Features
- **Auto-refresh**
  - Configurable 30-second intervals
  - Toggle on/off functionality
  - Visual countdown timer
  - Manual refresh button

- **Optimizations**
  - Reduced blur complexity for faster rendering
  - Lazy loading of components
  - Efficient state management
  - Minimal re-renders

### 🛠️ Additional Features
- **Calendar Integration** - Date picker and scheduling
- **Notifications Panel** - Real-time alerts and messages
- **User Profile Menu** - Account settings and logout
- **Theme Toggle** - Switch between light/dark modes
- **Responsive Sidebar** - Collapsible navigation menu

---

## 🖥️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **Vite** | 5.4.2 | Build Tool & Dev Server |
| **React Router** | 6.26.1 | Client-side Routing |
| **Recharts** | 2.12.7 | Data Visualization |
| **React Hot Toast** | 2.4.1 | Toast Notifications |
| **Axios** | 1.7.7 | HTTP Client |
| **CSS3** | - | Styling & Animations |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | ≥16.0.0 | Runtime Environment |
| **Express.js** | 4.19.2 | Web Framework |
| **Multer** | 1.4.5-lts.1 | File Upload Handling |
| **CSV Parser** | 3.0.0 | CSV File Parsing |
| **CORS** | 2.8.5 | Cross-Origin Resource Sharing |

---

## 📁 Project Structure

datavault/
│
├── datavault-frontend/ # React Frontend Application
│ ├── public/ # Static Assets
│ ├── src/
│ │ ├── components/ # Reusable Components
│ │ │ ├── AuroraBackground.jsx # Aurora animation component
│ │ │ ├── AuroraBackground.css # Aurora styles
│ │ │ ├── RollingCube.jsx # 3D cube component
│ │ │ ├── RollingCube.css # Cube animations
│ │ │ ├── Sidebar.jsx # Navigation sidebar
│ │ │ ├── DataTable.jsx # Data table with sorting
│ │ │ ├── NotificationPanel.jsx # Notification dropdown
│ │ │ ├── CalendarModal.jsx # Calendar popup
│ │ │ └── ProfileMenu.jsx # User profile menu
│ │ │
│ │ ├── pages/ # Page Components
│ │ │ ├── Login.jsx # Login page with cube
│ │ │ ├── Dashboard.jsx # Main dashboard
│ │ │ ├── Analytics.jsx # Analytics page
│ │ │ └── Settings.jsx # Settings page
│ │ │
│ │ ├── context/ # React Context Providers
│ │ │ ├── AuthContext.jsx # Authentication state
│ │ │ └── ThemeContext.jsx # Theme management
│ │ │
│ │ ├── utils/ # Utility Functions
│ │ │ ├── api.js # API calls (fetch, search, upload)
│ │ │ └── exportCSV.js # CSV export functionality
│ │ │
│ │ ├── App.jsx # Main App Component
│ │ ├── App.css # Global Styles
│ │ └── main.jsx # React Entry Point
│ │
│ ├── .gitignore # Git ignore rules
│ ├── package.json # Frontend dependencies
│ ├── vite.config.js # Vite configuration
│ └── index.html # HTML template
│
├── datavault-backend/ # Express Backend Server
│ ├── server.js # Main server file
│ ├── data.json # Data storage (gitignored)
│ ├── .gitignore # Git ignore rules
│ └── package.json # Backend dependencies
│
├── README.md # This file
└── LICENSE # MIT License

text

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- A modern web browser (Chrome, Firefox, Edge, Safari)

### Step-by-Step Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/PrasanthKumarS777/datavault.git
cd datavault
2. Install Frontend Dependencies
bash
cd datavault-frontend
npm install
Installed packages:

react, react-dom

react-router-dom

recharts

react-hot-toast

axios

vite

3. Install Backend Dependencies
bash
cd ../datavault-backend
npm install
Installed packages:

express

multer

csv-parser

cors

body-parser

🏃 Running the Application
Option 1: Run Both Servers Manually
Terminal 1: Start Backend Server
bash
cd datavault-backend
npm start
Expected Output:

text
╔════════════════════════════════════════╗
║   DataVault Backend Server Running    ║
║                                        ║
║   🚀 Port: 8080                         ║
║   🌐 URL: http://localhost:8080       ║
║                                        ║
║   Endpoints:                           ║
║   → POST /upload                       ║
║   → GET  /data                         ║
║   → GET  /search?query=keyword         ║
╚════════════════════════════════════════╝
Backend is now running on: http://localhost:8080

Terminal 2: Start Frontend Development Server
bash
cd datavault-frontend
npm run dev
Expected Output:

text
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Frontend is now running on: http://localhost:5173

Option 2: One-Click Startup (Windows)
Create start.bat in project root:

text
@echo off
start cmd /k "cd datavault-backend && npm start"
timeout /t 3
start cmd /k "cd datavault-frontend && npm run dev"
start http://localhost:5173
Run: Double-click start.bat

Option 3: One-Click Startup (Mac/Linux)
Create start.sh in project root:

bash
#!/bin/bash
cd datavault-backend && npm start &
sleep 3
cd datavault-frontend && npm run dev &
sleep 3
open http://localhost:5173
Make executable and run:

bash
chmod +x start.sh
./start.sh
📖 Usage Guide
First Time Login
Open Browser: Navigate to http://localhost:5173

Login Page:

You'll see a stunning aurora background with a rolling 3D cube

Option A: Enter any email and password, then click "🚀 Sign In"

Option B: Click "⚡ Quick Demo Login" for instant access

Welcome Screen:

After login, you're redirected to the dashboard

You'll see stats, upload section, and data table

Uploading Data
Navigate to Upload Section on Dashboard

Click "Choose File" or drag-and-drop a CSV file

Wait for upload - you'll see a loading toast

Success! - Data appears in the table below

Supported Format:

CSV files with headers

Example:

text
id,name,email,age
1,John Doe,john@example.com,30
2,Jane Smith,jane@example.com,25
Searching Data
Enter keyword in the search box

Press Enter or click "Search"

View filtered results in the table

Click "Reset" to show all data

Sorting Data
Click any column header to sort

Click again to reverse sort order

Visual indicator shows current sort direction

Selecting and Deleting Rows
Select rows: Click checkboxes on left of each row

Select all: Click "☑ Select All" button

Delete selected: Click "🗑️ Delete (X)" button

Single delete: Click delete button in each row

Exporting Data
Select specific rows (optional) - or export all

Click "📥 Export" button

File downloads as datavault_export.csv

Viewing Analytics
Click "Analytics" in sidebar

View charts:

Upload trends over 6 months

Data type distribution

Storage usage by category

Recent activity timeline

Auto-Refresh
Enabled by default - refreshes every 30 seconds

Toggle: Click 🔄 button in header

Manual refresh: Click "🔄 Refresh Now"

Logging Out
Click your avatar (PK) in top-right

Click "🚪 Logout"

Redirected to login page

📡 API Documentation
Base URL
text
http://localhost:8080
Endpoints
1. Upload CSV File
POST /upload

Uploads and parses a CSV file, storing data in data.json.

Request:

Method: POST

Content-Type: multipart/form-data

Body:

text
file: <CSV File>
Response:

json
{
  "message": "File uploaded successfully",
  "count": 150
}
cURL Example:

bash
curl -X POST http://localhost:8080/upload \
  -F "file=@data.csv"
2. Get All Data
GET /data

Retrieves all stored data.

Request:

Method: GET

Response:

json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "age": "30"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": "25"
  }
]
cURL Example:

bash
curl http://localhost:8080/data
3. Search Data
GET /search?query={keyword}

Searches data by keyword across all fields.

Request:

Method: GET

Query Params:

query (required): Search term

Response:

json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "age": "30"
  }
]
cURL Example:

bash
curl "http://localhost:8080/search?query=john"
🛠️ Development Journey
Phase 1: Project Setup
✅ Created React app with Vite

✅ Set up Express backend server

✅ Configured CORS for cross-origin requests

Phase 2: Backend Development
✅ Implemented CSV upload endpoint with Multer

✅ Added CSV parsing functionality

✅ Created data storage with JSON file

✅ Built search functionality

✅ Added error handling

Phase 3: Frontend Core
✅ Set up React Router for navigation

✅ Created authentication context

✅ Built protected routes

✅ Implemented login/logout system

✅ Added session persistence

Phase 4: UI Components
✅ Designed Sidebar with active states

✅ Built DataTable with sorting

✅ Created ProfileMenu dropdown

✅ Added NotificationPanel

✅ Implemented CalendarModal

Phase 5: Data Management
✅ CSV file upload with drag-drop

✅ Real-time data display

✅ Search and filter functionality

✅ Bulk operations (select/delete)

✅ Export to CSV

Phase 6: Visual Design
✅ Created aurora background animations

✅ Designed 3D rolling cube

✅ Implemented glass-morphism UI

✅ Added smooth transitions

✅ Optimized animations for performance

Phase 7: Analytics
✅ Integrated Recharts library

✅ Built line charts for trends

✅ Created pie charts for distribution

✅ Added bar charts for storage

✅ Designed activity timeline

Phase 8: Performance Optimization
✅ Reduced blur complexity (120px → 80px)

✅ Simplified animation keyframes

✅ Optimized re-renders

✅ Added auto-refresh with toggle

✅ Improved loading states

Phase 9: Git & Documentation
✅ Created .gitignore files

✅ Removed large build artifacts

✅ Pushed to GitHub

✅ Wrote comprehensive README

🎨 Color Palette
Color Name	Hex Code	RGB	Usage
Pure Black	#000000	rgb(0, 0, 0)	Background
Cyan	#00FFFF	rgb(0, 255, 255)	Primary Aurora
Teal	#00E6E6	rgb(0, 230, 230)	Secondary Aurora
Turquoise	#00DCDC	rgb(0, 220, 220)	Accent Aurora
Dark Slate	#0F172A	rgb(15, 23, 42)	Cards & Containers
Slate	#1E293B	rgb(30, 41, 59)	Secondary Containers
Slate Border	#64748B	rgb(100, 116, 139)	Borders
Light Slate	#94A3B8	rgb(148, 163, 184)	Secondary Text
White	#F1F5F9	rgb(241, 245, 249)	Primary Text
Success Green	#10B981	rgb(16, 185, 129)	Success States
Error Red	#EF4444	rgb(239, 68, 68)	Error States
⚡ Performance Optimizations
Animation Optimizations
Reduced Blur: Changed from 120px to 80px for faster rendering

Simplified Keyframes: Removed complex transform chains

Will-Change: Added will-change: transform for GPU acceleration

Removed Pseudo-elements: Eliminated unnecessary ::before/::after effects

React Optimizations
Lazy Loading: Components loaded on-demand

Memoization: Used React.memo for expensive components

Debouncing: Search input debounced to reduce API calls

Conditional Rendering: Aurora only renders when authenticated

Backend Optimizations
File Size Limits: Restricted upload size to prevent memory issues

Efficient Parsing: Stream-based CSV parsing

CORS Configuration: Optimized for specific origins

🗺️ Roadmap
Short Term (Q2 2026)
 Add more chart types (Scatter, Radar, Area)

 Implement data validation on upload

 Add bulk edit functionality

 Create user settings page

 Add export to PDF

Medium Term (Q3 2026)
 Firebase Authentication integration

 MongoDB database connection

 Real-time WebSocket updates

 Advanced filtering with date ranges

 Email notifications

Long Term (Q4 2026)
 Multi-user collaboration

 Role-based access control

 Mobile app (React Native)

 API rate limiting

 Comprehensive unit tests

 CI/CD pipeline

🤝 Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated!

How to Contribute
Fork the Project

bash
# Click "Fork" button on GitHub
Clone Your Fork

bash
git clone https://github.com/YOUR_USERNAME/datavault.git
cd datavault
Create a Feature Branch

bash
git checkout -b feature/AmazingFeature
Make Your Changes

Write clean, commented code

Follow existing code style

Test thoroughly

Commit Your Changes

bash
git add .
git commit -m "✨ Add some AmazingFeature"
Push to Your Branch

bash
git push origin feature/AmazingFeature
Open a Pull Request

Go to original repository

Click "New Pull Request"

Describe your changes

Contribution Guidelines
Follow the existing code style

Write meaningful commit messages (use emojis!)

Update documentation for new features

Test your changes thoroughly

Be respectful and constructive

📝 License
This project is licensed under the MIT License.

You are free to:

✅ Use commercially

✅ Modify

✅ Distribute

✅ Private use

Conditions:

Must include copyright notice and license

No warranty provided

See LICENSE file for full details.

👨‍💻 Author
Pankaj Kumar Sahu

📍 Location: Bhubaneswar, Odisha, India

🎓 UPSC Aspirant | Anthropology Optional

💼 Full-Stack Developer

🐙 GitHub: @PrasanthKumarS777

📧 Email: Contact via GitHub

Skills Demonstrated
React.js & Modern JavaScript

Node.js & Express Backend

UI/UX Design & CSS Animations

RESTful API Development

Git & Version Control

Full-Stack Project Management

🙏 Acknowledgments
React Team - For the amazing React library

Vite Team - For the lightning-fast build tool

Recharts - For beautiful charting library

Express.js - For the minimalist web framework

Aurora Inspiration - Natural northern lights phenomena

Design Inspiration - Modern glass-morphism trends

Community - Stack Overflow, GitHub, Dev.to

📞 Support
Getting Help
🐛 Found a bug? Open an issue

💡 Have a feature request? Start a discussion

📖 Need documentation? Check this README first

💬 General questions? Open a GitHub discussion

📊 Project Stats
GitHub repo size
GitHub language count
GitHub top language
GitHub last commit

<div align="center">
⭐ Star this repository if you find it useful!
Built with ❤️ and ☕ by Pankaj Kumar Sahu

</div>
🔖 Version History
v1.0.0 (February 2026)
🎉 Initial release

✨ Aurora background animations

🔐 Authentication system

📊 Analytics dashboard

📁 CSV data management

🎲 3D rolling cube login page
