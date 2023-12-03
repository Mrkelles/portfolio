import { projects } from "../constants";
import styles, { layout } from "../style";
import PropTypes from 'prop-types';


const ProjectCard = ({ img, title, desc, stack, code, link   }) => {
  return (
   
      <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-4xl px-10 md:py-4 group transform duration-500 hover:-translate-y-1 my-4 rounded-xl bg-black-gradient-2">
      <img className="w-full md:w-72 rounded-md" src={img} alt="project image" />
      <div className="">
        <div className="p-5 pb-2">
          <h1 className="text-2xl font-semibold text-dimWhite mt-4">{title}</h1>
          <p className="text-md text-gray-400 mt-2 leading-relaxed">{desc}</p>
        </div>
        <div className="p-5">
          <div>
            <div className="flex justify-between">
              <div className="text-sm text-dimWhite">
                <span className="text-dimWhite font-bold">{stack}</span>
              </div>
              <div className="flex items-center">
                <div className="flex gap-8">
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/ZuVwj3l.png" className="h-8 w-8"/>
                  </a>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/uMo8fnz.png" className="h-8 w-8"/>
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired, 
};

const ProjectList = () => {
  return (
    <section id="projects" >

       <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 ">
      <h2 className={styles.heading2}>
        SOME OF<br className="sm:block hidden" /> MY WORK
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px]`}>
        I help individuals, small agencies and business bring their ideas to life. Powered by JavaScript & VS Code, I turn your requirements into full funtional web apps
        </p>
      </div>
    </div>

      <div className={`${layout.section} my-8 md:max-w-[1000px] md:mx-auto`}>  
        <div className={`${layout.sectionInfo}`}>
            {projects.map((project, index ) => (
              <ProjectCard key={project.id}  {...project} index={index} />
            ))}
        </div>
      </div>
        
    </section>
  );
};

export default ProjectList;
