import Link from 'next/link';
import { getAllBlogs } from '../../lib/blogs';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export default function BlogPage() {
  const blogs = getAllBlogs() as BlogPost[];

  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug} className="mb-6">
            <Link href={`/blog/${blog.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {blog.title}
            </Link>
            <p className="text-gray-600">{blog.excerpt}</p>
            <span className="text-sm text-gray-400">{blog.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 