"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import Container from "./Container/Container";
import styles from "./Navbar.module.css";

const links = [
  {
    label: "Services",
    href: "#services",
    sectionId: "services",
  },
  {
    label: "Results",
    href: "#results",
    sectionId: "results",
  },
  {
    label: "Process",
    href: "#process",
    sectionId: "process",
  },
  {
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
      setScrolled(window.scrollY > 18);
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
          aria-label={`${siteConfig.name} home`}
          onClick={closeMenu}
        >
          <span className={styles.brandMark}>PT</span>

          <span className={styles.brandText}>
            <strong>{siteConfig.shortName}</strong>
            <small>Car detailing</small>
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
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={styles.phoneLink}>
            {siteConfig.phone}
          </a>

          <a href="#booking" className={styles.bookingButton}>
            Book now
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
                  <span>{link.label}</span>
                  <span aria-hidden="true">→</span>
                </a>
              );
            })}

            <a
              href="#booking"
              className={styles.mobileBooking}
              onClick={closeMenu}
            >
              Book your detail
            </a>
          </nav>

          <div className={styles.mobileContact}>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </div>
        </Container>
      </div>
    </header>
  );
}