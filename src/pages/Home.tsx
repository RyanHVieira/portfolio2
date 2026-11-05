import Navbar from "../components/Navbar";
import CardHolder from "../components/CardHolder";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { useTranslation, useTranslationObject } from "../i18n/useTranslation";
import { projects } from "../data/projects";
import { technicalSkills, type SkillGroup, type SkillItem } from "../data/skills";

export default function Home() {
  const t = useTranslation();
  const tObject = useTranslationObject();

  // Get data with multiple fallbacks
  const experienceDataRaw = tObject('experienceData');
  let experienceData = [];
  if (Array.isArray(experienceDataRaw)) {
    experienceData = experienceDataRaw;
  }

  // Soft skills are the only skills loaded via i18n
  const softSkillsRaw = tObject('softSkills') || tObject('skillsData');
  let softSkillsItems: SkillItem[] = [];
  if (Array.isArray(softSkillsRaw)) {
    if (softSkillsRaw.length > 0 && Array.isArray((softSkillsRaw[0] as any)?.skills)) {
      softSkillsItems = (softSkillsRaw[0] as any).skills;
    } else {
      softSkillsItems = softSkillsRaw as SkillItem[];
    }
  }

  const softSkillsGroup: SkillGroup = {
    title: t('skills.softSkills') || 'Soft Skills',
    skills: softSkillsItems,
  };

  const localizedTechnicalSkills: SkillGroup[] = technicalSkills.map((group) => {
    const localizedTitle = group.titleKey ? t(group.titleKey) : group.title;
    return {
      ...group,
      title: localizedTitle !== group.titleKey ? localizedTitle : group.title,
    };
  });

  const skillsGroups: SkillGroup[] = [
    ...localizedTechnicalSkills,
    ...(softSkillsItems.length > 0 ? [softSkillsGroup] : []),
  ];

  return (
    <>
      <Navbar />
      <About />
      <Experience columns={experienceData} />
      <Skills groups={skillsGroups} />
      <CardHolder projects={projects} />
      <Contact />
    </>
  );
}