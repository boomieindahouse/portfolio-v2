const usePicture = () => {
    const pictures = [
        'https://elboomie.vercel.app/assets/img/mock1.png',
        'https://elboomie.vercel.app/assets/img/mock2.png',
        'https://elboomie.vercel.app/assets/img/mock3.png',
        'https://elboomie.vercel.app/assets/img/mock4.jpg',
        'https://elboomie.vercel.app/assets/img/mock5.jpg',
        'https://elboomie.vercel.app/assets/img/mock6.jpg',
        'https://elboomie.vercel.app/assets/img/mock7.jpg',
        'https://elboomie.vercel.app/assets/img/mock8.jpg',
        'https://elboomie.vercel.app/assets/img/mock9.jpg',
        'https://elboomie.vercel.app/assets/img/mock10.jpg',
        'https://elboomie.vercel.app/assets/img/mock11.jpg',
        'https://elboomie.vercel.app/assets/img/mock12.jpg',
        'https://elboomie.vercel.app/assets/img/mock13.jpg',
        'https://elboomie.vercel.app/assets/img/mock14.jpg',
        'https://elboomie.vercel.app/assets/img/mock15.jpg',
        'https://elboomie.vercel.app/assets/img/mock16.jpg'
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