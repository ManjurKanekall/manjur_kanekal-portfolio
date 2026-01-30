import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Podcast.scss";
import { podcastSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);

  if (!podcastSection) {
    console.error("podcastSection object for Podcast section is missing");
  }

  if (!podcastSection.display) {
    return null;
  }

  return (
    <motion.div
      className="main"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="podcast-header">
        <h1 className="podcast-header-title">
          {podcastSection.title}
        </h1>

        <p
          className={
            isDark
              ? "dark-mode podcast-header-subtitle"
              : "subTitle podcast-header-subtitle"
          }
        >
          {podcastSection.subtitle}
        </p>
      </div>

      <div className="podcast-main-div">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.log(
              `Podcast link for ${podcastSection.title} is missing`
            );
          }
          return (
            <div key={i}>
              <iframe
                className="podcast"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title="Podcast"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
