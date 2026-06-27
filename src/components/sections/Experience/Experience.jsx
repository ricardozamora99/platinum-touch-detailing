import Container from "@/components/layout/Container/Container";
import styles from "./Experience.module.css";

const features = [
  {
    title: "Mobile Convenience",
    text: "Professional detailing delivered directly to your driveway, workplace, or preferred location.",
  },
  {
    title: "Clear Pricing",
    text: "Simple starting prices based on vehicle size, service depth, and condition.",
  },
  {
    title: "Careful Work",
    text: "Focused attention on surfaces, seats, carpets, glass, wheels, and finishing details.",
  },
  {
    title: "Local Service",
    text: "Mobile detailing for Des Moines, Waukee, West Des Moines, and surrounding areas.",
  },
];

export default function Experience() {
  return (
    <section id="why-us" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Why us</p>

          <div className={styles.headerGrid}>
            <h2>
              Professional care
              <span>without the detour.</span>
            </h2>

            <p>
              Platinum Touch makes car care easier by bringing interior and
              exterior detailing directly to your location.
            </p>
          </div>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.statement}>
            <h3>
              Clean results,
              <span>simple process.</span>
            </h3>

            <p>
              Every service is adjusted to the vehicle&apos;s size, materials,
              surfaces, and current condition. The goal is simple: make your car
              feel cleaner, fresher, and better cared for.
            </p>

            <a href="#booking" className={styles.action}>
              Request mobile service
            </a>
          </div>

          <div className={styles.features}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.feature}>
                <span />

                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}