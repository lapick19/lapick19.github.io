var Are_you_ready = document.getElementById('Are_you_ready');
var input = document.getElementById('input');
var label = document.getElementById('label');
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var Word;
var arr = ['We','You','They','Pail','Bucketful','Transfer','Battery','Trot','Troop','To invite','Take out','They','Pack','Box','Mouse','Hazelnut','Cruel','Lesson','Vague'];             
function Close() {
	display_none(Are_you_ready);
}
function Transfer(){
	input.value = '';
}
Word = Math.floor(Math.random() * arr.length);
label1.innerHTML = arr[Word];
function check_input() {
	if (label1.innerHTML == 'They') {
		if (input.value == 'Они') {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"'
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'We') {
		if (input.value == 'Мы'|| input.value == 'мы' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"'
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'You') {
		if (input.value == 'Ты'
		|| input.value == 'Вас'	
		|| input.value == 'Вам' 
		|| input.value == 'Вы' 
		|| input.value == 'Тобой' 
		|| input.value == 'Вами' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'You также преводиться как: вас, вам, вы, тобой, вами, ты <br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Pail') {
		if (input.value == 'Ведро'
		|| input.value == 'Ведерко'	
		|| input.value == 'Бак' 
		|| input.value == 'Бадья' 
		|| input.value == 'Кадка' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Pail также преводиться как:ведро, ведерко, бак, бадья, кадка<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};	
	if (label1.innerHTML == 'Bucketful') {
		if (input.value == 'Ведро' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Transfer') {
		if (input.value == 'Трансфер'
		|| input.value == 'Передача'	
		|| input.value == 'Перевод' 
		|| input.value == 'Перенос' 
		|| input.value == 'Перемещение'
		|| input.value == 'Трансферт' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Transfer также преводиться как:трансфер, передача, перевод, перенос, перемещение, трансферт<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Battery') {
		if (input.value == 'Аккумулятор'
		|| input.value == 'Батарея'	
		|| input.value == 'Батарейка' 
		|| input.value == 'Побои' 
		|| input.value == 'Гальванический элемент'
		|| input.value == 'Оскорбление действием' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Battery также преводиться как:аккумулятор, батарея, батарейка, побои, гальванический элемент, оскорбление действием<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Trot') {
		if (input.value == 'Рысь'
		|| input.value == 'Шпаргалка'	
		|| input.value == 'Старая карга' 
		|| input.value == 'Быстрая походка' 
		|| input.value == 'Торопливая походка'
		|| input.value == 'Перевод' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Trot также преводиться как:рысь, шпаргалка, старая карга, быстрая походка, торопливая походка, перевод<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Troop') {
		if (input.value == 'Отряд'
		|| input.value == 'Войска'	
		|| input.value == 'Толпа' 
		|| input.value == 'Труппа' 
		|| input.value == 'Стая'
		|| input.value == 'Батарея' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Troop также преводиться как:отряд, войска, толпа, труппа, стая, батарея<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'To invite') {
		if (input.value == 'Пригласить') {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Take out') {
		if (input.value == 'Вывезти'
		|| input.value == 'Брать'	
		|| input.value == 'Вынимать' 
		|| input.value == 'Вынести' 
		|| input.value == 'Выносить'
		|| input.value == 'Пригласить' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Take out также преводиться как:вывезти, брать, вынимать, вынести, выносить, пригласить<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Tutu') {
		if (input.value == 'Пачка') {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Pack') {
		if (input.value == 'Пакет'
		|| input.value == 'Упаковка'	
		|| input.value == 'Пак' 
		|| input.value == 'Пачка' 
		|| input.value == 'Стая' 
		|| input.value == 'Колода' ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Pack также преводиться как:пакет, упаковка, пак, пачка, стая, колода<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Box') {
		if (input.value == 'Коробка'
		|| input.value == 'Ящик'	
		|| input.value == 'Бокс' 
		|| input.value == 'Ящичек' 
		|| input.value == 'Сундук'  ) {
			label.innerHTML = 'Right';
			label2.innerHTML = 'box также преводиться как:коробка, ящик, бокс, ящичек, сундук<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Mouse') {
		if (input.value == 'Мышь') {
			label.innerHTML = 'Right';
			label2.innerHTML = 'P.S свединие с "GoogleTranslator"';	
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Hazelnut') {
		if (input.value == 'Десной орех'
			||input.value == 'Фундук'
			||input.value == 'Орех' ){
			label.innerHTML = 'Right';
			label2.innerHTML = 'Hazelnut также преводиться как:лесной орех, фундук, орех<br>P.S свединие с "GoogleTranslator"';	
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Cruel') {
		if (input.value == 'Жестокий'
			||input.value == 'Безжалостный'
			||input.value == 'Ужасный' 
			||input.value == 'Бессердечный'
			||input.value == 'Мучительный'){
			label.innerHTML = 'Right';
			label2.innerHTML = 'Cruel также преводиться как:жестокий, безжалостный, ужасный, бессердечный, мучительный<br>P.S свединие с "GoogleTranslator"';	
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Lesson') {
		if (input.value == 'Урок'
			||input.value == 'Нотация'){
			label.innerHTML = 'Right';
			label2.innerHTML = 'Lesson также преводиться как:Урок, Нотация<br>P.S свединие с "GoogleTranslator"';	
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};
	if (label1.innerHTML == 'Vague') {
		if (input.value == 'Неопределенный'
		|| input.value == 'Расплывчатый'	
		|| input.value == 'Неясный' 
		|| input.value == 'Смутный' 
		|| input.value == 'Рассеянный'  
		|| input.value == 'Неуловимый') {
			label.innerHTML = 'Right';
			label2.innerHTML = 'Vague также преводиться как:неопределенный, расплывчатый, неясный, смутный, рассеянный, неуловимый<br>P.S свединие с "GoogleTranslator"';
		}else if (input.value == ''){
			label.innerHTML = 'You did not speak a word';
		}else{
			label.innerHTML = 'Wrong';
		};
	};

};
function NewWord() {
	Word = Math.floor(Math.random() * arr.length);
	label1.innerHTML = arr[Word];
	label.innerHTML = "";
	label2.innerHTML = "";
	input.value = "";
};
function NoWord(){
	if (label1.innerHTML == 'They') {
		label.innerHTML = 'Они';
	};
	if (label1.innerHTML == 'We') {
		label.innerHTML = 'Мы';
	};
	if (label1.innerHTML == 'You') {
		label1.innerHTML = 'You также преводиться как: вас, вам, вы, тобой, вами, ты <br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Pail') {
		label.innerHTML = 'Pail также преводиться как:ведро, ведерко, бак, бадья, кадка<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Bucketful') {
		label.innerHTML = 'P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Transfer') {
		label.innerHTML = 'Transfer также преводиться как:трансфер, передача, перевод, перенос, перемещение, трансферт<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Trot') {
		label.innerHTML = 'Trot также преводиться как:рысь, шпаргалка, старая карга, быстрая походка, торопливая походка, перевод<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Battery') {
		label.innerHTML = 'Battery также преводиться как:аккумулятор, батарея, батарейка, побои, гальванический элемент, оскорбление действием<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Troop') {
		label.innerHTML = 'Troop также преводиться как:отряд, войска, толпа, труппа, стая, батарея<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'To invite') {
		label.innerHTML = 'Пригласить';
	};
	if (label1.innerHTML == 'Take out') {
		label.innerHTML = 'Take out также преводиться как:вывезти, брать, вынимать, вынести, выносить, пригласить<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Tutu') {
		label.innerHTML = 'Пачка';
	};
	if (label1.innerHTML == 'Pack') {
		label.innerHTML = 'Pack также преводиться как:пакет, упаковка, пак, пачка, стая, колода<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Box') {
		label.innerHTML = 'box также преводиться как:коробка, ящик, бокс, ящичек, сундук<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Mouse') {
		label.innerHTML = 'Мышь';
	};
	if (label1.innerHTML == 'Hazelnut') {
		label.innerHTML = 'Hazelnut также преводиться как:лесной орех, фундук, орех<br>P.S свединие с "GoogleTranslator"';
	};
	if (label1.innerHTML == 'Cruel') {
		label.innerHTML = 'Cruel также преводиться как:жестокий, безжалостный, ужасный, бессердечный, мучительный<br>P.S свединие с "GoogleTranslator"';	
	};
	if (label1.innerHTML == 'Lesson') {
		label.innerHTML = 'Lesson также преводиться как:Урок, Нотация<br>P.S свединие с "GoogleTranslator"';	
	};
	if (label1.innerHTML == 'Vague') {
		label.innerHTML = 'Vague также преводиться как:неопределенный, расплывчатый, неясный, смутный, рассеянный, неуловимый<br>P.S свединие с "GoogleTranslator"';	
	};
}
