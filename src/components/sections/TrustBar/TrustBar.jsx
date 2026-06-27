import styles from "./TrustBar.module.css";

const items = [
  {
    title: "Mobile service",
    text: "We come to your location",
  },
  {
    title: "Clear packages",
    text: "Starting from $120",
  },
  {
    title: "Interior detail",
    text: "Clean surfaces, seats, and carpets",
  },
  {
    title: "Exterior finish",
    text: "Hand wash and careful finish",
  },
  {
    title: "Local coverage",
    text: "Des Moines metro area",
  },
];

function TrustItems({ hidden = false }) {
  return (
    <div className={styles.group} aria-hidden={hidden}>
      {items.map((item) => (
        <article key={`${hidden}-${item.title}`} className={styles.item}>
          <span className={styles.dot} />

          <div>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Service advantages">
      <div className={styles.label}>
        <span>What you get</span>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track}>
          <TrustItems />
          <TrustItems hidden />
        </div>
      </div>
    </section>
  );
}