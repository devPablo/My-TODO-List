'use strict';

function Item(id, name, date) {
	this.id = id;
	this.name = name;
	this.date = date;
}

function getItemList() {
	let myTODOList = JSON.parse(localStorage.getItem('itemListKey'));
	if (myTODOList == null) {
		myTODOList = [];
	}
	return myTODOList;
}
