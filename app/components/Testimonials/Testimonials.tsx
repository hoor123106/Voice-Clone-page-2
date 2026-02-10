"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: '"This book is a game-changer. I always felt my ideas were overlooked, but now I lead conversations with absolute authority."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "https://i.pravatar.cc/150?u=mark",
  },
  {
    quote: '"The techniques in Voice Control are truly transformational. My team noticed the change in my leadership style within a week!"',
    name: "Sarah Jenkins",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: '"I finally have the confidence to speak up in executive meetings. This is the best professional investment I’ve made."',
    name: "James Wilson",
    role: "VP of Operations",
    image: "/images/testimonial.jpg",
  },
  {
    quote: '"Simple, actionable, and effective. The framework provided here is something I use every single day in my stand-ups."',
    name: "Priya Sharma",
    role: "Software Lead",
    image: "https://i.pravatar.cc/150?u=priya",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-play logic: Moves every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]); // Reset timer when index changes

  return (
    <section className={styles.section}>
      <div className={styles.sliderWrapper}>
        {/* Left Arrow */}
        <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.viewPort}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div className={styles.slide} key={index}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}