import styles from "../style";
import { nebulacoin, crypto } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mr-10`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-nbcoin-gradient rounded-[10px] mb-2">
          <img src={nebulacoin} alt="NBcoin" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span>INTRODUCING OUR NEWEST CRYPTO:{" "}
            <span className="text-white">NEBULA COIN</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mr-10">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient mr-10">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Blockchain.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mr-10`}>
        Our team of experts assess factors such as consensus algorithms, smart contract capabilities, and security protocols to ensure a seamless fit for your requirements.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={crypto} alt="crypto" className="w-[750px] h-[100%] relative z-[5] mr-50" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-30 bottom-30 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;