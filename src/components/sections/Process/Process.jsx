import Container from "@/components/layout/Container/Container";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    state: "Input",
    title: "Choose Your Service",
    text: "Select the detailing package and additional procedures that match your vehicle's needs.",
  },
  {
    number: "02",
    state: "Review",
    title: "Send Vehicle Details",
    text: "Provide vehicle type, location, condition, preferred date, and any specific concerns.",
  },
  {
    number: "03",
    state: "Confirm",
    title: "Receive Confirmation",
    text: "Availability, expected service duration, and estimated pricing are reviewed and confirmed.",
  },
  {
    number: "04",
    state: "Deploy",
    title: "We Come to You",
    text: "The mobile detailing service arrives at your selected location and completes the scheduled work.",
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerCode}>
            <span>06</span>
            <strong>Booking workflow</strong>
          </div>

          <div className={styles.headerCopy}>
            <p>Four-stage service deployment</p>

            <h2>
              From request
              <span>to completed finish.</span>
            </h2>
          </div>

          <a href="#booking" className={styles.headerAction}>
            <span>Start booking</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className={styles.workflow}>
          <div className={styles.progressLine}>
            <span className={styles.progressPulse} />
          </div>

          {steps.map((step) => (
            <article key={step.number} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.number}>{step.number}</span>
                <span className={styles.state}>{step.state}</span>
              </div>

              <div className={styles.node}>
                <span />
              </div>

              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <span className={styles.stepArrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className={styles.processFooter}>
          <div>
            <span className={styles.statusDot} />
            <strong>Appointments required</strong>
          </div>

          <p>
            Weather, distance, service complexity, and vehicle condition may
            affect scheduling and expected completion time.
          </p>
        </div>
      </Container>
    </section>
  );
}