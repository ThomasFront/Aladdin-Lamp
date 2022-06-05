const lampImg = document.querySelector('#lamp')
const input = document.querySelector('#question')
const error = document.querySelector('#error')
const answer = document.querySelector('#answer')
const minValue = 3

const answerArr = [
	'Tak',
	'Nie',
	'Nie poradziłem sobie z tym pytaniem...',
	'Chyba tak',
	'Chyba nie',
	'Niestety nie wiem',
	'Sądze, że nie',
	'Sądze, że tak',
	'Nie jestem w stanie Ci odpowiedzieć',
	'Musisz zapytać kogoś mądrzejszego',
	'Nie mam czasu na takie pytanie',
	'Zapytaj kogoś innego',
]

const generateAnswer = () => {
	if (input.value !== '' && input.value.slice(-1) === '?' && input.value.length >= minValue) {
		const randomNumber = Math.floor(Math.random() * answerArr.length)
		answer.textContent = answerArr[randomNumber]
		error.textContent = ''
	} else if (input.value == '') {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = `Pytanie musi kończyć się znakiem "?"`
		answer.textContent = ''
	} else if (input.value.length < minValue) {
		error.textContent = `Pytanie musi mieć minimum 3 znaki`
		answer.textContent = ''
	}
}

const enterCheck = e => {
	if (e.keyCode === 13) {
		generateAnswer()
	}
}

input.addEventListener('keyup', enterCheck)
lampImg.addEventListener('click', generateAnswer)
