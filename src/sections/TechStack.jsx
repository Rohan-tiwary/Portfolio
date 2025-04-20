import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const techStackImgss = [
  { name: 'React', icon: <FaReact className="text-blue-500 text-9xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-9xl" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-9xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400 text-9xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-9xl" /> },
];
const TechStack = () => {
  
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50, 
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1,
        duration: 1, 
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackImgss.map((techStackImgss, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {techStackImgss.icon}
                </div>
                <div className="padding-x w-full text-8xl">
                  <p>{techStackImgss.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;