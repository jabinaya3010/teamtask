import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setError("Please fill in every field.");
      return;
    }
    if (form.password.length < 4) {
      setError("Password should be at least 4 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }

    const result = onRegister({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
    });

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate("/login");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2 className="page-section__title">
          <UserPlus size={22} /> Create an account
        </h2>

        <form onSubmit={handleSubmit} className="review-form">
          <label>Full name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />

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
            placeholder="At least 4 characters"
          />

          <label>Confirm password</label>
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Re-enter password"
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn btn--accent btn--full">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
}
