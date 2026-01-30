import React, { useContext } from "react";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting, resumeLink } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <motion.div
      className="greet-main"
      id="greeting"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={
                isDark ? "dark-mode greeting-text" : "greeting-text"
              }
            >
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>

            <div id="resume" className="empty-div"></div>

            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {resumeLink && (
                <Button
                  text="Download My Resume"
                  href={resumeLink}
                  newTab={true}
                />
              )}
            </div>
          </div>
        </div>

        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
