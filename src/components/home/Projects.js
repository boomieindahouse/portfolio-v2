import Link from "next/link";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Website & Application Development",
      image: "https://elboomie.vercel.app/assets/img/works/meetingweb.jpg", //change already
    },
    {
      title: "UX/UI Design",
      image: "https://elboomie.vercel.app/assets/img/works/uxuifigma.jpg", //change already
    },
    {
      title: "Photography",
      image: "https://elboomie.vercel.app/assets/img/picc.jpg", //change already
    },
    {
      title: "Graphic Ads Design",
      image: "https://elboomie.vercel.app/assets/img/works/mock4.jpg", //change already
    },
  ];

  return (
    <section className="bg-primary text-white py-4 lg:py-12 xl:py-16 px-4 lg:px-6">
      <div className="container mx-auto max-w-8xl">
        <div className="flex items-center justify-between border-b border-gray-400 py-4 lg:py-8 xl:py-12">
          <div>
            <h2 className="text-3xl xl:text-[60pt] xl:text-6xl font-medium">
              Check the Works
            </h2>
          </div>
          <div>
            <Link
              href="/works"
              className="text-gray-400 hover:underline hover:text-white transition-colors duration-300 text-sm lg:text-xl xl:text-2xl"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mt-8 lg:mt-12">
          {projects.map((project, index) => (
            <Link
              href="/works#recent-works"
              key={index}
              className={`relative block ${index % 2 !== 0 ? "sm:mt-16 lg:mt-24" : ""}`}
            >
              <div className="bg-primary w-full aspect-[4/3] rounded-lg overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg lg:text-xl font-medium">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
