# web-components-sullivown

A small library of reusable JS front-end website components, including:

-   Hero image slider
-   Dropdown nav menu
-   Toggleable mobile sticky menu

---

## Installation

`npm install web-components-sullivown`
`import { CreateDropdownMenu, CreateImageSlider, CreateMobileMenu, } from 'web-components-sullivown'`

---

## Components

### Hero Image Slider

A full screen height hero image slider with controls.

#### Useage

Accepts an object with `id` and `images` parameters. `id` is the desired ID of the component (must be unique) and `images` accepts an array of image urls/sources, e.g.:

```
const slider1 = CreateImageSlider({
        id: 'slider-1',
	images: [
		'https://example.org/images/cat.png',
		'https://example.org/images/dog.png',
		'https://example.org/images/moose.png',
	],
});
```

Render to the page by adding the component to an existing element using the `.render()` method, e.g.:

```
const hero = document.querySelector('#hero');
hero.appendChild(slider1.render());
```

### Dropdown Nav Menu

An animated dropdown nav menu.

#### Usage

Accepts an object with the menu title (displayed on the menu toggle/button) and an array of menu items. `title` will be the text displayed on the menu button/toggle. `menuItems` accepts an array of objects with `title` and `url` properties which are used to generate the nav items on the dropdown menu e.g.:

```
const dropDown1 = CreateDropdownMenu({
	menuTitle: 'Nav Item 1',
	menuItems: [
	{ title: 'Link1', url: 'http://www.google.com' },
	{ title: 'Link 2', url: 'http://www.google.com' },
	],
});
```

Render to the page by adding the component to an existing element using the `.render()` method, e.g.:

```
const nav = document.querySelector('nav');
nav.appendChild(dropDown1.render());;
```

### Mobile Menu

Accepts an object with `id` and `menuItems` parameters. `id` is the desired ID of the component (must be unique) and 'menuItems' accepts an array of objects with `title` and `url` properties, each of which is used to generate the menu items, e.g.:

```
const mobileMenu1 = CreateMobileMenu({
	id: 'mobile-menu-1',
	menuItems: [
		{ title: 'Home', url: 'https://www.example.com/home' },
		{ title: 'News', url: 'https://www.example.com/news' },
		{ title: 'Profile', url: 'https://www.example.com/profile' },
		{ title: 'Settings', url: 'https://www.example.com/settings' },
	],
});
```

Render to the page by adding the component to an existing element using the `.render()` method, e.g.:

```
const nav = document.querySelector('nav');
nav.appendChild(dropDown1.render());
```
