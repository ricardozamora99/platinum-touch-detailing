import { siteConfig } from "@/lib/site";
import Container from "./Container/Container";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const navigation = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Results",
    href: "#results",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "Service Area",
    href: "#service-area",
  },
];

const services = [
  "Exterior Detail",
  "Interior Detail",
  "Full Detail",
  "Pet Hair Removal",
  "Headlight Restoration",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <a
              href="#home"
              className={styles.brand}
              aria-label={`${siteConfig.name} home`}
            >
              <span className={styles.brandMark}>PT</span>

              <span className={styles.brandText}>
                <strong>{siteConfig.shortName}</strong>
                <small>Car detailing</small>
              </span>
            </a>

            <h2>
              Clean cars.
              <span>Simple booking.</span>
            </h2>

            <p>
              Professional mobile car detailing for drivers who want their
              vehicle to feel clean, fresh, and cared for without the hassle.
            </p>

            <a href="#booking" className={styles.footerAction}>
              Request an appointment
            </a>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Navigation</h3>

              <nav className={styles.linkList} aria-label="Footer navigation">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}

                <a href="#booking">Book Now</a>
              </nav>
            </div>

            <div className={styles.column}>
              <h3>Services</h3>

              <div className={styles.linkList}>
                {services.map((service) => (
                  <a key={service} href="#services">
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.column}>
              <h3>Contact</h3>

              <div className={styles.contactList}>
                <a href={siteConfig.phoneHref}>
                  <span>Phone</span>
                  <strong>{siteConfig.phone}</strong>
                </a>

                <a href={siteConfig.emailHref}>
                  <span>Email</span>
                  <strong>{siteConfig.email}</strong>
                </a>

                <div>
                  <span>Service area</span>
                  <strong>Des Moines metro</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            <p>
              Starting prices may vary by vehicle size, condition, and service
              needs.
            </p>
          </div>

          <div className={styles.creator}>
            <span>Designed and developed by Ricardo Zamora</span>

            <div className={styles.creatorLinks}>
              <a
                href="https://www.instagram.com/zamoraricardo99/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/ricardo-zamora-80b714193/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/ricardozamora99"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}