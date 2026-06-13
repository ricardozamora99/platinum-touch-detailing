import Container from "@/components/layout/Container/Container";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    number: "01",
    tag: "Mobility",
    title: "Mobile Convenience",
    text: "Professional detailing delivered directly to your driveway, workplace, or preferred service location.",
  },
  {
    number: "02",
    tag: "Interior",
    title: "Careful Interior Work",
    text: "Focused cleaning of seats, carpets, panels, glass, vents, buttons, seams, and high-contact surfaces.",
  },
  {
    number: "03",
    tag: "Exterior",
    title: "Complete Exterior Care",
    text: "Premium foam washing, wheel treatment, tire finishing, glass cleaning, and optional paint protection.",
  },
  {
    number: "04",
    tag: "Assessment",
    title: "Service Based on Condition",
    text: "Recommendations and final pricing are adapted to the vehicle's size, materials, condition, and required treatment.",
  },
];

const standards = [
  {
    label: "Service format",
    value: "Mobile",
  },
  {
    label: "Vehicle review",
    value: "Condition based",
  },
  {
    label: "Package pricing",
    value: "From $120",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.section}>
      <Container>
        <div className={styles.sectionRail}>
          <div>
            <span>07</span>
            <strong>Why Platinum Touch</strong>
          </div>

          <span>PTD / Service standard analysis</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Beyond conventional vehicle washing</p>

            <h2>
              More than
              <span>a basic wash.</span>
            </h2>

            <p className={styles.description}>
              Platinum Touch Detailing focuses on the materials, surfaces,
              difficult areas, and finishing procedures that automated and
              basic vehicle washes frequently overlook.
            </p>

            <a href="#booking" className={styles.action}>
              <span>Request your detail</span>
              <span aria-hidden="true">↗</span>
            </a>

            <div className={styles.standardPanel}>
              <div className={styles.standardHeader}>
                <span>PTD standard profile</span>
                <strong>Operational</strong>
              </div>

              <div className={styles.standardGrid}>
                {standards.map((standard) => (
                  <div key={standard.label}>
                    <span>{standard.label}</span>
                    <strong>{standard.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.reasons}>
            {reasons.map((reason) => (
              <article key={reason.number} className={styles.reason}>
                <div className={styles.reasonCode}>
                  <span>{reason.number}</span>
                  <small>{reason.tag}</small>
                </div>

                <div className={styles.reasonContent}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>

                <span className={styles.reasonArrow} aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.bottomRail}>
          <div>
            <span className={styles.statusDot} />
            <strong>Attention assigned according to vehicle condition</strong>
          </div>

          <p>
            Every appointment begins with a review of the requested procedures,
            vehicle category, and current condition.
          </p>
        </div>
      </Container>
    </section>
  );
}