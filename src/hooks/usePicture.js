const usePicture = () => {
    const pictures = [
        'https://i.postimg.cc/SR8VVws5/1.png',
        'https://i.postimg.cc/h47CS7rr/2.png',
        // 'https://i.postimg.cc/W328rr9k/picc.jpg',
        'https://i.postimg.cc/MTgd7WWV/4.png',
        // 'https://i.postimg.cc/Y00xD7B2/355393367-200712936272602-6289766086379571234-n.jpg',
        'https://i.postimg.cc/SN6D9FHY/6.png',
        'https://i.postimg.cc/sgKmnPjV/7.png',
        // 'https://i.postimg.cc/59KgYX8X/354397081-788469556086765-3935830681538853378-n.jpg',
        'https://i.postimg.cc/26Lx8P46/9.png',
        'https://i.postimg.cc/g0TDpYLQ/10.png'
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