import CreateDropdownMenu from './components/dropdown-menu.js';
import CreateImageSlider from './components/image-slider.js';

const body = document.querySelector('body');

const dropDown1 = CreateDropdownMenu({
	menuTitle: 'Click Me',
	menuItems: [{ title: 'Link1', url: 'http://www.google.com' }],
});

const dropDown2 = CreateDropdownMenu({
	menuTitle: 'Click Me 2',
	menuItems: [
		{ title: 'Link 2', url: 'http://www.google.com' },
		{ title: 'Link 3', url: 'http://www.google.com' },
		{ title: 'Link 4', url: 'http://www.google.com' },
	],
});

const slider1 = CreateImageSlider({
	id: 'slider-1',
	images: [
		'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
		'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg',
		'https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg',
	],
});

const slider2 = CreateImageSlider({
	id: 'slider-2',
	images: [
		'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
		'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg',
		'https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg',
	],
});

body.appendChild(dropDown1.render());
body.appendChild(dropDown2.render());
body.appendChild(slider1.render());
body.appendChild(slider2.render());
