import styles from "../style";
import Button from "./Button";

const Hero = () =>(
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src="https://i.imgur.com/L9piK4X.png" alt="discount" className="w-[32px] h-[32px]" />

        <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Software Engineer & Tech Enthusiast</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Welcome to my<br className="sm:block hidden" /> {" "}
          <span className="text-gradient">Portfolio</span> {" "}

        </h1>
       
      </div>
    
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Hello! I&#39;m Kelvin Ebima, a passionate software engineer with some hands-on experience in various languages & frameworks, requirements gathering and implementations. My focus is on delivering robust and innovative solutions.
        </p>
        <a  href="mailto:kelvinebima@gmail.com?subject=Hello&body=How are you?">
        <Button styles={`mt-10 bg-cyan`}/>
        </a>
        
    </div>

    


    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src="https://i.imgur.com/64qPXP6.png" alt="biling" className="w-[100%] h-[100%] relative z-[5]"/>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>
  </section>
)


export default Hero;