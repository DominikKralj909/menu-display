const BASE_URL = 'http://localhost:5000';

const getSliderImages = async () => {
    try {
        const response = await fetch(`${BASE_URL}/sliderImages`);
        if (!response.ok) {
            throw new Error('Failed to fetch slider images');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching slider images:', error);
        throw error;
    }
};

const getFooterLogo = async () => {
    try {
        const response = await fetch(`${BASE_URL}/footerLogo`);
        if (!response.ok) {
            throw new Error('Failed to fetch footer logo');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching footer logo:', error);
        throw error;
    }
};

export const api = {
    getSliderImages,
    getFooterLogo
};
