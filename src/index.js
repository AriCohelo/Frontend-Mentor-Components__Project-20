import './main.scss';

let updatesForm = document.forms[0];
let emailInput = updatesForm[0];
let submitButton = updatesForm[1];
let emailError = document.querySelector('.card__content__form-email-error');
let card = document.querySelector('.card');
let confirmationCard = document.querySelector('.confirmationCard');
let dismissButton = document.querySelector('.confirmationCard-dismissButton');

function resetForm() {
	emailInput.value = '';
}
submitButton.addEventListener('click', (e) => {
	if (!emailInput.value) return;
	if (!emailInput.checkValidity()) {
		e.preventDefault();
		console.log('fuck!');
		emailError.style = 'display: block';
	} else {
		e.preventDefault();
		confirmationCard.style.display = 'inline-grid';
		card.style.display = 'none';
		resetForm();
	}
});

dismissButton.addEventListener('click', () => {
	confirmationCard.style.display = 'none';
	card.style.display = 'inline-grid';
	window.location.reload();
});
window.addEventListener('load', resetForm);
