export interface SkillItem {
  label: string;
  badge: string;
  bgColor: string;
  textColor: string;
}

export interface SkillGroup {
  title: string;
  titleKey?: string;
  skills: SkillItem[];
}

export const technicalSkills: SkillGroup[] = [
  {
    title: "Linguagens",
    titleKey: "skills.languages",
    skills: [
      {
        label: "JavaScript",
        badge: "JS",
        bgColor: "#f7df1e",
        textColor: "#1a1200",
      },
      {
        label: "Java",
        badge: "J",
        bgColor: "#007396",
        textColor: "#fff",
      },
      {
        label: "HTML",
        badge: "H",
        bgColor: "#e34c26",
        textColor: "#fff",
      },
      {
        label: "C#",
        badge: "C#",
        bgColor: "#3b0f7e",
        textColor: "#fff",
      },
      {
        label: "Python",
        badge: "Py",
        bgColor: "#e2e615",
        textColor: "#fff",
      },
      {
        label: "TypeScript",
        badge: "TS",
        bgColor: "#5959bd",
        textColor: "#fff",
      },
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    titleKey: "skills.frameworks",
    skills: [
      {
        label: "React",
        badge: "R",
        bgColor: "#61dafb",
        textColor: "#06222b",
      },
      {
        label: "Node.js",
        badge: "N",
        bgColor: "#68a063",
        textColor: "#fff",
      },
      {
        label: "Angular",
        badge: "A",
        bgColor: "#ff3e00",
        textColor: "#fff",
      },
      {
        label: "Spring Boot",
        badge: "SB",
        bgColor: "#007396",
        textColor: "#fff",
      },
    ],
  },
  {
    title: "Ferramentas",
    titleKey: "skills.tools",
    skills: [
      {
        label: "Git",
        badge: "G",
        bgColor: "#f1602a",
        textColor: "#fff",
      },
      {
        label: "Docker",
        badge: "D",
        bgColor: "#007396",
        textColor: "#fff",
      },
      {
        label: "VS Code",
        badge: "VS",
        bgColor: "#2496ed",
        textColor: "#fff",
      },
      {
        label: "Figma",
        badge: "F",
        bgColor: "#001e36",
        textColor: "#00d4ff",
      },
      {
        label: "Postman",
        badge: "P",
        bgColor: "#9999cc",
        textColor: "#fff",
      },
      {
        label: "Webpack",
        badge: "W",
        bgColor: "#007acc",
        textColor: "#fff",
      },
    ],
  },
];

export const skillsData = technicalSkills;
