import Container from "@/components/layout/Container/Container";
import styles from "./ServiceArea.module.css";

const cities = [
  {
    code: "A–01",
    city: "Waukee",
    status: "Primary area",
  },
  {
    code: "A–02",
    city: "West Des Moines",
    status: "Primary area",
  },
  {
    code: "A–03",
    city: "Des Moines",
    status: "Primary area",
  },
  {
    code: "A–04",
    city: "Surrounding Areas",
    status: "Confirm availability",
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerCode}>
            <span>08</span>
            <strong>Service coverage</strong>
          </div>

          <div className={styles.headerCopy}>
            <p>Mobile deployment area</p>

            <h2>
              Des Moines
              <span>metro coverage.</span>
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Mobile detailing is available by appointment throughout the primary
            service area. Locations outside the listed zone may require
            confirmation.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.locationPanel}>
            <div className={styles.panelHeader}>
              <div>
                <span>PTD coverage directory</span>
                <strong>Active service locations</strong>
              </div>

              <span className={styles.liveState}>Online</span>
            </div>

            <div className={styles.cityList}>
              {cities.map((location) => (
                <article key={location.code} className={styles.city}>
                  <span className={styles.cityCode}>{location.code}</span>

                  <strong>{location.city}</strong>

                  <span className={styles.cityStatus}>{location.status}</span>

                  <span className={styles.cityArrow} aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>

            <div className={styles.availabilityNote}>
              <span className={styles.statusDot} />

              <p>
                Availability may depend on travel distance, weather, appointment
                schedule, and the selected service package.
              </p>
            </div>
          </div>

          <div className={styles.map}>
            <div className={styles.mapGrid} />
            <div className={styles.mapGlow} />

            <svg
              className={styles.routeMap}
              viewBox="0 0 700 540"
              role="img"
              aria-label="Abstract Des Moines metro service coverage map placeholder"
            >
              <path
                className={styles.routePrimary}
                d="M78 362 C146 326 170 245 240 232 C304 220 338 274 399 253 C464 231 496 151 620 124"
              />

              <path
                className={styles.routeSecondary}
                d="M100 113 C160 153 191 185 237 218 C289 255 345 296 422 333 C485 363 529 408 616 436"
              />

              <path
                className={styles.routeSecondary}
                d="M127 453 C197 404 246 384 311 361 C383 336 431 295 489 239 C537 193 573 175 640 165"
              />

              <circle className={styles.coverageRing} cx="348" cy="276" r="165" />
              <circle className={styles.coverageRing} cx="348" cy="276" r="110" />

              <circle className={styles.mapPoint} cx="239" cy="231" r="8" />
              <circle className={styles.mapPoint} cx="399" cy="253" r="8" />
              <circle className={styles.mapPointMain} cx="348" cy="276" r="10" />
            </svg>

            <div className={`${styles.marker} ${styles.markerOne}`}>
              <span>A–01</span>
              <strong>Waukee</strong>
            </div>

            <div className={`${styles.marker} ${styles.markerTwo}`}>
              <span>A–02</span>
              <strong>West Des Moines</strong>
            </div>

            <div className={`${styles.marker} ${styles.markerThree}`}>
              <span>A–03</span>
              <strong>Des Moines</strong>
            </div>

            <div className={styles.mapTitle}>
              <span>Service map / placeholder</span>

              <strong>
                Des Moines
                <br />
                Metro Area
              </strong>
            </div>

            <div className={styles.coordinates}>
              <span>LAT 41.5868</span>
              <span>LNG −93.6250</span>
            </div>

            <div className={styles.scanLine} />
          </div>
        </div>
      </Container>
    </section>
  );
}