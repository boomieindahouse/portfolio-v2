const projects = [
    // Web & Application
    {
        category: "Web & Application",
        title: "Meeting Creative Company Website",
        image: "https://i.postimg.cc/yxg3c3Py/meetingweb.jpg",
        technology: "NEXT.js, TailwindCSS",
        description: "A website designed and developed with NEXTjs and Tailwind for better performance. It is designed and developed only for the front-end. It is an internship project done during the internship.",
        github: "https://github.com/boomieindahouse/meeting-redesign-th",
    },
    {
        category: "Web & Application",
        title: "E-commerce Front-end",
        image: "https://i.postimg.cc/KzYMcH3V/ecom.jpg",
        technology: "React + Vite, TailwindCSS",
        description: "This project is an e-commerce website frontend developed to practice writing in React and using Tailwind CSS.",
        github: "https://github.com/boomieindahouse/ecommerce",
    },
    {
        category: "Web & Application",
        title: "Ourgram",
        image: "https://i.postimg.cc/WbZyK73Q/ourgram.jpg",
        technology: "Altorouter PHP, Javascript, CSS, MySql",
        description: "This project is a simple web application developed to mimic some basic functionalities of Instagram. It was created using the AltoRouter framework for routing.",
        github: "https://github.com/boomieindahouse/ourgram",
    },
    {
        category: "Web & Application",
        title: "Movie Recommendation",
        image: "https://i.postimg.cc/RZQ67Bcy/movierec.jpg",
        technology: "React Native",
        description: "This Movie Recommendation App It is an application that helps users discover popular movies and filter them by genre.",
        github: "https://github.com/boomieindahouse/MovieApp",
    },
    // UX/UI Design
    {
        category: "UX/UI Design",
        title: "Vongchavalitkul University Website Redesign",
        image: "https://placehold.co/800x500?text=wait+for+project+deployment",
        technology: "Figma",
        description: "A complete redesign of a Vongchavalitkul University Website",
    },
    {
        category: "UX/UI Design",
        title: "Kaspersky Icom Website Redesign",
        image: "https://placehold.co/800x500?text=wait+for+project+deployment",
        technology: "Figma",
        description: "Designed a UI kit for e-commerce platforms to speed up design workflows.",
    },
    {
        category: "UX/UI Design",
        title: "DN Medical Center Website Redesign",
        image: "https://placehold.co/800x500?text=wait+for+project+deployment",
        technology: "Figma",
        description: "Designed a UI kit for e-commerce platforms to speed up design workflows.",
    },
    {
        category: "UX/UI Design",
        title: "Apureda Website Redesign",
        image: "https://placehold.co/800x500?text=wait+for+project+deployment",
        technology: "Figma",
        description: "Designed a UI kit for e-commerce platforms to speed up design workflows.",
    },
    // Graphic Design
    {
        category: "Graphic Design",
        title: "Graphic design wishing new year",
        image: "https://i.postimg.cc/FR1KbK8D/mock6.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design greeting new year 2025",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/Qtq98Mwb/mock4.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/sDVWLfWt/graphicmock.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/zv51jcy1/portmock.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/XY6DyCBT/portmock2.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/13xS0k9f/dentalmock.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    {
        category: "Graphic Design",
        title: "Dental in garden graphic ads",
        image: "https://i.postimg.cc/YSsBNTZX/dentalads.jpg",
        technology: "Adobe Illustrator, Adobe Photoshop",
        description: "Graphic design provides knowledge about dentistry.",
    },
    // Photography
    {
        category: "Photography",
        image: "https://i.postimg.cc/W328rr9k/picc.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/59KgYX8X/354397081-788469556086765-3935830681538853378-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/zDxyprPR/355392723-770796901451094-8949239429140119245-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/NjHLgrG1/360014201-306421095138778-4102471241018283081-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/HsjVhhfv/354503949-213662014954149-1626274355653316251-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/J0YthNBQ/409495588-1344033926237695-7849092120105937832-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/SN5JFG4S/403832295-371728835248282-1590041472945275250-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/Y00xD7B2/355393367-200712936272602-6289766086379571234-n.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/2yzztCL3/121.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/T1Y69QBD/123421.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/B65SNj6d/123.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/Y0nwyYwy/346457.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/XYZnmHqK/12343.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/3Rh7y3B9/32544.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/MTJZy7W7/3357.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/Sxwmh6YB/32141.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/7L0wY5gf/43678.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/c1m1ntP3/4654.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/j5hTPB3T/47642.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/XqQVSt9L/525.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/zX2JdZzX/6899.jpg",
    },
    {
        category: "Photography",
        image: "https://i.postimg.cc/Kv8GrvyH/5754.jpg",
    },
];

export default projects;