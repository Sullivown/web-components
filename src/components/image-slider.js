const CreateImageSlider = ({ id, images }) => {
	let currentImage = 0;
	const totalImages = images.length;

	const updateImage = (sliderId, imageIndex) => {
		const slider = document.querySelector(`#${sliderId}`);
		slider.style.backgroundImage = `url(${images[imageIndex]})`;
	};

	const changeImage = (event) => {
		const sliderId = event.target.parentNode.id;
		if (event.target.dataset.buttonType === 'previous') {
			if (currentImage === 0) {
				currentImage = images.length - 1;
			} else {
				currentImage -= 1;
			}
		} else if (event.target.dataset.buttonType === 'next') {
			if (currentImage === totalImages - 1) {
				currentImage = 0;
			} else {
				currentImage += 1;
			}
		}

		updateImage(sliderId, currentImage);
	};

	const render = () => {
		const imageSlider = document.createElement('div');
		imageSlider.setAttribute('id', id);
		imageSlider.classList.add('image-slider');
		imageSlider.style.backgroundImage = `url(${images[currentImage]})`;

		const previousButton = document.createElement('button');
		previousButton.textContent = '<';
		previousButton.dataset.buttonType = 'previous';
		previousButton.addEventListener('click', (event) => {
			changeImage(event);
		});
		imageSlider.appendChild(previousButton);

		const nextButton = document.createElement('button');
		nextButton.textContent = '>';
		nextButton.dataset.buttonType = 'next';
		nextButton.addEventListener('click', (event) => {
			changeImage(event);
		});
		imageSlider.appendChild(nextButton);

		return imageSlider;
	};

	return {
		render,
	};
};

export default CreateImageSlider;
