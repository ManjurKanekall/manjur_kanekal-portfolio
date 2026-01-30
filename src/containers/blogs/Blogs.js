import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      fetch("/blogs.json")
        .then(res => res.ok && res.json())
        .then(data => setMediumBlogs(data.items))
        .catch(() => {
          blogSection.displayMediumBlogs = "false";
        });
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  // Extract readable text from Medium HTML
  const extractTextContent = html =>
    typeof html === "string"
      ? html.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 250) + "..."
      : "";

  return (
    <motion.div
      className="main"
      id="blogs"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>

        <p
          className={
            isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
          }
        >
          {blogSection.subtitle}
        </p>
      </div>

      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.displayMediumBlogs !== "true" ||
          mediumBlogs.length === 0
            ? blogSection.blogs.map((blog, i) => (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              ))
            : mediumBlogs.map((blog, i) => (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.link,
                    title: blog.title,
                    description: extractTextContent(blog.content)
                  }}
                />
              ))}
        </div>
      </div>
    </motion.div>
  );
}
