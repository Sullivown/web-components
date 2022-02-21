function createDropdownMenu(paramObj) {
	// target element, menu title, menu items with title and url
	const menuToggle = document.createElement('button');
	menuToggle.textContent = paramObj.menuTitle;
	const menuList = document.createElement('ul');

	paramObj.menuItems.forEach((item) => {
		const menuLi = document.createElement('li');
		menuLi.textContent = item.title;
		menuLi.setAttribute('href', item.url);
		menuList.appendChild(menuLi);
	});

	return paramObj;
}

export default createDropdownMenu;
