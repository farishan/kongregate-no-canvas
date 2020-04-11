(function(root){
const gameTitle = 'Game Title';
document.title = gameTitle;
document.getElementById('gameTitle').innerHTML = gameTitle;
document.getElementById('mainMenu').style.display = 'block';
const settingMessage = document.getElementById('settingMessage');

var screens = document.querySelectorAll('.screen');

var player = {
	_id: ID(),
	name: "Default",
	created_at: new Date().toISOString()
};

var game = {
	session: {
		start: new Date().toISOString()
	},
	player: player,
};

window.onload = (() => {
	setScreenNavigators();
	setTime();

	// Set save/load/import/export system
	Saloimex.init({ title: gameTitle });
})();

function setTime(){
	// Dependecy: MainLoop.js
	let milliseconds = 0;
	let seconds = 0;
	let minutes = 0;
	let hours = 0;

	// in-game multiplier
	let multiplier = 1;
	MainLoop.setUpdate(function(){
		milliseconds += MainLoop.getSimulationTimestep()*multiplier;
		if(milliseconds >= 1000){
			milliseconds = 0;
			seconds++;
			if(seconds >= 60){
				seconds = 0;
				minutes++;
				if(minutes >= 60){
					minutes = 0;
					hours++;
					if(hours > 23){
						hours = 0;
					}
				}
			}
		}
		const time = `${hours}:${minutes}:${seconds}:${milliseconds.toFixed()}`
		console.log(time)
	})
	MainLoop.start()

	setTimeout(function(){
		MainLoop.stop()
		// setTimeout(function(){
		// 	MainLoop.start()
		// }, 3000)
	}, 3000)
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

function hideElements(elements){
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = 'none';
	}
};

/* Notifications
---------------------------------------------------- */
function pushSettingNotification(message){
	settingMessage.innerHTML = message;
	setTimeout(function(){
		settingMessage.innerHTML = '';
	}, 1000);
};

/* Saloimex (Save Load Import Export)
---------------------------------------------------- */
function save(){
	Saloimex.save(game);

	pushSettingNotification('saved');
};

function load(){
	Saloimex.load();

	pushSettingNotification('loaded');
};

function exportData(){
	let b64 = document.getElementById('b64');
	b64.value = Saloimex.exportData(game);

	pushSettingNotification('exported');
};

function importData(){
	let b64_import = document.getElementById('b64').value;
	game = Saloimex.importData(b64_import) || game;
	console.log(game)

	pushSettingNotification('imported');
};

/* Global Functions
---------------------------------------------------- */
function ID() {
	return '_' + Math.random().toString(36).substr(2, 9);
};

root.load = load;
root.save = save;
root.exportData = exportData;
root.importData = importData;
})(this);
