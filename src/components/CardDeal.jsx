import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover an enhanced blockchain solution <br className="sm:block hidden" /> with just a few simple steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-10`}>
      Elevate your blockchain experience effortlessly.
       Our streamlined process helps you find the perfect card deal for your needs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] mr-10" />
    </div>
  </section>
);

export default CardDeal;