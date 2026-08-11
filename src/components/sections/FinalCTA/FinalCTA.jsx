import Image from "next/image";
import { siteConfig } from "@/lib/site";
import Container from "@/components/layout/Container/Container";
import styles from "./FinalCTA.module.css";

const whatsappHref =
  "https://wa.me/15156729711?text=Hi%2C%20I%27d%20like%20to%20book%20a%20mobile%20detailing%20service.";

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

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappAction}
              >
                <Image
                  src="/images/whatsapp-icon.png"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.whatsappIcon}
                />

                Chat on WhatsApp
              </a>

              <a
                href={siteConfig.phoneHref}
                className={styles.secondaryAction}
              >
                Call for a quote
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