function print(Text) {
	document.write(Text);
}
function prinCon(Text1) {
	console.log(Text1);
}
function padding(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.paddingLeft = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.paddingBottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.paddingTop = vaule;
	}else if (pos == 'right') {
		posR = elem.style.paddingRight = vaule;
	}else if (pos == 0) {
		posL = elem.style.padding = vaule;
	}
}
function margin(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.marginLeft = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.marginBottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.marginTop = vaule;
	}else if (pos == 'right') {
		posR = elem.style.marginRight = vaule;
	}else if (pos == 0) {
		posL = elem.style.margin = vaule;
	}
}
function pos(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.left = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.bottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.top = vaule;
	}else if (pos == 'right') {
		posR = elem.style.right = vaule;
	}
}
function Anim(elem,pos,i,posx,unit) {
	if (pos == 'left') {
		var checkleft;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checkleft.left;
			check += i;
			elem.style.left = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			}
		}, 1000/60);
	}else if (pos == 'top') {
		var checktop;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checktop.top;
			check += i;
			elem.style.top = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			}
		}, 1000/60);
	}else if (pos == 'bottom') {
		var checbottom;
		var check;
		var Anif = setInterval(function () {
			checkbottom = elem.getBoundingClientRect();
			check = checkbottom.bottom;
			check += i;
			elem.style.bottom = check + unit;
			if (posx <= check) {
				clearInterval(Anif);
			}
		}, 1000/60);
	}else if (pos == 'right') {
		var checkright;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checkright.right;
			check += i;
			elem.style.right = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			}
		}, 1000/60);
	}
}
function display_none(elem) {
	elem.classList.add('display-none');
	elem.classList.remove('display');
}
function display(elem) {
	elem.classList.remove('display-none');
	elem.classList.add('display');
}
function background_col(elem,color) {
	var Array = ['blue','red','green','yellow','gray'];
	if (color == 'blue') {
		elem.classList.add('background_blue');
		elem.classList.renove('background_red');
		elem.classList.renove('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.renove('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'red') {
		elem.classList.renove('background_blue');
		elem.classList.add('background_red');
		elem.classList.renove('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.renove('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'green') {
		elem.classList.renove('background_blue');
		elem.classList.renove('background_red');
		elem.classList.add('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.renove('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'yellow') {
		elem.classList.renove('background_blue');
		elem.classList.renove('background_red');
		elem.classList.renove('background_green');
		elem.classList.add('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.renove('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'gray') {
		elem.classList.renove('background_blue');
		elem.classList.renove('background_red');
		elem.classList.renove('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.add('background_gray');
		elem.classList.renove('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'black') {
		elem.classList.renove('background_blue');
		elem.classList.renove('background_red');
		elem.classList.renove('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.add('background_black');
		elem.classList.renove('background_white');
	}else if (color == 'white') {
		elem.classList.renove('background_blue');
		elem.classList.renove('background_red');
		elem.classList.renove('background_green');
		elem.classList.renove('background_yellow');
		elem.classList.renove('background_gray');
		elem.classList.renove('background_black');
		elem.classList.add('background_white');
	}else if (Array != color) {
		elem.style.backgroundColor = color;
	}

}

