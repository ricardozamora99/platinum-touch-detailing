import { siteConfig } from "@/lib/site";
import Container from "@/components/layout/Container/Container";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="booking" className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Book your detail</p>

            <h2>
              Ready for a
              <span>cleaner car?</span>
            </h2>

            <p className={styles.description}>
              Request your mobile detailing appointment with Platinum Touch.
              Vehicle size, condition, location, and selected service will be
              reviewed before final confirmation.
            </p>
          </div>

          <div className={styles.panel}>
            <h3>Contact us directly</h3>

            <p>
              Send a booking request or call for availability in the Des Moines
              metro area.
            </p>

            <div className={styles.actions}>
              <a
                href={`${siteConfig.emailHref}?subject=Mobile%20Detailing%20Appointment%20Request`}
                className={styles.primaryAction}
              >
                Book your detail
              </a>

              <a href={siteConfig.phoneHref} className={styles.secondaryAction}>
                Call for a quote
              </a>
            </div>

            <div className={styles.contactData}>
              <a href={siteConfig.emailHref}>
                <span>Email</span>
                <strong>{siteConfig.email}</strong>
              </a>

              <a href={siteConfig.phoneHref}>
                <span>Phone</span>
                <strong>{siteConfig.phone}</strong>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.notice}>
          <strong>Appointment notice</strong>

          <p>
            Final pricing and service time may vary according to vehicle size,
            condition, location, and requested procedures.
          </p>
        </div>
      </Container>
    </section>
  );
}