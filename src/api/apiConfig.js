const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e1d1b2f0cd0ac03022b07b0b4443973b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

