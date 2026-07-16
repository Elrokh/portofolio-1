import profileImage from "../assets/images/mustafa-profile.jpg";

export const defaultSections = [
  { id: "hero", label: "Hero", visible: true },
  { id: "about", label: "About", visible: true },
  { id: "skills", label: "Skills", visible: true },
  { id: "experience", label: "Experience", visible: true },
  { id: "frontendProjects", label: "Front End Work", visible: true },
  { id: "graphicProjects", label: "Graphic Design Work", visible: true },
  { id: "certificates", label: "Certificates", visible: true },
  { id: "contact", label: "Contact", visible: true },
];

export const defaultPortfolio = {
  version: 1,
  published: false,
  slug: "mustafa-elrokh",
  template: "modern",
  device: "desktop",
  settings: {
    mode: "dark",
    font: "Inter",
    radius: 24,
    background: "#020617",
    surface: "#0F172A",
    primary: "#06B6D4",
    secondary: "#2563EB",
    accent: "#38BDF8",
    text: "#F1F5F9",
  },
  personal: {
    name: "Mustafa Ibrahim Galal",
    shortName: "Mustafa Elrokh",
    age: 23,
    email: "mustafaelrokh77@gmail.com",
    phone: "",
    location: "Cairo, Egypt",
    title: "Front End Web Developer",
    secondaryTitle: "UI/UX & Graphic Designer",
    availability: "Open to impactful opportunities",
    profileImage,
    resumeUrl: "",
  },
  about: {
    eyebrow: "About me",
    headline: "I build digital experiences that look sharp, feel intuitive and work beautifully.",
    bio:
      "I am a 23-year-old Computer Science graduate from Cairo Higher Institute for Engineering and Computer Science. I currently work at Logic Designs as a Front End Web Developer and have two years of front-end experience. I previously worked at i Network as a UI/UX Designer using Figma for web and application design, and at Sahm as a Front End Web Developer. Alongside development, I work independently as a Graphic Designer, bringing a strong visual eye to every product I build.",
    yearsExperience: "2+",
    projectsCount: "12+",
    focus: "Front End + Visual Design",
  },
  education: [
    {
      id: "education-1",
      degree: "Bachelor's Degree in Computer Science",
      institution: "Cairo Higher Institute for Engineering and Computer Science",
      period: "Graduate",
      description:
        "Studied computer science fundamentals, software development, web technologies and problem solving.",
    },
  ],
  skills: [
    { id: "skill-1", name: "React.js", category: "Front End", level: 92 },
    { id: "skill-2", name: "Angular", category: "Front End", level: 82 },
    { id: "skill-3", name: "JavaScript", category: "Front End", level: 90 },
    { id: "skill-4", name: "Tailwind CSS", category: "Front End", level: 94 },
    { id: "skill-5", name: "Bootstrap", category: "Front End", level: 88 },
    { id: "skill-6", name: "HTML5", category: "Front End", level: 95 },
    { id: "skill-7", name: "CSS3", category: "Front End", level: 94 },
    { id: "skill-8", name: "Responsive Design", category: "Front End", level: 93 },
    { id: "skill-9", name: "Figma", category: "UI/UX", level: 88 },
    { id: "skill-10", name: "Wireframing", category: "UI/UX", level: 84 },
    { id: "skill-11", name: "Prototyping", category: "UI/UX", level: 84 },
    { id: "skill-12", name: "Graphic Design", category: "Design", level: 90 },
    { id: "skill-13", name: "Problem Solving", category: "Core", level: 86 },
  ],
  experience: [
    {
      id: "experience-1",
      company: "Logic Designs",
      role: "Front End Web Developer",
      period: "Current",
      location: "Egypt",
      description:
        "Building modern, responsive user interfaces and translating product requirements and designs into maintainable front-end experiences.",
      highlights: [
        "Develop responsive interfaces with React, Angular and modern CSS workflows.",
        "Collaborate on UI implementation, reusable components and visual consistency.",
        "Improve usability across desktop, tablet and mobile breakpoints.",
      ],
    },
    {
      id: "experience-2",
      company: "Sahm",
      role: "Front End Web Developer",
      period: "Previous role",
      location: "Egypt",
      description:
        "Worked on front-end development while studying, turning interface concepts into responsive web pages and reusable UI sections.",
      highlights: [
        "Built responsive pages with HTML, CSS, Bootstrap and JavaScript.",
        "Converted visual designs into functional web interfaces.",
      ],
    },
    {
      id: "experience-3",
      company: "i Network",
      role: "UI/UX Designer",
      period: "Previous role",
      location: "Egypt",
      description:
        "Designed application and website experiences in Figma with a focus on clear user flows, hierarchy and usable layouts.",
      highlights: [
        "Created wireframes and high-fidelity interfaces in Figma.",
        "Worked on website and application UI design.",
        "Prepared designs for developer handoff.",
      ],
    },
    {
      id: "experience-4",
      company: "Freelance",
      role: "Graphic Designer",
      period: "Ongoing",
      location: "Remote",
      description:
        "Creating visual identities, book covers, social media designs and promotional artwork for a range of clients and personal brands.",
      highlights: [
        "Develop brand-aligned visual systems and marketing designs.",
        "Create professional book covers and promotional assets.",
      ],
    },
  ],
  frontendProjects: [
    {
      id: "frontend-1",
      title: "Restaurant Ordering System",
      category: "React Application",
      description:
        "A complete restaurant experience with menu categories, order customization, cart management, delivery details, coupons, reviews and live order tracking.",
      image: "/projects/restaurant-system.svg",
      technologies: ["React.js", "Tailwind CSS", "Context API", "React Router"],
      liveUrl: "",
      sourceUrl: "https://github.com/Elrokh",
      featured: true,
    },
    {
      id: "frontend-2",
      title: "Eye Pleasure Fashion Store",
      category: "E-commerce Experience",
      description:
        "A dark, fashion-focused e-commerce interface with product filtering, style quiz, recommended fits, cart drawer, checkout and an admin dashboard.",
      image: "/projects/fashion-store.svg",
      technologies: ["React.js", "Tailwind CSS", "API Integration", "Framer Motion"],
      liveUrl: "",
      sourceUrl: "https://github.com/Elrokh",
      featured: true,
    },
    {
      id: "frontend-3",
      title: "Medguide Study Hub",
      category: "Education Platform",
      description:
        "A medical study platform concept featuring lecture organization, flashcards, MCQs, spaced repetition, study planning and progress analytics.",
      image: "/projects/medical-hub.svg",
      technologies: ["React.js", "Tailwind CSS", "Dashboard UI", "Local Storage"],
      liveUrl: "",
      sourceUrl: "https://github.com/Elrokh",
      featured: true,
    },
  ],
  graphicProjects: [
    {
      id: "graphic-1",
      title: "PharmaGuide Brand Identity",
      category: "Branding & Logo Design",
      description:
        "A clean visual identity for an undergraduate pharmacy book series, designed to feel academic, modern and memorable.",
      image: "/projects/pharmaguide-brand.svg",
      tools: ["Figma", "Brand Strategy", "Typography"],
      projectUrl: "https://www.behance.net/mustafaelrokh",
    },
    {
      id: "graphic-2",
      title: "Organic Chemistry Book Cover",
      category: "Editorial & Book Cover Design",
      description:
        "A professional scientific cover direction combining molecular structures, readable hierarchy and a polished pharmacy-focused visual language.",
      image: "/projects/organic-cover.svg",
      tools: ["Cover Design", "Visual Composition", "Typography"],
      projectUrl: "https://www.behance.net/mustafaelrokh",
    },
    {
      id: "graphic-3",
      title: "Social Media Visual Campaign",
      category: "Advertising Design",
      description:
        "A flexible social campaign system built around bold compositions, strong hierarchy and reusable branded templates.",
      image: "/projects/social-campaign.svg",
      tools: ["Social Media Design", "Campaign System", "Art Direction"],
      projectUrl: "https://www.behance.net/mustafaelrokh",
    },
  ],
  certificates: [
    {
      id: "certificate-1",
      title: "Freelancing Camp",
      issuer: "Freelancing Training Camp",
      date: "Completed",
      description:
        "Practical training focused on freelance work, client communication, presenting services and building a sustainable independent career.",
      url: "",
    },
  ],
  socials: {
    github: "https://github.com/Elrokh",
    behance: "https://www.behance.net/mustafaelrokh",
    linkedin: "https://www.linkedin.com/in/mustafa-elrokh-12a302258",
    facebook: "https://www.facebook.com/share/1YZb9iWeVT/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/mo.tito11",
  },
  contact: {
    headline: "Have a project in mind? Let's build something people remember.",
    description:
      "I am interested in front-end opportunities, freelance collaborations and projects that combine clean development with strong visual design.",
  },
  sections: defaultSections,
};
