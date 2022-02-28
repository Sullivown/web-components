import '../styles.css';

// Accepts an ID for the component and an array of objects, each with title and url properties.
const CreateMobileMenu = ({ id, menuItems }) => {
	let state = 'closed';
	const totalItems = menuItems.length;

	const toggle = (event) => {
		const menuBar = document.querySelector(
			`#${event.target.parentNode.parentNode.id}`
		).firstChild;
		const buttons = menuBar.querySelectorAll('.mobile-menu-button');
		const toggleButton = menuBar.querySelector('button');

		if (state === 'closed') {
			buttons.forEach((button) => {
				const navButton = button;
				navButton.style.visibility = 'visible';
				navButton.style.opacity = 1;
			});
			toggleButton.textContent = 'X';
			menuBar.style.backgroundColor = 'rgba(240, 109, 6, 1)';

			state = 'open';
		} else if (state === 'open') {
			buttons.forEach((button) => {
				const navButton = button;
				navButton.style.opacity = 0;
				navButton.style.visibility = 'hidden';
			});
			toggleButton.textContent = '+';
			menuBar.style.backgroundColor = 'rgba(240, 109, 6, 0)';

			state = 'closed';
		}
	};

	const render = () => {
		const mobileMenu = document.createElement('div');
		mobileMenu.classList.add('mobile-menu');
		mobileMenu.setAttribute('id', id);

		const mobileMenuBar = document.createElement('nav');
		mobileMenuBar.classList.add('mobile-menu-bar');
		mobileMenu.appendChild(mobileMenuBar);

		mobileMenuBar.innerHTML = '';
		menuItems.forEach((item) => {
			if (menuItems.indexOf(item) === Math.floor(totalItems / 2)) {
				const toggleButton = document.createElement('button');
				toggleButton.textContent = '+';
				toggleButton.classList.add('mobile-menu-toggle');
				toggleButton.addEventListener('click', (event) => {
					toggle(event);
				});

				mobileMenuBar.appendChild(toggleButton);
			}

			const button = document.createElement('a');
			button.classList.add('mobile-menu-button');
			button.setAttribute('href', item.url);
			button.textContent = item.title;
			button.style.visibility = 'hidden';
			mobileMenuBar.appendChild(button);
		});

		return mobileMenu;
	};

	return {
		render,
	};
};

export default CreateMobileMenu;
