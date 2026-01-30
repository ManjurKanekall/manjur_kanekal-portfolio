import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      className="footer-div"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Made with ❤️ by Manjur Kanekal")}
      </p>
    </motion.div>
  );
}
