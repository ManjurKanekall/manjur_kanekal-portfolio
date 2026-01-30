import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="experience-container" id="workExperience">
        <h1 className="experience-heading">Experiences</h1>

        <div className="experience-cards-div">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard
              key={i}
              isDark={isDark}
              cardInfo={{
                company: card.company,
                desc: card.desc,
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
