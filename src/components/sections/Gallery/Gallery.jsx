import Container from "@/components/layout/Container/Container";
import styles from "./Gallery.module.css";

const items = [
  {
    number: "01",
    category: "Exterior system",
    title: "Exterior Finish",
    size: "feature",
  },
  {
    number: "02",
    category: "Interior system",
    title: "Interior Refresh",
  },
  {
    number: "03",
    category: "Material care",
    title: "Seats & Upholstery",
  },
  {
    number: "04",
    category: "Deep treatment",
    title: "Carpet Cleaning",
  },
  {
    number: "05",
    category: "Exterior detail",
    title: "Wheels & Tires",
  },
  {
    number: "06",
    category: "Restoration",
    title: "Headlight Restoration",
  },
];

export default function Gallery() {
  return (
    <section id="results" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerCode}>
            <span>05</span>
            <strong>Result archive</strong>
          </div>

          <div className={styles.headerCopy}>
            <p>Work portfolio / development mode</p>

            <h2>
              Results will
              <span>speak for themselves.</span>
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Real customer transformations will replace these technical
            placeholders as the Platinum Touch portfolio grows.
          </p>
        </header>

        <div className={styles.archive}>
          {items.map((item) => (
            <article
              key={item.number}
              className={`${styles.item} ${
                item.size === "feature" ? styles.featureItem : ""
              }`}
            >
              <div className={styles.imageArea}>
                <div className={styles.gridPattern} />
                <div className={styles.surfaceShape} />
                <div className={styles.lightSweep} />

                <span className={styles.placeholderLabel}>
                  Future result image
                </span>

                <div className={styles.imageCoordinates}>
                  <span>X.{item.number}4</span>
                  <span>Y.{item.number}9</span>
                </div>

                <div className={styles.scanStatus}>
                  <span />
                  Result slot active
                </div>
              </div>

              <div className={styles.itemInfo}>
                <div className={styles.itemIndex}>
                  <span>{item.number}</span>
                  <small>{item.category}</small>
                </div>

                <h3>{item.title}</h3>

                <span className={styles.itemArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.archiveFooter}>
          <div>
            <span className={styles.activeDot} />
            <strong>Portfolio currently in development</strong>
          </div>

          <p>
            Future entries will include before-and-after imagery, treatment
            type, vehicle category, and completed service package.
          </p>
        </div>
      </Container>
    </section>
  );
}