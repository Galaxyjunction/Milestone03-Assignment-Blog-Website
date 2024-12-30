import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10"></div>

      <div className="container mx-auto px-6 py-16 text-center lg:text-left relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="/images/my-picture.jpg" // Ensure image is in the public folder
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full w-96 h-96 mx-auto lg:mx-0 border-4 border-yellow-400 shadow-xl"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">About Me</h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hello! I&apos;m <span className="font-semibold text-yellow-300">Kehkashan Ahad</span>, a Fullstack Developer with a passion for building innovative web applications. I specialize in modern technologies like <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, and <span className="font-semibold">Tailwind CSS</span>.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              I created this space to share my experiences, insights, and tips on web development, with the goal of making learning easier and more enjoyable for everyone. Whether you&apos;re just starting out or already a seasoned developer, I hope to offer valuable resources and inspiration for you.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              When I&apos;m not coding, I love exploring new technologies, experimenting with UI/UX design, and helping others grow in the tech community. I strongly believe in the power of collaboration and community-driven growth.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              If you&apos;d like to get in touch, feel free to{" "}
              <Link
                href="/contact"
                className="bg-yellow-300 text-black hover:text-blue-600 hover:underline rounded px-4 py-2"
              >
                reach out
              </Link>{" "}
              for any questions or just to connect. Let&apos;s make great things happen together!
            </p>
            <p className="text-lg md:text-xl font-semibold mt-6">
              Join me on this exciting journey of growth, creativity, and building amazing projects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

