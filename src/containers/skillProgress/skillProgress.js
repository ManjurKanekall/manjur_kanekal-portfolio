import React from "react";
import { motion } from "framer-motion";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="skills-bar">
        <h1 className="skills-heading">Proficiency</h1>

        {techStack.experience.map((exp, i) => {
          const progressStyle = {
            width: exp.progressPercentage
          };

          return (
            <div key={i} className="skill">
              <p>{exp.Stack}</p>
              <div className="meter">
                <span style={progressStyle}></span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-image">
        {illustration.animated ? (
          <DisplayLottie animationData={Build} />
        ) : (
          <img
            alt="Skills"
            src={require("../../assets/images/skill.svg")}
          />
        )}
      </div>
    </motion.div>
  );
}
