"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container/Container";
import styles from "./Hero.module.css";

const subtitles = [
  "Interior and exterior detailing brought directly to your driveway.",
  "A cleaner, fresher car without leaving home.",
  "Serving Des Moines, Waukee, West Des Moines, and surrounding areas.",
  "Professional mobile car care made simple.",
];

const serviceTags = ["Interior", "Exterior", "Full Detail", "Restoration"];

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((current) => (current + 1) % subtitles.length);
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Mobile car detailing</p>

          <h1 className={styles.title}>
            Mobile detailing
            <span>made simple.</span>
          </h1>

          <p key={step} className={styles.subtitle}>
            {subtitles[step]}
          </p>

          <div className={styles.actions}>
            <a href="#booking" className={styles.primaryButton}>
              Book now
            </a>

            <a href="#services" className={styles.secondaryButton}>
              View services
            </a>
          </div>

          <div className={styles.serviceTags}>
            {serviceTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className={styles.locationRail}>
            <span>Waukee</span>
            <span>West Des Moines</span>
            <span>Des Moines</span>
            <span>Surrounding areas</span>
          </div>
        </div>
      </Container>
    </section>
  );
}