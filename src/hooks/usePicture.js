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
        'https://i.postimg.cc/rz2FLNmP/mock10.jpg',
        'https://i.postimg.cc/pV4Z3GQL/mock11.jpg',
        'https://i.postimg.cc/9F9p2d1t/mock12.jpg'
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