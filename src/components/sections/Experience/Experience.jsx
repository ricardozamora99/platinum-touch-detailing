import Container from "@/components/layout/Container/Container";
import styles from "./Experience.module.css";

const features = [
  {
    code: "01",
    title: "Mobile Convenience",
    text: "Professional detailing delivered directly to your selected location.",
  },
  {
    code: "02",
    title: "Professional Products",
    text: "Purpose-selected products for interior and exterior vehicle surfaces.",
  },
  {
    code: "03",
    title: "Careful Attention",
    text: "Focused treatment of materials, surfaces, seams, controls, and finishes.",
  },
  {
    code: "04",
    title: "Transparent Pricing",
    text: "Clear starting prices based on vehicle size and current condition.",
  },
];

const inspectionData = [
  {
    label: "Interior",
    value: "Active",
  },
  {
    label: "Exterior",
    value: "Active",
  },
  {
    label: "Mobility",
    value: "100%",
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionRail}>
          <div>
            <span>03</span>
            <strong>Mobile service architecture</strong>
          </div>

          <span>PTD / On-location vehicle care</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.visualHeader}>
              <div>
                <span>PTD field unit</span>
                <strong>Mobile service environment</strong>
              </div>

              <span className={styles.status}>Operational</span>
            </div>

            <div className={styles.stage}>
              <div className={styles.stageGrid} />
              <div className={styles.surface} />
              <div className={styles.surfaceReflection} />
              <div className={styles.scanLine} />

              <span className={`${styles.coordinate} ${styles.coordinateOne}`}>
                X.042
              </span>

              <span className={`${styles.coordinate} ${styles.coordinateTwo}`}>
                Y.091
              </span>

              <span
                className={`${styles.coordinate} ${styles.coordinateThree}`}
              >
                MOBILE
              </span>

              <div className={styles.largeType}>
                <span>On</span>
                <strong>Site</strong>
              </div>

              <div className={styles.visualCaption}>
                <span>Future detailing image</span>
                <strong>Professional care at your location</strong>
              </div>
            </div>

            <div className={styles.inspectionRail}>
              {inspectionData.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Premium care, brought to you
            </p>

            <h2>
              Professional detailing.
              <span>Without the detour.</span>
            </h2>

            <div className={styles.copy}>
              <p>
                Platinum Touch Detailing brings professional interior and
                exterior vehicle care directly to your driveway, workplace, or
                preferred location.
              </p>

              <p>
                Every service is adapted to the vehicle&apos;s materials,
                surfaces, size, and current condition.
              </p>
            </div>

            <div className={styles.features}>
              {features.map((feature) => (
                <article key={feature.code} className={styles.feature}>
                  <span className={styles.featureCode}>{feature.code}</span>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <a href="#booking" className={styles.action}>
              <span>Request mobile service</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}