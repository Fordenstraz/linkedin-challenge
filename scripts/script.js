// Click 1

window.onclick = event => {
	console.log(event.target);
};

// Click 2
const logoElem = document.querySelector('.header__logo');

logoElem.onclick = event => {
	event.target.style.fontWeight = 'bold';
	setTimeout(function () {
		event.target.style.fontWeight = 'normal';
	}, 1000);
};

// Key 1
const searchBarElem = document.querySelector('.search');
const heroTextElem = document.querySelector('.hero-title');
/*
searchBarElem.addEventListener("keyup", function (event) {
	heroTextElem.innerText = event.key;
});
*/

// Key 2
const contentElem = document.querySelector('.card__content');

searchBarElem.addEventListener('keyup', function (event) {
	heroTextElem.innerText = event.key;
	contentElem.innerHTML = event.target.value;
});

//DEMO FORM
//WHEN SUBMITTED
//--log values
//--check that pass's match
//----alert() error if not

const myForm = document.querySelector('.my-form');

const submitForm = event => {
	event.preventDefault();

	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.pass.value;
	const confirm = event.target.confirm.value;
	const update = event.target.sub;

	if (password === confirm) {
		console.log(`User's name is ${name},`);
		console.log(`User's email address is ${email},`);
		console.log(`User has confirmed their password,`);
		console.log(update);

		if (update.checked === true) {
			console.log('User has opted to receive email updates.');
		} else {
			console.log('User has opted not to receive email updates.');
		}
	} else {
		alert('Please confirm your password');
	}
};

myForm.addEventListener('submit', submitForm);
