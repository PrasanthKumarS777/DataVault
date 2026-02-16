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

