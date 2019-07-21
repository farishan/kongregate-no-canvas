const gameTitle = 'Game Title';
document.title = gameTitle;
document.getElementById('gameTitle').innerHTML = gameTitle;
document.getElementById('mainMenu').style.display = 'block';

var player = {
	name: "Default"
};

var game = {
	player: player
};

window.onload = (() => {
	setButtonListener();
})();

function save(){
	console.log(game)

	// TODO: convert game object into base64 string
};

function setButtonListener(){
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', (e) => {
			var target = e.target.dataset.target
			if(target){
				hideAreas();
				document.getElementById(e.target.dataset.target).style.display = 'block';
			}
		});
	}
};

function hideAreas(){
	var areas = document.querySelectorAll('.area');
	for (var i = 0; i < areas.length; i++) {
		areas[i].style.display = 'none';
	}
};

function ID() {
	return '_' + Math.random().toString(36).substr(2, 9);
};