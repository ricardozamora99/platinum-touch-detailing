import Container from "./Container/Container";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const navigation = [
  {
    code: "01",
    label: "Services",
    href: "#services",
  },
  {
    code: "02",
    label: "Results",
    href: "#results",
  },
  {
    code: "03",
    label: "Why Us",
    href: "#why-us",
  },
  {
    code: "04",
    label: "Service Area",
    href: "#service-area",
  },
];

const services = [
  "Essential Detail",
  "Premium Detail",
  "Pet Hair Removal",
  "Headlight Restoration",
  "Ozone Odor Treatment",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundCode} aria-hidden="true">
        PTD
      </div>

      <Container>
        <div className={styles.systemRail}>
          <div>
            <span className={styles.statusDot} />
            <strong>Platinum Touch Detailing</strong>
          </div>

          <span>Mobile detailing system / Des Moines metro</span>
          <span>PTD — {currentYear}</span>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <a
              href="#home"
              className={styles.brand}
              aria-label="Platinum Touch Detailing home"
            >
              <span className={styles.brandMark}>PTD</span>

              <span className={styles.brandText}>
                <strong>Platinum Touch</strong>
                <small>Mobile Detailing</small>
              </span>
            </a>

            <h2>
              Precision care.
              <span>Delivered.</span>
            </h2>

            <p>
              Professional mobile interior and exterior detailing throughout
              Waukee, West Des Moines, Des Moines, and surrounding areas.
            </p>

            <a href="#booking" className={styles.footerAction}>
              <span>Request an appointment</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.navigationColumn}>
            <div className={styles.columnHeader}>
              <span>01</span>
              <strong>Navigation</strong>
            </div>

            <nav className={styles.linkList} aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  <span>{item.code}</span>
                  <strong>{item.label}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}

              <a href="#booking">
                <span>05</span>
                <strong>Book Now</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>

          <div className={styles.servicesColumn}>
            <div className={styles.columnHeader}>
              <span>02</span>
              <strong>Service Systems</strong>
            </div>

            <div className={styles.serviceList}>
              {services.map((service, index) => (
                <a key={service} href="#services">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactColumn}>
            <div className={styles.columnHeader}>
              <span>03</span>
              <strong>Contact</strong>
            </div>

            <div className={styles.contactList}>
              <div>
                <span>Telephone</span>
                <strong>Coming soon</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>Coming soon</strong>
              </div>

              <div>
                <span>Instagram</span>
                <strong>Coming soon</strong>
              </div>

              <div>
                <span>Facebook</span>
                <strong>Coming soon</strong>
              </div>
            </div>

            <div className={styles.coverage}>
              <span>Coverage area</span>

              <p>
                Waukee / West Des Moines / Des Moines / Surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div className={styles.legalRail}>
          <p>
            © {currentYear} Platinum Touch Detailing. All rights reserved.
          </p>

          <p>
            Starting prices are subject to vehicle size, inspection, and
            condition.
          </p>
        </div>

        <div className={styles.creatorRail}>
          <div className={styles.creatorLabel}>
            <span>Web system</span>
            <strong>Designed and developed by Ricardo Zamora</strong>
          </div>

          <div className={styles.creatorLinks}>
            <a
              href="https://www.linkedin.com/in/ricardo-zamora-80b714193/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/ricardozamora99"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}