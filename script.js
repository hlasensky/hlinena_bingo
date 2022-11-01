var today = new Date();
var date_text = String(today.getDate()) + ". " + String(today.getMonth() + 1) + ". " + String(today.getFullYear());

document.getElementById("date").innerText = date_text;
let squares = document.getElementsByClassName("square");

let dict = [
	"drevorubač",
	"hnusné číslo",
	"zneužít",
	"zuzka",
	"kolieska",
	"počuješ ma tomáš?",
	"hliněný",
	"čas dôkaz",
	"tony",
	"somarina",
	"umelý krok",
	"dcera",
	"stránky hliněné",
	"násilí",
	"hovadina",
	"přestávku?",
	"vyrušující ať jdou do parku",
	"někdo spí",
	"rozmazanej / přesvícenej visualizér",
	"veronika",
	"scheatovat",
	"nekonečná minuta",
	"chuck norris",
];

//shuffle
let random_gen = new Math.seedrandom(date_text);

dict.map((cell) => {
	let swap_index = Math.floor(random_gen.quick() * dict.length);
	let temp = dict[swap_index];
	dict[swap_index] = cell;
	cell = temp;
});

const win = () => {
	alert("Bingo!");
}

const full = (bool) => {
	for (x = 0; x < 4; ++x) {
		bool = true;
		for (y = 0; y < 4; ++y) {
			if (!checked[y * 4 + x]) {
				bool = false;
			}
		}
		if (bool) {
			win();
			return;
		}
	}
};

let checked = Array(16).fill(false);

const check_win = () => {
	//columns
	full(true);
	//rows
	full(false);
	//diagonal
	if (checked[0] && checked[5] && checked[10] && checked[15]) {
		win();
		return;
	}
	if (checked[3] && checked[6] && checked[9] && checked[12]) {
		win();
		return;
	}
}

const onClickCell = (cell, index) => {
	cell.onclick = function () {
		checked[index] = true;
		this.style.opacity = 0.4;
		check_win();
	};
};

squares = [ ...squares ];

squares.forEach((cell) => {
	let index = squares.indexOf(cell);
	cell.children[0].innerText = dict[index];
	onClickCell(cell, index);
});
