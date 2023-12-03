import { services } from "../constants";
import styles, { layout } from "../style";
import PropTypes from 'prop-types';


const ServicesCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired, // Assumes title should be a string and is required
  content: PropTypes.string.isRequired, // Assumes content should be a string and is required
  index: PropTypes.number.isRequired, // Assumes index should be a number and is required
};

const Services = () =>  (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Some of <br className="sm:block hidden" /> my
        Services.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With a solid foundation in JavaScript, extensive experience in WordPress, HTML, and CSS, and a some hands-on work with Salesforce, I bring a unique blend of skills to every project. 
      </p>

 
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {services.map((service, index) => (
        <ServicesCard key={service.id} {...service} index={index} />
      ))}
    </div>
  </section>
);

export default Services