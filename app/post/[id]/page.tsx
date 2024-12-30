import { notFound } from "next/navigation";
import Image from "next/image";

// Type for blog post
type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
};

// Sample blog posts (should match those in Blog.tsx)
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

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  // Handle invalid post IDs
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen">

      {/* Post Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg leading-relaxed">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
