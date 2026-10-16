import Navbar from "../components/Navbar";
import CardHolder from "../components/CardHolder";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { useTranslationObject } from "../i18n/useTranslation";
import { projects } from "../data/projects";

export default function Home() {
  const tObject = useTranslationObject();

  // Get data with multiple fallbacks
  const experienceDataRaw = tObject('experienceData');
  let experienceData = [];
  if (Array.isArray(experienceDataRaw)) {
    experienceData = experienceDataRaw;
  } else if (experienceDataRaw !== null && experienceDataRaw !== undefined) {
    // If it's not an array but exists, wrap it in an array? Or just use empty?
    // For now, use empty to be safe
    experienceData = [];
  }

  const skillsDataRaw = tObject('skillsData');
  let skillsData = [];
  if (Array.isArray(skillsDataRaw)) {
    skillsData = skillsDataRaw;
  } else if (skillsDataRaw !== null && skillsDataRaw !== undefined) {
    skillsData = [];
  }

  return (
    <>
      <Navbar />
      <About />
      <Experience columns={experienceData} />
      <Skills groups={skillsData} />
      <CardHolder projects={projects} />
      <Contact />
    </>
  );
}