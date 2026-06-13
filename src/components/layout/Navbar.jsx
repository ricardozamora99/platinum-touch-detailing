"use client";

import { useEffect, useState } from "react";
import Container from "./Container/Container";
import styles from "./Navbar.module.css";

const links = [
  {
    code: "01",
    label: "Services",
    href: "#services",
    sectionId: "services",
  },
  {
    code: "02",
    label: "Results",
    href: "#results",
    sectionId: "results",
  },
  {
    code: "03",
    label: "Why Us",
    href: "#why-us",
    sectionId: "why-us",
  },
  {
    code: "04",
    label: "Service Area",
    href: "#service-area",
    sectionId: "service-area",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "results",
      "why-us",
      "service-area",
      "booking",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -58% 0px",
        threshold: [0.05, 0.2, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 960) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : ""
      }`}
    >
      <Container className={styles.inner}>
        <a
          href="#home"
          className={styles.brand}
          aria-label="Platinum Touch Detailing home"
          onClick={closeMenu}
        >
          <span className={styles.brandMark}>
            <span>PTD</span>
          </span>

          <span className={styles.brandText}>
            <strong>Platinum Touch</strong>
            <small>Mobile Detailing</small>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = activeSection === link.sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive ? styles.navLinkActive : ""
                }`}
              >
                <span>{link.code}</span>
                <strong>{link.label}</strong>
              </a>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <div className={styles.status}>
            <span className={styles.statusDot} />

            <span>
              Mobile unit
              <small>Des Moines metro</small>
            </span>
          </div>

          <a href="#booking" className={styles.bookingButton}>
            <span>Book now</span>
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className={`${styles.menuButton} ${
              open ? styles.menuButtonOpen : ""
            }`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          open ? styles.mobileMenuOpen : ""
        }`}
      >
        <Container className={styles.mobileInner}>
          <div className={styles.mobileHeader}>
            <span>PTD / Navigation system</span>
            <span>05 links available</span>
          </div>

          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${
                    isActive ? styles.mobileLinkActive : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span>{link.code}</span>

                  <strong>{link.label}</strong>

                  <span aria-hidden="true">↗</span>
                </a>
              );
            })}

            <a
              href="#booking"
              className={styles.mobileBooking}
              onClick={closeMenu}
            >
              <span>05</span>
              <strong>Book your detail</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <div className={styles.mobileFooter}>
            <span>Waukee</span>
            <span>West Des Moines</span>
            <span>Des Moines</span>
          </div>
        </Container>
      </div>
    </header>
  );
}