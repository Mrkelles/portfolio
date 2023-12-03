import { people01, people02, people03, linkedin, twitter, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "projects",
    title: "Projects",
  },
];


export const projects = [
  {
    id:"pro-1",
    img:"https://i.imgur.com/1wvqG6F.png",
    title:"Aetotech Digital",
    desc:"Developed a tailored e-learning platform specifically for Salesforce administrators. The website provides a comprehensive and structured learning path, empowering admins to enhance their skills and stay updated with the latest Salesforce technologies.",
    stack:[ "wordpress", "/", "Elementor" ],
    link:"Aetotechdigital.com",
    code:"none",
  },
  {
    id:"pro-2",
    img:"https://i.imgur.com/Kwq46qi.png",
    title:"Hoobank",
    desc:"Crafted an impactful e-payment landing page, designed to facilitate seamless transactions. The page emphasizes user-friendly interfaces and secure payment gateways, creating a trustworthy environment for users to engage in online transactions confidently.",
    stack:[ "React", "/", "Tailwind" ],
    link:"https://ebank-khaki.vercel.app/",
    code:"https://github.com/Mrkelles/ebank",
  },
  {
    id:"pro-3",
    img:"https://i.imgur.com/R7dOHY0.png",
    title:"Real Estate Website",
    desc:"Designed and developed an engaging real estate frontend, providing users with a visually appealing showcase of various properties. The platform incorporates intuitive filtering capabilities, allowing users to explore and compare properties based on their preferences and budget.",
    stack:[ "React", "/","Tailwind CSS" ],
    link:"https://real-estate-main-main-beryl.vercel.app/",
    code:"https://github.com/Mrkelles/real-estate-main-main",
  },
  {
    id:"pro-4",
    img:"https://i.imgur.com/EMeDm7S.png",
    title:"Metaverse",
    desc:"Immersed users in a captivating metaverse-themed website, blending cutting-edge design with futuristic elements. The site serves as a visually stunning gateway, inviting visitors to explore and engage with content that transcends traditional online experiences.",
    stack:[ "NextJs", "/", "Tailwind CSS", "/", "Framer Motions" ],
    link:"https://metaverse-rose-psi.vercel.app/",
    code:"https://github.com/Mrkelles/metaverse",
  },
  {
    id:"pro-5",
    img:"https://i.imgur.com/tYyrw3A.png",
    title:"Traveller Landing Page",
    desc:"Crafted a vibrant and user-friendly UI for a travel website, capturing the essence of wanderlust. The design seamlessly blends aesthetics with functionality, offering users an immersive experience to plan and envision their next adventure.",
    stack:[ "NextJS", "/", "Tailwind CSS" ],
    link:"https://traveller-gray.vercel.app/",
    code:"https://github.com/Mrkelles/traveller",
  },
];


export const services = [
  {
    id: "service-1",
    icon: star,
    title: "Web Development",
    content:
      "Crafting seamless and intuitive fully responsive applications. From concept to deployment, I excel in delivering scalable solutions that enhance user experiences and meet business objectives.",
  },
  {
    id: "service-2",
    icon: send,
    title: "Wordpress Development",
    content:
      "Transforming ideas into visually stunning and functional WordPress websites. Whether it's a blog, corporate site, or e-commerce platform, I specialize in creating dynamic and responsive experiences tailored to your needs.",
  },
  {
    id: "service-3",
    icon: shield,
    title: "UX Research",
    content:
      "Putting user experience at the forefront, I conduct in-depth research to understand user behaviors and preferences. This valuable insight informs the design and development process, ensuring that your digital solutions resonate with your target audience.",
  },
  {
    id: "service-4",
    icon: send,
    title: "Salesforce Custom App Development",
    content:
      "Harnessing the power of the Salesforce platform to create tailored applications that align with your business requirements. From automation to integration, I specialize in leveraging Salesforce to optimize your operations, empower your team with tools that enhance customer interactions, improve efficiency, and drive growth.",
  },
 
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I've had the privilege of working with Kelvin for several years on various WordPress projects. His attention to detail and ability to implement ideas is truly commendable. He consistently brings a fresh perspective to the table.",
    name: "Oviri Onos",
    title: "Founder & CEO",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Working with Kelvin has been a game-changer for our team. His deep understanding of JavaScript and WordPress has elevated our projects to new heights. He brings a perfect blend of technical expertise and creativity to the my projects",
    name: "Adebayo Salami",
    title: "Founder & CEO",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Collaborating with Kelvin on our e-commerce project was an absolute pleasure. He played a pivotal role in delivering a feature-rich and visually appealing website. He's not just a skilled engineer, but a reliable partner committed to achieving project goals.",
    name: "Ateeq Abas",
    title: "HR Manager",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const tools = [
  {
    id: "tool-1",
    logo: "https://i.imgur.com/metjWar.png",
  },
  {
    id: "tool-2",
    logo: "https://i.imgur.com/plcV10l.png",
  },
  {
    id: "tool-4",
    logo: "https://i.imgur.com/rkfLBhs.png",
  },
  {
    id: "tool-4",
    logo: "https://i.imgur.com/sEtoIzl.png",
  },
];