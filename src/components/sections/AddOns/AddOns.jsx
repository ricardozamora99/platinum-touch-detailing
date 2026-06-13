import Container from "@/components/layout/Container/Container";
import styles from "./AddOns.module.css";

const addOns = [
  {
    number: "01",
    category: "Interior",
    title: "Pet Hair Removal",
    price: "From $30",
    text: "Targeted removal of embedded pet hair from seats, carpets, fabric surfaces, and difficult interior areas.",
  },
  {
    number: "02",
    category: "Exterior",
    title: "Headlight Restoration",
    price: "$60 / pair",
    text: "A focused restoration procedure for cloudy, faded, or oxidized headlight surfaces.",
  },
  {
    number: "03",
    category: "Interior",
    title: "Ozone Odor Treatment",
    price: "$50",
    text: "A specialized treatment designed to address persistent and difficult interior odors.",
  },
  {
    number: "04",
    category: "Condition",
    title: "Extreme Dirt & Stains",
    price: "From $50",
    text: "Additional treatment for unusually heavy dirt, buildup, staining, or neglected vehicle conditions.",
  },
];

export default function AddOns() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerCode}>
            <span>04</span>
            <strong>Targeted procedures</strong>
          </div>

          <div className={styles.headerTitle}>
            <p>Customize the service system</p>

            <h2>
              Add only what
              <span>your vehicle needs.</span>
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Additional procedures can be added to either detailing package
            according to the condition of the vehicle.
          </p>
        </header>

        <div className={styles.list}>
          {addOns.map((item) => (
            <article key={item.number} className={styles.item}>
              <div className={styles.itemCode}>
                <span>{item.number}</span>
                <small>{item.category}</small>
              </div>

              <div className={styles.itemTitle}>
                <h3>{item.title}</h3>
              </div>

              <p>{item.text}</p>

              <div className={styles.itemPrice}>
                <span>Procedure price</span>
                <strong>{item.price}</strong>
              </div>

              <a href="#booking" aria-label={`Add ${item.title} to service`}>
                <span>Add procedure</span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.bottomRail}>
          <span>Condition notice</span>

          <p>
            Final pricing may be adjusted after reviewing vehicle size,
            material type, severity, and the time required for treatment.
          </p>
        </div>
      </Container>
    </section>
  );
}