'use strict';

// Regex nextLine: /(\r\n|\n|\r)/gm

// Global identifiers (variables)
let title = document.querySelector('#title');
let body = document.querySelector('body');
let inputItem = document.querySelector('#inputItem');
let addItemButton = document.querySelector('#addItemButton');
let itemList = document.querySelector('#itemList');
let topAddItem = document.querySelector('#topAddItem');

// Event listeners
title.addEventListener('keydown', updateTitle);
body.addEventListener('click', exitTitle);
inputItem.addEventListener('keyup', checkAddItem);
itemList.addEventListener('scroll', updateListShadow);
addItemButton.addEventListener('click', addItem);

checkAddItem();
updateListShadow();

function updateTitle(e) {
	let titleLength = title.innerText.length-1;

	if (titleLength == 30 && e.keyCode != 8) {
		e.preventDefault();
	}

	if (e.keyCode == 13 || e.keyCode == 27) {
		this.blur();
	}

	console.log(titleLength);
}

function exitTitle() {
	if (title.innerText.length == 0) {
		title.innerText = 'My to do list';
	}
}

function checkAddItemButton() {
	if (inputItem.value != '') {
		return true;
	} else {
		return false;
	}
}

function checkAddItem() {
	if (checkAddItemButton()) {
		addItemButton.style.backgroundColor = '#009688';
	} else {		
		addItemButton.style.backgroundColor = '#F44336';
	}
}

function updateListShadow() {
	if (itemList.scrollTop >= 12.5) {
		topAddItem.classList.add('scrollListShadow');
	} else {
		topAddItem.classList.remove('scrollListShadow');
	}
}

function addItem() {
	if (checkAddItemButton()) {
		let item = inputItem.value;
		inputItem.value = '';
		
		checkAddItem();

		let itemSpan = document.createElement('span');
		itemSpan.innerHTML = item;
		itemSpan.classList.add('items');

		let itemDiv = document.createElement('div');
		itemDiv.classList.add('divItem');

		itemDiv.appendChild(itemSpan);
		itemList.appendChild(itemDiv);
	}
}
