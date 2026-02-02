export interface Project {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    route: string;
    hidden?: boolean;
    tableData?: { label: string; value: string }[];
  }
  
  export const PROJECTS: Project[] = [
    {
      title: "Tajma",
      subtitle: "Time Reporting Platform with 11,000+ Daily Users",
      image: "assets/tajma/tajma-logo_w_bg.svg",
      description: "Tajma is a time-reporting tool for internal users at a government agency. It is built as a web application in Angular",
      route: "/projects/tajma", 
      tableData: [ 
        { label: "Users", value: "All 11 000+ employees at the agency" },
        { label: "Technology", value: "Angular-based web application" },
        { label: "My Role", value: "UX design and front-end development" } ]
    }, 
    {
      title: "Drop the Beat",
      subtitle: "Augmented Reality Music‑Sharing Experience for Campus Social Discovery",
      image: "assets/drop-the-beat/drop-the-beat-logo.png",
      description: "A playful concept that lets students “drop” music around campus for others to discover. The idea grew from exploring how hybrid study reduced spontaneous encounters at university, and how immersive tech could make campus feel more social again. Users could spot virtual speakers in AR, tap them to listen, watch them animate, and optionally connect with the creator through social platforms.",
      route: "/projects/drop-the-beat", 
      tableData: [ 
        { label: "Users", value: "Remote and in-person students at Stockholm University" },
        { label: "Technologies and Tools", value: "Augmented Reality (AR), Unity and Figma" },
        { label: "Duration", value: "2 months in 2021" }, 
        { label: "My role", value: "UX and UI designer" }]
    },
    {
      title: "Digital Stewardship",
      subtitle: "Environmental Sustainability Research at Stockholm University",
      image: "assets/digital-stewardship/digital-stewardship-logo.png",
      description: "I was hired by Stockholm University to assist their research on exploring how waste sorting practices could improve through collective care for shared residential recycling rooms. I designed and built a project web application that allows users to (1) choose recycling room based on fullness, and (2) coordinate bulky waste pickups through carpooling.",
      route: "/projects/digital-stewardship", 
      tableData: [ 
        { label: "Users", value: "Residents of a housing association in northern Stockholm" },
        { label: "My Role", value: "UX design and front-end development" },
        { label: "Duration", value: "10 months in 2022-2023" }, 
        { label: "Methods", value: "Interviews, workshops, user journeys, wireframes and interactive prototypes" }]
    },
    {
      title: "IMRS",
      subtitle: "Mixed Reality Research for Evaluating Novel Interaction Methods",
      image: "assets/imrs/imrs-logo.png",
      description: "IMRS is a mixed reality tabletop experience developed in collaboration with Ericsson to explore how different input methods affect user interaction in MR. The project combined physical and virtual elements. With our Research-through-Design approach we collected user data to evaluate the methods' usability and inform design recommendations for smoother interactions in MR environments.",
      route: "/projects/imrs", 
      tableData: [ 
        { label: "Technologies and Tools", value: "Mixed Reality, projection mapping, Unity, sensors, hand-tracking, physical props and Figma" },
        { label: "My role", value: "User research and UI design" }, 
        { label: "Duration", value: "3 months in 2022" }]
    },
    {
      title: "Stella Budget & Prognosis",
      subtitle: "Redesign of a Mission‑Critical Budgeting & Forecasting System",
      image: "assets/stella-budget-prognos/stella-budget-prognos-logo.svg",
      description: "The budget & prognosis application is used across organizational levels by business controllers, operations coordinators, and managers. I was tasked with redesigning the application’s UX. The system is developed externally, while I am responsible for UX research, design direction, and stakeholder alignment.",
      route: "/projects/stella-budget-prognos", 
      tableData: [ 
        { label: "Users", value: "Business controllers, operations coordinators and managers at a large government agency" },
        { label: "My Role", value: "UX research, design direction, and stakeholder alignment" },
        { label: "Constraints", value: "No recordings, domain complexity, external development" }, 
        { label: "Duration", value: "6 months 2025-2026" }, 
        { label: "Methods", value: "Exploratory interviews, user tests, affinity diagram, prioritization matrices" }]  
    }, 
    {
      title: "Flourish",
      subtitle: "Task‑Based Wellness App with Simulated AR for Emotional Support",
      image: "assets/flourish/flourish-logo.png",
      description: "Flourish is a task-based mobile application designed during the COVID-19 pandemic to support mental wellness. Users complete daily tasks to help improve their mood, and a digital plant grows as tasks are completed. The plant can be viewed in simulated augmented reality (AR) and users can check in on friends’ plants. User interviews and workshops informed design iterations, including a toggle for ‘I feel bad’ that surfaces simpler tasks like brushing your teeth or getting out of bed.",
      route: "/projects/flourish", 
      tableData: [ 
        { label: "Users", value: "Remote students at Stockholm University" },
        { label: "Context", value: "Covid-19 pandemic, social distancing and mental wellness" },
        { label: "Technologies and Tools", value: "Augmented Reality (AR) simulation and Figma" },
        { label: "Duration", value: "3 months in 2020" }, 
        { label: "Methods", value: "user tests, workshops, empathy maps, brainstorming" }]
    },
    {
      title: "DigiPost",
      subtitle: "AI‑Assisted Workflow for Processing Citizen Mail at Scale",
      image: "assets/digi-post/digi-post-logo.svg",
      description: "DigiPost",
      route: "/projects/digi-post", 
      tableData: [ 
        { label: "Users", value: "Administrators at a large government agency" },
        { label: "My Role", value: "UI designer" },
        { label: "Duration", value: "2 days in 2025" } ]
    },
    {
      title: "ACDC",
      subtitle: "Augmented Reality Digital Twin for Simulating Complex Public Environments",
      image: "assets/acdc/acdc-logo.png",
      description: "In this project me and my team simulated people crossing an intersection in Kista Galleria. The simulation was created using Unity and Figma and could be interacted with using a tablet. By using a toolbar a user could, for example, pause the simulation and add more people to it. This project lasted 3 months in 2022 and was part of the course Design for Complex and Dynamic Contexts. ",
      route: "/projects/acdc", 
      hidden: true
    },
    {
      title: "G-Force",
      subtitle: "A VR Experience Exploring Sensory Alignment with Tangible Objects",
      image: "assets/g-force/g-force-logo.png",
      description: "G-Force is a VR experience where users kick a physical ball and see its motion mirrored in virtual reality. The ball behaves differently depending on the planet the user is on (Earth, Moon, or Mars), reflecting changes in gravity. Users can switch planets by interacting with a simple UI and traveling through a wormhole.",
      route: "/projects/g-force", 
      tableData: [ 
        { label: "Technologies and Tools", value: "Virtual Reality (VR), Unity, sensors, physical props and Figma" },
        { label: "My role", value: "UX and UI design" }, 
        { label: "Duration", value: "3 months in 2022" }]
    },
    {
      title: "AGoodSite",
      subtitle: "Figma-based Design System for Museum Websites.",
      image: "assets/agoodsite/agoodsite-logo.png",
      description: "I completed a full-time design internship at a Stockholm-based design bureau. My main assignment was to create a web-based design system for the company’s clients (mainly museums) to ensure cohesive and efficient design processes across projects.",
      route: "/projects/agoodsite", 
      tableData: [ 
        { label: "Users", value: "Art Directors at the design bureau (directly) and their clients (indirectly)" },
        { label: "Methods & Tools", value: "Figma (Auto Layout, variants, style guide and more) and competitive analysis" },
        { label: "Duration", value: "6 months in 2021" }, 
        { label: "My role", value: "UI designer" }]
    },
  
    {
      title: "Theses",
      subtitle: "Master’s & Bachelor’s Thesis at Stockholm University",
      image: "assets/theses/theses-logo.png",
      description: "Theses project description",
      route: "/projects/theses"
    }
];
