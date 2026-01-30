import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <motion.div
      className="main"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="skills-heading">{bigProjects.title}</h1>

      <p
        className={
          isDark
            ? "dark-mode project-subtitle"
            : "subTitle project-subtitle"
        }
      >
        {bigProjects.subtitle}
      </p>

      <div className="projects-container">
        {bigProjects.projects.map((project, i) => (
          <div
            key={i}
            className={
              isDark
                ? "dark-mode project-card project-card-dark"
                : "project-card project-card-light"
            }
          >
            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="card-image"
                />
              </div>
            )}

            <div className="project-detail">
              <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                {project.projectName}
              </h5>

              <p
                className={
                  isDark ? "dark-mode card-subtitle" : "card-subtitle"
                }
              >
                {project.projectDesc}
              </p>

              {project.footerLink && (
                <div className="project-card-footer">
                  {project.footerLink.map((link, idx) => (
                    <span
                      key={idx}
                      className={
                        isDark
                          ? "dark-mode project-tag"
                          : "project-tag"
                      }
                      onClick={() => openUrlInNewTab(link.url)}
                    >
                      {link.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
