import React, { useMemo } from "react";
import Hero from "../component/Hero";
import NewsCard from "../component/NewsCard";
import { NEWS_DATA } from "../data/newsData";

export default function Home({ reviews, savedIds, onToggleSave }) {
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
    <>
      <Hero />
      <section className="news-grid">
        {NEWS_DATA.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            stats={stats[item.id]}
            isSaved={savedIds.includes(item.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </section>
    </>
  );
}
