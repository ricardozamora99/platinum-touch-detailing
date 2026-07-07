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
    "process",
    "service-area",
    "booking",
  ];

  const updateActiveSection = () => {
    const viewportPoint = window.innerHeight * 0.45;

    let currentSection = "home";

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= viewportPoint && rect.bottom >= viewportPoint) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  };

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
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
          <span className={styles.brandLogoWrap}>
            <img
              src="/brand/logo-car.png"
              alt=""
              className={styles.brandLogo}
            />
          </span>

          <span className={styles.brandText}>
            <strong>{siteConfig.shortName}</strong>
            <small>Excellence in every detail</small>
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