const gameTitle = 'Game Title';
document.title = gameTitle;
document.getElementById('gameTitle').innerHTML = gameTitle;
document.getElementById('mainMenu').style.display = 'block';
const settingMessage = document.getElementById('settingMessage');

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

function save(){
	localStorage.setItem(gameTitle.split(' ').join('') + '_data', JSON.stringify(game));

	pushSettingNotification('saved');
};

function load(){
	let data = JSON.parse(localStorage.getItem(gameTitle.split(' ').join('') + '_data'));

	pushSettingNotification('loaded');
};

function exportData(obj){
	document.getElementById('b64').value = btoa(JSON.stringify(game));

	// return btoa(JSON.stringify(obj));

	pushSettingNotification('exported');
};

function importData(b64){
	let data = atob(document.getElementById('b64').value);
	game = JSON.parse(data);
	console.log(game)

	// return JSON.parse(atob(b64));

	pushSettingNotification('imported');
};

function hideElements(elements){
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = 'none';
	}
};

function pushSettingNotification(message){
	settingMessage.innerHTML = message;
	setTimeout(function(){
		settingMessage.innerHTML = '';
	}, 1000);
}

function ID() {
	return '_' + Math.random().toString(36).substr(2, 9);
};