"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container/Container";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "/hero/washing-3.jpg",
    subtitle: "A deep clean that brings your car back to life.",
  },
  {
    image: "/hero/washing-1.jpg",
    subtitle: "Interior and exterior detailing done with care.",
  },
  {
    image: "/hero/washing-2.jpg",
    subtitle: "Mobile car care made simple, wherever you are.",
  },
];

const serviceTags = ["Interior", "Exterior", "Full Detail", "Restoration"];

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((current) => (current + 1) % slides.length);
    }, 4200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={[
              styles.imageLayer,
              index === step ? styles.activeLayer : "",
            ].join(" ")}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Mobile car detailing</p>

          <h1 className={styles.title}>
            Mobile detailing
            <span>made simple.</span>
          </h1>

          <p key={step} className={styles.subtitle}>
            {slides[step].subtitle}
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