const navLinks = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "About",
    sectionId: "about",
  },
  {
    label: "Front End",
    sectionId: "frontendProjects",
  },
  {
    label: "Graphic Design",
    sectionId: "graphicProjects",
  },
  {
    label: "Experience",
    sectionId: "experience",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

export default function PublicPortfolioNavbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Section "${sectionId}" was not found.`);
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((link) => (
        <button
          key={link.sectionId}
          type="button"
          onClick={() => scrollToSection(link.sectionId)}
          className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
