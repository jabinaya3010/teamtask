import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import SavedNews from "./Pages/SavedNews";
import NewsDetailPage from "./Pages/NewsDetailPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./App.css";

const REVIEWS_KEY = "news-reviews";
const SAVED_KEY = "news-saved";
const USERS_KEY = "news-users";
const CURRENT_USER_KEY = "news-current-user";

export default function App() {
  const [reviews, setReviews] = useState({});
  const [savedIds, setSavedIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const r = localStorage.getItem(REVIEWS_KEY);
      const s = localStorage.getItem(SAVED_KEY);
      const u = localStorage.getItem(USERS_KEY);
      const cu = localStorage.getItem(CURRENT_USER_KEY);
      if (r) setReviews(JSON.parse(r));
      if (s) setSavedIds(JSON.parse(s));
      if (u) setUsers(JSON.parse(u));
      if (cu) setCurrentUser(JSON.parse(cu));
    } catch (e) {
      console.error("Could not load saved data", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    else localStorage.removeItem(CURRENT_USER_KEY);
  }, [currentUser]);

  const handleSubmitReview = useCallback((newsId, entry) => {
    setReviews((prev) => ({ ...prev, [newsId]: [entry, ...(prev[newsId] || [])] }));
  }, []);

  const handleDeleteReview = useCallback((newsId, reviewId) => {
    setReviews((prev) => ({
      ...prev,
      [newsId]: (prev[newsId] || []).filter((r) => r.id !== reviewId),
    }));
  }, []);

  const handleToggleSave = useCallback((newsId) => {
    setSavedIds((prev) =>
      prev.includes(newsId) ? prev.filter((id) => id !== newsId) : [...prev, newsId]
    );
  }, []);

  const handleRegister = useCallback(
    ({ name, email, password }) => {
      if (users.some((u) => u.email === email)) {
        return { ok: false, message: "An account with this email already exists." };
      }
      const newUser = { id: `u-${Date.now()}`, name, email, password };
      setUsers((prev) => [...prev, newUser]);
      return { ok: true }; // registered, but must log in next
    },
    [users]
  );

  const handleLogin = useCallback(
    (email, password) => {
      const match = users.find((u) => u.email === email && u.password === password);
      if (!match) return { ok: false, message: "Incorrect email or password." };
      setCurrentUser({ id: match.id, name: match.name, email: match.email });
      return { ok: true };
    },
    [users]
  );

  const handleLogout = useCallback(() => setCurrentUser(null), []);

  if (!loaded) return null;

  // Blocks access until logged in -> sends to /login (which links to /register)
  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to="/login" replace />;
  }

  return (
    <div className="app">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />

      <main className="app__content">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                <Home reviews={reviews} savedIds={savedIds} onToggleSave={handleToggleSave} />
              </RequireAuth>
            }
          />
          <Route
            path="/news/:id"
            element={
              <RequireAuth>
                <NewsDetailPage
                  reviews={reviews}
                  savedIds={savedIds}
                  onSubmitReview={handleSubmitReview}
                  onDeleteReview={handleDeleteReview}
                  onToggleSave={handleToggleSave}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/reviews"
            element={
              <RequireAuth>
                <Reviews reviews={reviews} onDeleteReview={handleDeleteReview} />
              </RequireAuth>
            }
          />
          <Route
            path="/saved"
            element={
              <RequireAuth>
                <SavedNews reviews={reviews} savedIds={savedIds} onToggleSave={handleToggleSave} />
              </RequireAuth>
            }
          />

          <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
