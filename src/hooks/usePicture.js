const usePicture = () => {
    const pictures = [
        'https://i.postimg.cc/2SfVprLS/mock1.png',
        'https://i.postimg.cc/N0sFMD4h/mock2.png',
        'https://i.postimg.cc/dVmDwpGm/mock3.png',
        'https://i.postimg.cc/Qtq98Mwb/mock4.jpg',
        'https://i.postimg.cc/RFmJxtsh/mock5.jpg',
        'https://i.postimg.cc/FR1KbK8D/mock6.jpg',
        'https://i.postimg.cc/W453JZWd/mock7.jpg',
        'https://i.postimg.cc/ZndKgMTN/mock8.jpg',
        'https://i.postimg.cc/cLMN58nX/mock9.jpg',
        'https://i.postimg.cc/sDpVt2QH/mock10.jpg',
        'https://i.postimg.cc/g2mYdP3z/mock11.jpg',
        'https://i.postimg.cc/gcLcHsYW/mock12.jpg',
        'https://i.postimg.cc/tg6Dz8m6/mock13.jpg',
        'https://i.postimg.cc/9Mjbg1vn/mock14.jpg',
        'https://i.postimg.cc/DZdg9Lhy/mock15.jpg'
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