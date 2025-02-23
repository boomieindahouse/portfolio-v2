const usePicture = () => {
    const pictures = [
        'https://elboomie.vercel.app/assets/img/works/mock1.png',
        'https://elboomie.vercel.app/assets/img/works/mock2.png',
        'https://elboomie.vercel.app/assets/img/works/mock3.png',
        'https://elboomie.vercel.app/assets/img/works/mock4.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock5.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock6.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock7.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock8.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock9.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock10.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock11.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock12.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock13.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock14.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock15.jpg',
        'https://elboomie.vercel.app/assets/img/works/mock16.jpg'
    ];
    

    const getPicture = (index) => {
        // Ensure index is within bounds
        const safeIndex = ((index - 1) % pictures.length + pictures.length) % pictures.length;
        return pictures[safeIndex];
    };

    return {
        getPicture,
        totalPictures: pictures.length
    };
};

export default usePicture;