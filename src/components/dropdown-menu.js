import '../styles.css';

// Accepts an object with the menu title (displayed on the menu toggle/button) and an array of menu items. Menu items have title and url properties.
const CreateDropdownMenu = ({ menuTitle, menuItems }) => {
	const render = () => {
		const dropdown = document.createElement('div');
		dropdown.classList.add('dropdown');

		const dropdownButton = document.createElement('button');
		dropdownButton.classList.add('dropdown-button');

		dropdownButton.textContent = menuTitle;
		dropdownButton.setAttribute('id', menuTitle);
		dropdown.appendChild(dropdownButton);

		const dropdownList = document.createElement('ul');
		dropdownList.classList.add('dropdown-list');

		dropdown.appendChild(dropdownList);

		menuItems.forEach((item) => {
			const dropdownLi = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = item.title;
			a.setAttribute('href', item.url);
			dropdownLi.appendChild(a);
			dropdownList.appendChild(dropdownLi);
		});

		return dropdown;
	};

	return {
		render,
	};
};

export default CreateDropdownMenu;
