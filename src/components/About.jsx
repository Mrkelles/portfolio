
import styles, { layout } from "../style";

const About = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      I am a dedicated software engineer with three years of hands-on experience in JavaScript. My journey began seven years ago, honing my expertise in WordPress, HTML, and CSS, where I mastered the art of crafting engaging and user-friendly websites. I also bring a year of experience working on the Salesforce platform, where I navigated the intricacies of cloud-based solutions, contributing to a seamless integration of technology into business processes.
      </p>
             
    </div>

    <div className={layout.sectionImg}>
      <img src="https://i.imgur.com/un4gJcc.png" alt="about" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default About;
