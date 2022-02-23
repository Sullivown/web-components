import createDropdownMenu from './components/dropdown-menu.js';

const body = document.querySelector('body');

const dropDown1 = createDropdownMenu({
	menuTitle: 'Click Me',
	menuItems: [{ title: 'Link1', url: 'http://www.google.com' }],
});

const dropDown2 = createDropdownMenu({
	menuTitle: 'Click Me 2',
	menuItems: [
		{ title: 'Link 2', url: 'http://www.google.com' },
		{ title: 'Link 3', url: 'http://www.google.com' },
		{ title: 'Link 4', url: 'http://www.google.com' },
	],
});

body.appendChild(dropDown1.render());
body.appendChild(dropDown2.render());
