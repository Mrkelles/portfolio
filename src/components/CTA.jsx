import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Got an Important Project?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Let&#39;s explore how I can contribute to your next endeavor.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a  href="mailto:kelvinebima@gmail.com?subject=Hello&body=How are you?">
        <Button/>
      </a>
    </div>

  </section>
);

export default CTA;
