import Container from "@/components/layout/Container/Container";
import styles from "./Hero.module.css";

const metrics = [
  {
    value: "$120",
    label: "Packages from",
  },
  {
    value: "03",
    label: "Primary service cities",
  },
  {
    value: "100%",
    label: "Mobile service",
  },
];

const serviceTags = [
  "Interior",
  "Exterior",
  "Protection",
  "Restoration",
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gridBackground} />
      <div className={styles.ambientLight} />
      <div className={styles.verticalCode}>
        PTD / DES MOINES / MOBILE UNIT
      </div>

      <Container className={styles.container}>
        <div className={styles.topRail}>
          <div className={styles.availability}>
            <span className={styles.availabilityDot} />
            Accepting new appointments
          </div>

          <span>Waukee / West Des Moines / Des Moines</span>
          <span>Est. 2026</span>
        </div>

        <div className={styles.main}>
          <div className={styles.copy}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <strong>Mobile auto detailing</strong>
            </div>

            <h1>
              Precision care.
              <span>Delivered.</span>
            </h1>

            <p className={styles.description}>
              Professional interior and exterior detailing brought directly to
              your driveway, workplace, or preferred location.
            </p>

            <div className={styles.actions}>
              <a href="#booking" className={styles.primaryButton}>
                <span>Book your detail</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href="#services" className={styles.secondaryButton}>
                Explore service systems
              </a>
            </div>

            <div className={styles.metrics}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.showcase}>
            <div className={styles.showcaseHeader}>
              <div>
                <span>PTD visual system</span>
                <strong>Vehicle finish preview</strong>
              </div>

              <span className={styles.previewState}>Preview</span>
            </div>

            <div className={styles.stage}>
              <div className={styles.surfaceBase} />
              <div className={styles.surfaceHighlight} />
              <div className={styles.lightSweep} />

              <div className={styles.largeMark}>PTD</div>

              <div className={styles.surfaceLabel}>
                <span>Future vehicle imagery</span>
                <strong>Precision finish / mobile care</strong>
              </div>

              <div className={styles.detailPanel}>
                <span>Service profile</span>

                <div>
                  <strong>Premium mobile detailing</strong>
                  <small>
                    Interior systems, exterior finishing, and targeted
                    restoration.
                  </small>
                </div>
              </div>

              <div className={styles.cornerIndex}>
                <span>X.041</span>
                <span>Y.088</span>
              </div>
            </div>

            <div className={styles.tagRail}>
              {serviceTags.map((tag, index) => (
                <div key={tag} className={styles.tag}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{tag}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomRail}>
          <span>Excellence in every detail</span>

          <a href="#services" aria-label="Continue to services">
            <span />
          </a>

          <span>Precision / mobility / finish</span>
        </div>
      </Container>
    </section>
  );
}