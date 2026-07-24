import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    const result = onLogin(form.email.trim().toLowerCase(), form.password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate("/");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2 className="page-section__title">
          <LogIn size={22} /> Log in
        </h2>

        <form onSubmit={handleSubmit} className="review-form">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Your password"
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn btn--accent btn--full">
            Log in
          </button>
        </form>

        <p className="auth-switch">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
