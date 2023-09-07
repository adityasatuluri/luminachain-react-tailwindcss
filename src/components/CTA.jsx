import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] ml-0 text-white xs:leading-[76.8px] leading-[66.8px] w-full"}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept Transactions and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-10 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;