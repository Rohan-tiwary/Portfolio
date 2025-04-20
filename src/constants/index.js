const navLinks = [
   {
    name: "About",
    link: "#counter",
   },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Questions Solved" },
    { value: 6, suffix: "+", label: "Completed Projects" },
    { value: 10, suffix: "+", label: "Prizes Won" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Frontend Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Java Developer",
      imgPath: "https://w0.peakpx.com/wallpaper/157/626/HD-wallpaper-java-glitter-logo-programming-language-grid-metal-background-java-creative-programming-language-signs-java-logo.jpg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Rohan played a crucial role in building the GauravGo Games website and backend dashboard. His dual expertise in frontend and backend made the development seamless and impactful.",
      imgPath: "https://gauravgo.com/wp-content/uploads/2020/01/cropped-Transparent-Logo-.png",
      logoPath: "https://gauravgo.com/wp-content/uploads/2020/01/cropped-Transparent-Logo-.png",
      title: "Frontend & Backend Developer",
      date: "January 2024 - Present",
      responsibilities: [
        "Developed the official GauravGo Games website using modern frontend technologies.",
        "Built a secure backend dashboard for user authentication and login management.",
        "Worked collaboratively across teams to ensure smooth deployment and performance optimization.",
      ],
    },
    {
      review: "Rohan was a dynamic contributor to our team, effectively managing HR responsibilities while boosting our social media presence.",
      imgPath: "/images/exp2.png",
      logoPath: "https://gauravgo.com/wp-content/uploads/2020/01/cropped-Transparent-Logo-.png",
      title: "HR Manager & Social Media Specialist",
      date: "September 2024 - December 2024",
      responsibilities: [
        "Managed recruitment, team onboarding, and internal communications.",
        "Planned and executed social media campaigns to increase brand visibility.",
        "Collaborated with creative teams to align content strategy with company goals.",
      ],
    },
    {
      review: "At Metvy, Rohan demonstrated excellent sales and guidance skills, helping students make informed choices about their educational paths.",
      imgPath: "/images/exp3.png",
      logoPath: "https://media.licdn.com/dms/image/v2/C4D0BAQErDJFyTq302g/company-logo_200_200/company-logo_200_200/0/1661010732335?e=1750896000&v=beta&t=K9oMt5SMoVeGQDorSeNdCagv5ylpTH5ch28cSGSPXd0",
      title: "Sales Executive – Education Guidance",
      date: "April 2023 - July 2023",
      responsibilities: [
        "Guided students in selecting the right courses based on their field of study and career aspirations.",
        "Analyzed academic backgrounds to provide tailored course recommendations.",
        "Maintained strong communication and follow-up to support successful enrollment.",
      ],
    },
  ];
  
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "https://gauravgo.com/wp-content/uploads/2020/01/cropped-Transparent-Logo-.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link:"https://www.instagram.com/rohan.tiwary2004/"
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      link:"facebook.com"
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      link:"https://x.com/RohanTiwar86793"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link:"https://linkedin.com/in/rohan-kumar-tiwary-719883258"
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };