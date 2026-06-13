import styles from "./TrustBar.module.css";

const items = [
  {
    code: "01",
    title: "Mobile unit",
    text: "We come to your location",
  },
  {
    code: "02",
    title: "Clear pricing",
    text: "Packages from $120",
  },
  {
    code: "03",
    title: "Interior systems",
    text: "Deep surface treatment",
  },
  {
    code: "04",
    title: "Exterior finish",
    text: "Hand-cleaned and protected",
  },
  {
    code: "05",
    title: "Des Moines metro",
    text: "Local mobile coverage",
  },
];

function TrustItems({ hidden = false }) {
  return (
    <div className={styles.group} aria-hidden={hidden}>
      {items.map((item) => (
        <article key={`${hidden}-${item.code}`} className={styles.item}>
          <span className={styles.code}>{item.code}</span>

          <div>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>

          <span className={styles.marker} />
        </article>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Service advantages">
      <div className={styles.label}>
        <span>PTD</span>
        <strong>Service standard</strong>
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