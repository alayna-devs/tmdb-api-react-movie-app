# 🎬 Find A Movie App

A modern movie discovery application built with React, powered by The Movie Database (TMDB) API and Appwrite.

This application allows users to search for movies, explore popular titles, and track search analytics using a cloud-hosted database.

[![Alt text](/app-image.png)](https://find-a-movie.vercel.app/)

[View Here]([URL or Path](https://find-a-movie.vercel.app/))

---

## 🚀 Features

- 🔎 Search movies dynamically
- 🎥 Discover popular movies
- 🖼 Display movie posters and titles
- 📊 Track search frequency in Appwrite
- ⚡ Fast development with Vite
- 🎨 Clean UI styled with Tailwind CSS

---

## 🛠 Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS

**Backend / Database**
- Appwrite (Cloud)

**External API**
- TMDB (The Movie Database)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root of the project:

```
VITE_TMDB_API_KEY=your_tmdb_read_access_token
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

⚠️ Important:
- The file must be named `.env.local`
- It must be in the project root (not inside `src`)
- Restart the dev server after adding or changing environment variables

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/your-repository-name.git
```

2. Install dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 📄 License

MIT License

---

## 🎯 Project Purpose

This project showcases:

- API integration
- React hooks (`useState`, `useEffect`)
- Cloud database operations
- Environment variable management
- Debugging CORS and authentication issues
- Real-world frontend/backend interaction

---

Built with modern web technologies for scalable movie discovery and analytics.