import Container from "@/components/layout/Container/Container";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Choose your service",
    text: "Select the package that fits your vehicle and add any extra service you may need.",
  },
  {
    number: "02",
    title: "Send vehicle details",
    text: "Share your vehicle type, location, condition, preferred date, and any specific concerns.",
  },
  {
    number: "03",
    title: "Confirm your appointment",
    text: "Availability, estimated duration, and final pricing are reviewed before the service.",
  },
  {
    number: "04",
    title: "We come to you",
    text: "Platinum Touch arrives at your location and completes the scheduled mobile detail.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Process</p>

          <div className={styles.headerGrid}>
            <h2>
              Booking your detail
              <span>is simple.</span>
            </h2>

            <p>
              A clear four-step process from choosing your service to getting
              your vehicle detailed at your location.
            </p>
          </div>
        </header>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <article key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <strong>Appointments required</strong>

          <p>
            Weather, distance, service complexity, and vehicle condition may
            affect scheduling and expected completion time.
          </p>

          <a href="#booking">Start booking</a>
        </div>
      </Container>
    </section>
  );
}