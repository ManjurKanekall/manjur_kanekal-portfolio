import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  // Medium API returns blog content in HTML format.
  // This extracts readable text from <p> tags.
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(error => {
            console.error(
              `${error} (Blogs section reverted to default blogs)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  return (
    <motion.div
      className="main"
      id="blogs"
      initial={{ opacity: 0, y: 30 }}
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
          mediumBlogs === "Error"
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
