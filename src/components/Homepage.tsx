import { useState, useEffect } from 'react';

import { api } from '../apis/api';
import { SliderImage } from '../apis/types';

import Slider from './Slider';

function HomePage() {
	const [footerImage, setFooterImage] = useState<SliderImage>({ id: 0, src: '' });

	const fetchFooterImage = async () => {
		try {
			const response = await api.getFooterLogo();
			setFooterImage(response);
		} catch (error) {
			console.error('Error in fetching images', error);
		}
	};

	useEffect(() => {
		fetchFooterImage();
	}, []);

	return (
		<div className="homepage-wrapper">
			<Slider />
			<div className="homepage-footer">
				<img src={`/img/${footerImage.src}`} alt="Footer Logo" className="homepage-footer-logo" />
				<span className="homepage-footer-intro-text">dodirnite za početak</span>
			</div>
		</div>
	);
}

export default HomePage;
