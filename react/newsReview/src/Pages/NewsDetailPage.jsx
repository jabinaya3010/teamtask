import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Send, Clock, Bookmark } from "lucide-react";
import { NEWS_DATA, formatDate } from "../data/newsData";
import { CardIllustration } from "../component/NewsCard";
import ReviewList from "../component/ReviewList";

export default function NewsDetailPage({ reviews, savedIds, onSubmitReview, onDeleteReview, onToggleSave }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = NEWS_DATA.find((n) => n.id === id);

  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });
  const commentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <section className="page-section">
        <p className="empty-state">That story doesn't exist.</p>
        <button className="btn btn--outline" onClick={() => navigate("/")}>
          <ArrowLeft size={14} /> Back home
        </button>
      </section>
    );
  }

  const itemReviews = reviews[item.id] || [];
  const isSaved = savedIds.includes(item.id);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.comment.trim()) return;
    onSubmitReview(item.id, {
      id: `${item.id}-${Date.now()}`,
      name: form.name.trim() || "Anonymous reader",
      rating: form.rating,
      comment: form.comment.trim(),
      date: new Date().toISOString().slice(0, 10),
    });
    setForm({ name: "", rating: 5, comment: "" });
  }

  return (
    <section className="news-detail">
      <button className="btn btn--outline back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={14} /> Back
      </button>

      <div className="news-detail__head">
        <CardIllustration accent={item.accent} iconKey={item.iconKey} size={96} />
        <div>
          <span className="tag" style={{ background: item.accent }}>
            {item.category}
          </span>
          <h1 className="news-detail__title">{item.title}</h1>
          <div className="news-card__meta">
            <span>{item.source}</span>
            <span className="dot">•</span>
            <span>
              <Clock size={12} /> {item.readTime}
            </span>
            <span className="dot">•</span>
            <span>{formatDate(item.date)}</span>
          </div>
        </div>
      </div>

      <p className="news-detail__summary">{item.summary}</p>

      {item.highlights && item.highlights.length > 0 && (
        <div className="news-detail__highlights">
          <h2 className="news-detail__section-title">Key points</h2>
          <ul>
            {item.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        className={`btn btn--ghost ${isSaved ? "is-saved" : ""}`}
        onClick={() => onToggleSave(item.id)}
      >
        <Bookmark size={13} fill={isSaved ? "#E3A008" : "none"} />
        {isSaved ? "Saved" : "Save this story"}
      </button>

      {item.content && item.content.length > 0 && (
        <div className="news-detail__article">
          <h2 className="news-detail__section-title">Full story</h2>
          {item.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      <h2 className="news-detail__section-title">Leave a review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>Your name (optional)</label>
        <input
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Anonymous reader"
        />

        <label>Rating</label>
        <div className="star-picker">
          {[1, 2, 3, 4, 5].map((n) => (
            <button type="button" key={n} onClick={() => setForm((f) => ({ ...f, rating: n }))}>
              <Star size={22} fill={n <= form.rating ? "#E3A008" : "none"} color="#E3A008" />
            </button>
          ))}
        </div>

        <label>Review</label>
        <textarea
          ref={commentRef}
          rows={4}
          value={form.comment}
          onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
          placeholder="What did you think of this story?"
          required
        />

        <button type="submit" className="btn btn--accent btn--full">
          <Send size={15} />
          Post review
        </button>
      </form>

      <ReviewList reviews={itemReviews} onDelete={(reviewId) => onDeleteReview(item.id, reviewId)} />
    </section>
  );
}
