export default function parseDice(diceString = "") {
	var dice = {};
	if (diceString.length > 0) {
		var diceArray = diceString.split("+");
		diceArray.forEach(e => {
			e = e.trim();
			if (e.includes("d")) {
			var result = e.split("d");
				if (dice[result[1]]) {
					dice[result[1]] = dice[result[1]] + +result[0];
				} else {
					dice[result[1]] = +result[0];
				}
			} else {
				if (dice[1]) {
					dice[1] = dice[1] + +e;
				} else {
					dice[1] = +e;
				}
			}
		});
	}
	
	return dice;
}