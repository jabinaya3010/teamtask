import React from "react";
import { NEWS_DATA } from "../data/newsData";
import ReviewList from "../component/ReviewList";

export default function Reviews({ reviews, onDeleteReview }) {
  const articlesWithReviews = NEWS_DATA.filter((item) => (reviews[item.id] || []).length > 0);

  return (
    <section className="page-section">
      <h2 className="page-section__title">All Reviews</h2>

      {articlesWithReviews.length === 0 && (
        <p className="empty-state">No reviews posted yet. Go to Home and review a story.</p>
      )}

      {articlesWithReviews.map((item) => (
        <div key={item.id} className="reviews-group">
          <div className="reviews-group__head">
            <span className="tag" style={{ background: item.accent }}>
              {item.category}
            </span>
            <h3>{item.title}</h3>
          </div>
          <ReviewList
            reviews={reviews[item.id]}
            onDelete={(reviewId) => onDeleteReview(item.id, reviewId)}
          />
        </div>
      ))}
    </section>
  );
}
