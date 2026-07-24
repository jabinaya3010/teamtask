import React from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Rocket, Waves, TrendingUp, Clock, Star, Bookmark, MessageSquarePlus, Stamp } from "lucide-react";
import { formatDate } from "../data/newsData";

const ICONS = {
  technology: Cpu,
  space: Rocket,
  climate: Waves,
  economy: TrendingUp,
};

export function CardIllustration({ accent, iconKey, size = 72 }) {
  const Icon = ICONS[iconKey] || Cpu;
  const gradId = `g-${accent.replace("#", "")}`;
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M60 6C84 6 108 24 112 48C116 74 98 100 72 112C46 124 16 110 8 84C0 58 12 30 34 16C42 10 51 6 60 6Z"
        fill={`url(#${gradId})`}
      />
      <foreignObject x="30" y="30" width="60" height="60">
        <div className="card-illustration__icon">
          <Icon color="#14181F" size={28} strokeWidth={2} />
        </div>
      </foreignObject>
    </svg>
  );
}

export default function NewsCard({ item, stats, isSaved, isHighlighted, onToggleSave }) {
  const navigate = useNavigate();

  // Clicking the card/title/review button all go to the detail PAGE now
  const goToDetail = () => navigate(`/news/${item.id}`);

  return (
    <article className="news-card">
      {isHighlighted && (
        <div className="stamp">
          <Stamp size={16} />
          <span>PICKED</span>
        </div>
      )}

      <div className="news-card__top" onClick={goToDetail} style={{ cursor: "pointer" }}>
        <CardIllustration accent={item.accent} iconKey={item.iconKey} />
        <div className="news-card__heading">
          <span className="tag" style={{ background: item.accent }}>
            {item.category}
          </span>
          <h3 className="news-card__title">{item.title}</h3>
        </div>
      </div>

      <p className="news-card__summary">{item.summary}</p>

      <div className="news-card__meta">
        <span>{item.source}</span>
        <span className="dot">•</span>
        <span>
          <Clock size={12} /> {item.readTime}
        </span>
        <span className="dot">•</span>
        <span>{formatDate(item.date)}</span>
        {stats.count > 0 && (
          <>
            <span className="dot">•</span>
            <span className="rating">
              <Star size={12} fill="#E3A008" color="#E3A008" /> {stats.avg} ({stats.count})
            </span>
          </>
        )}
      </div>

      <div className="news-card__actions">
        <button className="btn btn--outline" onClick={goToDetail}>
          <MessageSquarePlus size={13} />
          Review
        </button>
        <button
          className={`btn btn--ghost ${isSaved ? "is-saved" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(item.id);
          }}
        >
          <Bookmark size={13} fill={isSaved ? "#E3A008" : "none"} />
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </article>
  );
}
