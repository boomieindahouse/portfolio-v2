const PortfolioSection = () => {
    const projects = [
        {
            title: "Website & Application Development",
            image: "https://i.postimg.cc/yxg3c3Py/meetingweb.jpg",
        },
        {
            title: "UX/UI Design",
            image: "https://i.postimg.cc/cC1zhxDr/uxuifigma.jpg",
        },
        {
            title: "Photography",
            image: "https://i.postimg.cc/W328rr9k/picc.jpg",
        },
        {
            title: "Graphic Ads Design",
            image: "https://i.postimg.cc/sDVWLfWt/graphicmock.jpg",
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
                        <a href="/works" className="text-gray-400 hover:underline hover:text-white transition-colors duration-300 text-sm lg:text-xl xl:text-2xl">
                            See more
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mt-8 lg:mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative ${index % 2 !== 0 ? 'sm:mt-16 lg:mt-24' : ''}`}
                        >
                            <div className="bg-primary w-full aspect-[4/3] rounded-lg overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="mt-4 text-lg lg:text-xl font-medium">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;