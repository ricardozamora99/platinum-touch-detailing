import Container from "@/components/layout/Container/Container";
import styles from "./Gallery.module.css";

const items = [
  {
    title: "Exterior Finish",
    category: "Exterior detail",
    size: "feature",
  },
  {
    title: "Interior Refresh",
    category: "Interior detail",
  },
  {
    title: "Seats & Upholstery",
    category: "Material care",
  },
  {
    title: "Carpet Cleaning",
    category: "Deep clean",
  },
  {
    title: "Wheels & Tires",
    category: "Exterior care",
  },
  {
    title: "Headlight Restoration",
    category: "Restoration",
  },
];

export default function Gallery() {
  return (
    <section id="results" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Results</p>

          <div className={styles.headerGrid}>
            <h2>
              Work that speaks
              <span>for itself.</span>
            </h2>

            <p>
              Real before-and-after photos will be added as Platinum Touch
              builds its customer portfolio.
            </p>
          </div>
        </header>

        <div className={styles.galleryGrid}>
          {items.map((item) => (
            <article
              key={item.title}
              className={`${styles.item} ${
                item.size === "feature" ? styles.featureItem : ""
              }`}
            >
              <div className={styles.imagePlaceholder}>
                <div>
                  <span>{item.category}</span>
                  <strong>Future result image</strong>
                </div>
              </div>

              <div className={styles.itemInfo}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <strong>Portfolio in progress</strong>

          <p>
            This section is ready for real customer images: exterior finishes,
            interior resets, upholstery care, wheels, carpets, and restoration
            results.
          </p>
        </div>
      </Container>
    </section>
  );
}