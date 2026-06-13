import Container from "@/components/layout/Container/Container";
import styles from "./Services.module.css";

const packages = [
  {
    id: "E–01",
    type: "Maintenance system",
    title: "Essential",
    description:
      "A complete interior and exterior maintenance service for vehicles that need a professional reset.",
    startingPrice: "$120",
    vehiclePrices: [
      {
        vehicle: "Sedan / Compact",
        price: "$120",
      },
      {
        vehicle: "SUV / 2 Rows",
        price: "$140",
      },
      {
        vehicle: "SUV / 3 Rows or Pickup",
        price: "$160",
      },
    ],
    features: [
      "Premium foam hand wash",
      "Wheel and tire detailing",
      "Premium tire finish",
      "Deep interior vacuuming",
      "Dashboard and door-panel cleaning",
      "Interior and exterior glass",
    ],
    note:
      "Clay bar treatment, polishing, engine cleaning, and ceramic coatings are not included.",
  },
  {
    id: "P–02",
    type: "Deep-clean system",
    title: "Premium",
    description:
      "A deeper restoration-focused service for interiors and exterior surfaces requiring additional attention.",
    startingPrice: "$160",
    vehiclePrices: [
      {
        vehicle: "Sedan / Compact",
        price: "$160",
      },
      {
        vehicle: "SUV / 2 Rows",
        price: "$180",
      },
      {
        vehicle: "SUV / 3 Rows or Pickup",
        price: "$200",
      },
    ],
    features: [
      "Everything in Essential",
      "Deep seat cleaning and conditioning",
      "Deep carpet treatment",
      "Cracks, vents, and button detailing",
      "Premium wax or long-lasting sealant",
      "Enhanced interior finishing",
    ],
    note:
      "Clay bar treatment, polishing, and engine cleaning are not included.",
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerIndex}>
            <span>02</span>
            <strong>Service systems</strong>
          </div>

          <div className={styles.headerCopy}>
            <p>Choose your level of finish</p>

            <h2>
              Two systems.
              <span>One standard.</span>
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Select a service according to your vehicle&apos;s condition,
            required depth of cleaning, and desired finish.
          </p>
        </header>

        <div className={styles.packageList}>
          {packages.map((service) => (
            <article
              key={service.id}
              className={`${styles.package} ${
                service.featured ? styles.packageFeatured : ""
              }`}
            >
              <div className={styles.packageRail}>
                <span>{service.id}</span>
                <span>{service.type}</span>

                {service.featured && (
                  <strong className={styles.recommended}>Recommended</strong>
                )}
              </div>

              <div className={styles.packageLead}>
                <div className={styles.titleBlock}>
                  <span>Platinum Touch / {service.id}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.priceBlock}>
                  <span>Starting from</span>
                  <strong>{service.startingPrice}</strong>
                  <small>Final pricing depends on vehicle condition.</small>
                </div>
              </div>

              <div className={styles.vehicleGrid}>
                {service.vehiclePrices.map((vehicle) => (
                  <div key={vehicle.vehicle} className={styles.vehiclePrice}>
                    <span>{vehicle.vehicle}</span>
                    <strong>{vehicle.price}</strong>
                  </div>
                ))}
              </div>

              <div className={styles.packageDetails}>
                <div className={styles.featureColumn}>
                  <span className={styles.detailTitle}>Included procedures</span>

                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={feature}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.packageAction}>
                  <p>{service.note}</p>

                  <a href="#booking">
                    <span>Select {service.title}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.serviceFooter}>
          <span>Pricing notice</span>

          <p>
            Published prices are starting estimates. Excessive dirt, staining,
            pet hair, or unusual vehicle conditions may require an adjusted
            quote.
          </p>
        </div>
      </Container>
    </section>
  );
}