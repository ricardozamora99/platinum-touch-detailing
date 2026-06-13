import Container from "@/components/layout/Container/Container";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="booking" className={styles.section}>
      <div className={styles.gridPattern} />
      <div className={styles.largeCode} aria-hidden="true">
        BOOK
      </div>

      <Container>
        <div className={styles.topRail}>
          <div>
            <span className={styles.statusDot} />
            <strong>Appointment system ready</strong>
          </div>

          <span>PTD / Booking request / 09</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.heading}>
            <p>Ready to restore your vehicle?</p>

            <h2>
              Your vehicle deserves
              <span>more than a basic wash.</span>
            </h2>
          </div>

          <div className={styles.actionPanel}>
            <div className={styles.actionHeader}>
              <span>Request channel</span>
              <strong>Direct contact</strong>
            </div>

            <p>
              Request your mobile detailing appointment with Platinum Touch
              Detailing. Vehicle details and condition will be reviewed before
              final confirmation.
            </p>

            <div className={styles.actions}>
              <a
                href="mailto:contact@example.com"
                className={styles.primaryAction}
              >
                <span>Book your detail</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="tel:+10000000000"
                className={styles.secondaryAction}
              >
                <span>Call for a quote</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.contactData}>
              <div>
                <span>Email</span>
                <strong>Coming soon</strong>
              </div>

              <div>
                <span>Telephone</span>
                <strong>Coming soon</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRail}>
          <span>Appointment notice</span>

          <p>
            Final pricing and expected service time may vary according to
            vehicle size, condition, location, and requested procedures.
          </p>
        </div>
      </Container>
    </section>
  );
}