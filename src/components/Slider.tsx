import { useState, useEffect } from 'react';
import { api } from '../apis/api';
import { SliderImage } from '../apis/types';

const Slider = () => {
    const [sliderImages, setSliderImages] = useState<Array<SliderImage>>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
	
    const fetchSliderImages = async () => {
        try {
            const response = await api.getSliderImages();
            setSliderImages(response);
        } catch (error) {
            console.error('Error fetching slider images:', error);
        }
    };

    useEffect(() => {
        fetchSliderImages();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [sliderImages]);

    return (
        <div className="slider">
            {sliderImages.length > 0 && (
                <img
                    src={`/img/${sliderImages[currentIndex].src}`}
                    alt={`Slide ${currentIndex + 1}`}
                    className="slider-image"
                />
            )}
        </div>
    );
};

export default Slider;
