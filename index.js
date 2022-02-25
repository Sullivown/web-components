import CreateDropdownMenu from './components/dropdown-menu.js';
import CreateImageSlider from './components/image-slider.js';
import CreateMobileMenu from './components/mobile-menu.js';

const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hero = document.querySelector('#hero');

const dropDown1 = CreateDropdownMenu({
	menuTitle: 'Nav Item 1',
	menuItems: [{ title: 'Link1', url: 'http://www.google.com' }],
});

const dropDown2 = CreateDropdownMenu({
	menuTitle: 'Nav Item 2',
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

const mobileMenu1 = CreateMobileMenu({
	id: 'mobile-menu-1',
	menuItems: [
		{ title: 'Home', url: '#' },
		{ title: 'News', url: '#' },
		{ title: 'Profile', url: '#' },
		{ title: 'Settings', url: '#' },
	],
});

body.appendChild(mobileMenu1.render());
nav.appendChild(dropDown1.render());
nav.appendChild(dropDown2.render());
hero.appendChild(slider1.render());
