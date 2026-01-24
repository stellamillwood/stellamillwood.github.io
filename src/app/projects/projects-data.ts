export interface Project {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    route: string;
    hidden?: boolean;
  }
  
  export const PROJECTS: Project[] = [
    {
      title: "Tajma",
      subtitle: "Time reporting tool used daily by thousands of users at Swedish Public Emplyment Office.",
      image: "assets/tajma/tajma-logo.png",
      description: "Tajma is a time-reporting tool for internal users at Swedish Public Employment Office. It is built as a web application in Angular",
      route: "/projects/tajma"
    }, 
    {
      title: "Digital Stewardship",
      subtitle: "Waste management research project with a web application.",
      image: "assets/digital-stewardship/digital-stewardship-logo.png",
      description: "Working as a research assistant at Stockholm University I was part of a team conducting an environmental study on how collective thinking and sensor data can be used in waste management. In my role I designed and front end-developed this website. The project’s duration was 3 years of which I participated for 10 months (2022-2023). ",
      route: "/projects/digital-stewardship"
    },
    {
      title: "Stella Budget & Prognos",
      subtitle: "Redesign of Swedish Public Emplyment Office's web application for budget and prognosis.",
      image: "assets/stella-budget-prognos/stella-budget-prognos-logo.png",
      description: "The application is used at all organizational levels by business controllers, operations coodrinators and managers. I was tasked with redesigning it. The application's development lies externally, while I'm responsible for the application's UX",
      route: "/projects/stella-budget-prognos"
    }, 
    {
      title: "ACDC",
      subtitle: "Augmenting Complex and Dynamic (ACDC) is an augmented reality (AR) project on digital twins.",
      image: "assets/acdc/acdc-logo.png",
      description: "In this project me and my team simulated people crossing an intersection in Kista Galleria. The simulation was created using Unity and Figma and could be interacted with using a tablet. By using a toolbar a user could, for example, pause the simulation and add more people to it. This project lasted 3 months in 2022 and was part of the course Design for Complex and Dynamic Contexts. ",
      route: "/projects/acdc", 
      hidden: true
    },
    {
      title: "AGoodSite",
      subtitle: "AGoodId's design system created in Figma for their clients' websites.",
      image: "assets/agoodsite/agoodsite-logo.png",
      description: "AGoodId is a Stockholm-based design bureau where I completed a full-time, six-month design internship in 2021. My main assignment was to create a web-based design system for the company’s clients to ensure cohesive and efficient design processes across projects.",
      route: "/projects/agoodsite"
    },
    {
      title: "DigiPost",
      subtitle: "AI streamlines handling of citizens’ incoming post at Swedish Public Employment Office.",
      image: "assets/digi-post/digi-post-logo.png",
      description: "DigiPost",
      route: "/projects/digi-post"
    },
    
    {
      title: "Drop the Beat",
      subtitle: "Music sharing mobile application with integrated augmented reality (AR).",
      image: "assets/drop-the-beat/drop-the-beat-logo.png",
      description: "This is an application that aims to connect people through music. It uses AR to allow users to explore their surroundings and find other users’ “dropped beats”. They click a virtual speaker, listen to the music while watching the speaker animation, and can afterwards choose whether to connect with the user through various social medias. The project’s duration was 2 months in 2021 and was part of the university course Introduction to Design for Creative and Immersive Technology. ",
      route: "/projects/drop-the-beat"
    },
    {
      title: "Flourish",
      subtitle: "A task-based mobile application for improving mental wellness using simulated augmented reality (AR) for a growing plant.",
      image: "assets/flourish/flourish-logo.png",
      description: "The application allows a user to complete daily tasks in order to improve their mental health during the covid-19-pandemic. As tasks are completed, the user’s own digital plant grows. The plant can be viewed in simulated AR. The project’s duration was 3 months in 2020 and was part of the university course Project Work in Interaction Design. ",
      route: "/projects/flourish"
    },
    {
      title: "G-Force",
      subtitle: "A virtual reality (VR) experience with tangible objects.",
      image: "assets/g-force/g-force-logo.png",
      description: "This is a VR-application designed with Unity, Figma and Arduino to help educate students about space through VR. Specifically, students can learn to compare the gravities of Mars and the Moon with Earth’s. They can explore this by kicking a soccer ball in different environments, and traveling through a wormhole to the next planet. The project’s duration was 3 months in 2022 and was part of the university course Designing for Emerging Technologies. ",
      route: "/projects/g-force"
    },
    {
      title: "IMRS",
      subtitle: "A mixed reality (MR) experience comparing various input methods for MR from an ease-of-use perspective.",
      image: "assets/imrs/imrs-logo.png",
      description: "My team and I developed a mixed reality tabletop experience in collaboration with Ericsson. We transformed parts of Ericsson’s existing VR experience into MR. We studied the pros and cons of different input methods in MR and provided a list of design recommendations. The project’s duration was 3 months in 2022 and was part of the course Project Course in Creative and Immersive Technology.",
      route: "/projects/imrs"
    },
  
    {
      title: "Theses",
      subtitle: "Master thesis and bachelor thesis at Stockholm Univeristy.",
      image: "assets/theses/theses-logo.png",
      description: "Theses project description",
      route: "/projects/theses"
    }
];
