import Container from "@/components/layout/Container/Container";
import styles from "./ServiceArea.module.css";

const cities = [
  {
    city: "Waukee",
    status: "Primary area",
  },
  {
    city: "West Des Moines",
    status: "Primary area",
  },
  {
    city: "Des Moines",
    status: "Primary area",
  },
  {
    city: "Surrounding Areas",
    status: "Confirm availability",
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Service area</p>

          <div className={styles.headerGrid}>
            <h2>
              Mobile detailing
              <span>around Des Moines.</span>
            </h2>

            <p>
              Platinum Touch serves the Des Moines metro area by appointment.
              For nearby locations, availability can be confirmed before
              booking.
            </p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.areaCard}>
            <div className={styles.cardHeader}>
              <span>Coverage list</span>
              <strong>Primary service locations</strong>
            </div>

            <div className={styles.cityList}>
              {cities.map((location) => (
                <article key={location.city} className={styles.city}>
                  <div>
                    <h3>{location.city}</h3>
                    <p>{location.status}</p>
                  </div>

                  <span />
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.bookingCard}>
            <span>Not sure if you are covered?</span>

            <h3>
              Send your location and we will confirm availability.
            </h3>

            <p>
              Travel distance, weather, appointment schedule, and selected
              package may affect availability.
            </p>

            <a href="#booking">Check availability</a>
          </aside>
        </div>
      </Container>
    </section>
  );
}