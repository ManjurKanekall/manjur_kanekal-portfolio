import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left: Illustration */}
        <motion.div
          className="skills-image-div"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            />
          )}
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="skills-text-div"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className={
              isDark ? "dark-mode skills-heading" : "skills-heading"
            }
          >
            {skillsSection.title}
          </h1>

          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>

          <SoftwareSkill />

          <div>
            {skillsSection.skills.map((skill, i) => (
              <p
                key={i}
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {skill}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
