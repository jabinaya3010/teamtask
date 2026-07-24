import React from "react";
import { formatDate, NEWS_DATA } from "../data/newsData";

export default function Hero() {
  return (
    <header className="hero">
      <span className="hero__dateline">
        {formatDate(NEWS_DATA[0].date).toUpperCase()} · EDITION 04
      </span>
      <h1 className="hero__title">4 Recent News</h1>
      <p className="hero__subtitle">
        Four stories, curated. Tap "Surprise pick" and a random headline gets
        stamped for your review.
      </p>
    </header>
  );
}
