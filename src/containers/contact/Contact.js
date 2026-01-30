import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      className="main contact-margin-top"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">
            {contactInfo.title}
          </h1>

          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>

          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <p className="contact-number">
                {contactInfo.number}
              </p>
            )}

            <a
              className="contact-detail-email"
              href={`mailto:${contactInfo.email_address}`}
            >
              {contactInfo.email_address}
            </a>

            <br />
            <br />

            <SocialMedia />
          </div>
        </div>

        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../../assets/images/contactMailDark.svg")}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
