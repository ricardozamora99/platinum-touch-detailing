"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "@/components/layout/Container/Container";
import styles from "./Gallery.module.css";

const items = [
  {
    title: "Exterior Finish",
    category: "Exterior detail",
    image: "/gallery/Exterior Finish.png",
  },
  {
    title: "Interior Refresh",
    category: "Interior detail",
    image: "/gallery/Interior Refresh.png",
  },
  {
    title: "Seats & Upholstery",
    category: "Material care",
    image: "/gallery/Seats and Upholstery.png",
  },
  {
    title: "Carpet Cleaning",
    category: "Deep clean",
    image: "/gallery/Carpet Cleaning.png",
  },
  {
    title: "Wheels & Tires",
    category: "Exterior care",
    image: "/gallery/Wheels and Tires.png",
  },
  {
    title: "Headlight Restoration",
    category: "Restoration",
    image: "/gallery/Headlight Restoration.png",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  const goNext = () => {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === items.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="results" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Results</p>

          <div className={styles.headerGrid}>
            <h2>
              Work that speaks
              <span>for itself.</span>
            </h2>

            <p>
              A closer look at the finishes, surfaces, and details that define
              the Platinum Touch experience.
            </p>
          </div>
        </header>

        <div className={styles.showcase}>
          <div className={styles.stage}>
            <Image
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.title}
              fill
              priority
              className={styles.stageImage}
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            <div className={styles.stageOverlay} />

            <div className={styles.stageContent}>
              <div>
                <span className={styles.category}>
                  {activeItem.category}
                </span>

                <h3>{activeItem.title}</h3>
              </div>

              <span className={styles.counter}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.navigation}>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous result"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next result"
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.thumbnails}>
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`${styles.thumbnail} ${
                  index === activeIndex ? styles.thumbnailActive : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
              >
                <div className={styles.thumbnailImage}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="180px"
                  />
                </div>

                <div className={styles.thumbnailText}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}