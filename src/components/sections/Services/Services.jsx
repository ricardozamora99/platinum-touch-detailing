import Container from "@/components/layout/Container/Container";
import styles from "./Services.module.css";

const packages = [
  {
    title: "Essential",
    description:
      "A complete maintenance detail for vehicles that need a clean interior and exterior reset.",
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
    title: "Premium",
    description:
      "A deeper detail for vehicles that need extra interior attention and a more refined exterior finish.",
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

const addOns = [
  "Pet hair removal",
  "Headlight restoration",
  "Ozone odor treatment",
  "Heavy stain treatment",
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Services</p>

          <div className={styles.headerGrid}>
            <h2>
              Choose the detail
              <span>that fits your car.</span>
            </h2>

            <p>
              Simple packages, clear starting prices, and mobile service brought
              directly to your location.
            </p>
          </div>
        </header>

        <div className={styles.packageGrid}>
          {packages.map((service) => (
            <article
              key={service.title}
              className={`${styles.package} ${
                service.featured ? styles.packageFeatured : ""
              }`}
            >
              {service.featured && (
                <span className={styles.badge}>Most popular</span>
              )}

              <div className={styles.packageHeader}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.price}>
                  <span>From</span>
                  <strong>{service.startingPrice}</strong>
                </div>
              </div>

              <div className={styles.priceRows}>
                {service.vehiclePrices.map((vehicle) => (
                  <div key={vehicle.vehicle} className={styles.priceRow}>
                    <span>{vehicle.vehicle}</span>
                    <strong>{vehicle.price}</strong>
                  </div>
                ))}
              </div>

              <div className={styles.features}>
                <h4>Included</h4>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <p>{service.note}</p>

                <a href="#booking">Select {service.title}</a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.addOns}>
          <div>
            <p className={styles.eyebrow}>Available add-ons</p>
            <h3>Need something extra?</h3>
          </div>

          <div className={styles.addOnList}>
            {addOns.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.notice}>
          <strong>Pricing notice</strong>

          <p>
            Published prices are starting estimates. Excessive dirt, staining,
            pet hair, or unusual vehicle conditions may require an adjusted
            quote after inspection.
          </p>
        </div>
      </Container>
    </section>
  );
}