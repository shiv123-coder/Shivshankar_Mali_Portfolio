import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const rootDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export const getPostBySlug = (slug: string): BlogPost => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    readingTime: readingTime(content).text,
    content,
  };
};

export const getAllPosts = (): BlogPost[] => {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
