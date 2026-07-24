import React from "react";
import { Star, Quote, Trash2, MessageSquarePlus } from "lucide-react";
import { formatDate } from "../data/newsData";

export default function ReviewList({ reviews = [], onDelete }) {
  return (
    <div className="review-list">
      <h4 className="review-list__title">
        <MessageSquarePlus size={16} />
        {reviews.length} review{reviews.length === 1 ? "" : "s"}
      </h4>

      {reviews.length === 0 && (
        <p className="review-list__empty">
          <Quote size={14} />
          No reviews yet — be the first to weigh in.
        </p>
      )}

      {reviews.map((r) => (
        <div key={r.id} className="review-item">
          <div className="review-item__head">
            <div>
              <strong>{r.name}</strong>
              <div className="review-item__stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={12} fill={n <= r.rating ? "#E3A008" : "none"} color="#E3A008" />
                ))}
              </div>
            </div>
            {onDelete && (
              <button className="icon-btn" onClick={() => onDelete(r.id)} title="Delete review">
                <Trash2 size={14} />
              </button>
            )}
          </div>
          <p className="review-item__comment">{r.comment}</p>
          <span className="review-item__date">{formatDate(r.date)}</span>
        </div>
      ))}
    </div>
  );
}
