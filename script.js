var displayedPin = '';
var pin = '';

function EnterNumber(number)
{
	pin += number ;
    Render();
}

function Render()
{
	displayedPin = pin;
	var mustBeHidden = document.getElementById('Hide').checked;
	if (mustBeHidden) {
		displayedPin = pin.replace(/./gi, '*');
	}
	var mustBeShuffled = document.getElementById('Shuffle').checked;
	if (mustBeShuffled) {
		Shuffle();
	}
	document.getElementById("secret").innerHTML = displayedPin;
}

function Shuffle()
{
	var numericButtons = document.querySelectorAll('.keyboard .number');
	var buttonsCount = numericButtons.length;
	if (buttonsCount > 0) {
		var numbers = [];
		for (i=0; i < buttonsCount; i++) {
			numbers.push(i);
		}

		for (n in numbers) {
			var newPosition = Math.floor(Math.random() * numericButtons.length);
			delete numbers[newPosition];
			numericButtons[newPosition].parentNode.insertBefore(numericButtons[newPosition], numericButtons[n]);
		}
	}
}

function Cancel(){
	pin =  pin.substring(0, pin.length - 1);
	Render();
}

function Clear(){ 
    pin= '' ;
    Render();
}

function SendForm() {
   alert(pin);
}