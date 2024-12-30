import Image from "next/image";
import Link from "next/link";

// Type for blog posts
type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
};

// Sample blog posts
const posts: Post[] = [
  {
    id: "1",
    title: "Introduction to Next.js",
    content: "Learn the basics of Next.js in this post.",
    image: "/images/introduction.webp",
  },
  {
    id: "2",
    title: "Routing in Next.js",
    content: "A guide to dynamic routing in Next.js.",
    image: "/images/routing.jpeg",
  },
  {
    id: "3",
    title: "Deploying Next.js Apps",
    content: "Tips for deploying your Next.js applications.",
    image: "/images/Deploy.jpeg",
  },
  {
    id: "4",
    title: "Optimizing Next.js Performance",
    content: "Boost your app performance with these tips.",
    image: "/images/Optimize.jpg",
  },
  {
    id: "5",
    title: "API Routes in Next.js",
    content: "Learn how to build API routes in Next.js.",
    image: "/images/api.jpeg",
  },
];

const Blog = () => {
  return (
    <div
      id="blog"
      className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[900px] h-[900px] bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-500 opacity-15 blur-[200px]"></div>
      </div>

      {/* Blog Header */}
      <div className="relative text-center py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">Welcome to My Blog</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Explore insightful articles, engaging tutorials, and professional tips on web development and Next.js.
        </p>
      </div>

      {/* Blog Carousel */}
      <div className="relative container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-200">Featured Blogs</h2>
        <div className="flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide">
          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-[300px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <p className="mt-2 text-gray-200">{post.content.substring(0, 70)}...</p>
                <Link
                  href={`/post/${post.id}`}
                  className="text-indigo-300 hover:underline mt-4 block font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

