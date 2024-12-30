import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Custom Background */}
      <div className="absolute inset-0 -z-10">
        {/* Light Beams */}
        <div className="absolute w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-50 blur-2xl transform rotate-45"></div>
        <div className="absolute w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-50 blur-2xl transform -rotate-45"></div>

        {/* Highlight Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[900px] h-[900px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-[200px]"></div>
        </div>

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/path-to-texture-image.png')] bg-cover bg-no-repeat opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Welcome to My{" "}
          <span className="text-yellow-300 underline decoration-white decoration-4">
            Blog Website
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover insightful articles, engaging stories, and a treasure trove of knowledge tailored just for you.
        </p>
        <div className="flex space-x-4 mt-6">
          <Link
            href="#blog"
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 transform hover:scale-105 transition-transform"
          >
            Explore Blog
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-white/30 to-white/10 text-white font-semibold border border-white rounded-lg shadow-lg hover:from-white/50 hover:to-white/20 transform hover:scale-105 transition-transform"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-10 h-10 bg-yellow-300 rounded-full shadow-lg animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-400 rounded-full shadow-lg animate-float-slow"></div>
        <div className="absolute top-1/3 left-10 w-6 h-6 bg-white/80 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;



