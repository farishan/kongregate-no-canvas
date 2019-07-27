const gameTitle = 'Game Title';
document.title = gameTitle;
document.getElementById('gameTitle').innerHTML = gameTitle;
document.getElementById('mainMenu').style.display = 'block';

var screens = document.querySelectorAll('.screen');

var player = {
	name: "Default"
};

var game = {
	player: player
};

window.onload = (() => {
	setScreenNavigators();
})();

function save(){
	localStorage.setItem(gameTitle.split(' ').join('') + '_data', JSON.stringify(game));
};

function load(){
	let data = JSON.parse(localStorage.getItem(gameTitle.split(' ').join('') + '_data'));
	console.log(data);
};

function setScreenNavigators(){
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', (e) => {
			var target = e.target.dataset.target
			if(target){
				hideElements(screens);
				document.getElementById(e.target.dataset.target).style.display = 'block';
			}
		});
	}
};

function exportData(obj){
	document.getElementById('b64').value = btoa(JSON.stringify(game));
	
	// return btoa(JSON.stringify(obj));
};

function importData(b64){
	let data = atob(document.getElementById('b64').value);
	game = JSON.parse(data);

	// return JSON.parse(atob(b64));
};

function hideElements(elements){
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = 'none';
	}
};

function ID() {
	return '_' + Math.random().toString(36).substr(2, 9);
};