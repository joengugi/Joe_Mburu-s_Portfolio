import { getBlogBySlug } from '../../../lib/blogs';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const blog = getBlogBySlug(slug) as BlogPost;
  const processedContent = await remark().use(html).process(blog.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose mx-auto py-20">
      <h1>{blog.title}</h1>
      <p className="text-gray-400">{blog.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
} 