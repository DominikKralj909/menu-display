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
            <div
                className="slider-images-container"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {sliderImages.map((image: SliderImage, index: number) => (
                    <img
                        key={image.id}
                        src={`/img/${image.src}`}
                        alt={`Slide ${index + 1}`}
                        className="slider-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
