const PortfolioSection = () => {
    const projects = [
        {
            title: "Meeting Creative Company",
            image: "https://i.postimg.cc/SR8VVws5/1.png",
        },
        {
            title: "Movie Recommendation",
            image: "https://i.postimg.cc/MTgd7WWV/4.png",
        },
        {
            title: "Ecommerce Front-end",
            image: "https://i.postimg.cc/W361r7cv/2.webp",
        },
        {
            title: "Dental Ads Graphic",
            image: "https://i.postimg.cc/HLx2FJnb/8.png",
        },
    ];

    return (
        <section className="bg-primary text-white py-4 lg:pb-20 xl:py-16 px-6">
            <div className="container mx-auto">
                <div className='flex items-center justify-between border-b border-gray-400 py-5 xl:py-20'>
                    <div>
                        <h2 className="text-3xl xl:text-[60pt] font-medium">
                            Check the Works
                        </h2>
                    </div>
                    <div>
                        <a href="/works" className='text-gray-400 hover:underline hover:text-white hover:duration-500 text-sm xl:text-2xl'>See more</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-5 md:mb-20 lg:mb-16 xl:mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative sm:${index % 2 !== 0 ? 'translate-y-16 md:translate-y-20 md:ml-auto' : ''}`}
                        >
                            <div className="bg-primary w-full max-w-[700px] h-[350px] sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden mt-5 xl:mt-16 group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-[full] h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="mt-4 text-start text-lg sm:text-xl font-medium">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
