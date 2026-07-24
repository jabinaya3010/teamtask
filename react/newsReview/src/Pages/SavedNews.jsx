import React, { useMemo } from "react";
import { NEWS_DATA } from "../data/newsData";
import NewsCard from "../component/NewsCard";

export default function SavedNews({ reviews, savedIds, onToggleSave }) {
  const savedItems = NEWS_DATA.filter((item) => savedIds.includes(item.id));

  const stats = useMemo(() => {
    const map = {};
    for (const item of NEWS_DATA) {
      const list = reviews[item.id] || [];
      map[item.id] = {
        count: list.length,
        avg: list.length ? (list.reduce((s, r) => s + r.rating, 0) / list.length).toFixed(1) : null,
      };
    }
    return map;
  }, [reviews]);

  return (
    <section className="page-section">
      <h2 className="page-section__title">Saved News</h2>

      {savedItems.length === 0 && (
        <p className="empty-state">Nothing saved yet. Tap "Save" on a story from Home.</p>
      )}

      <div className="news-grid">
        {savedItems.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            stats={stats[item.id]}
            isSaved={true}
            isHighlighted={false}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </section>
  );
}
