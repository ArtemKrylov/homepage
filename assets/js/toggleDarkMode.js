(() => {
	localStorage.getItem('darkMode') === 'on' && document.querySelector('body').classList.add('darkMode');
})();


function toggleDarkMode(event) {
	event.preventDefault();

	const storedMode = localStorage.getItem('darkMode') ?? 'off';
	const currentMode = storedMode === 'off' ? 'on' : 'off';
	const moonIcon = document.querySelector('#moonIconJS');
	const sunIcon = document.querySelector('#sunIconJS')

	switch (currentMode) {
		case 'on':
			!document.querySelector('body').classList.contains('darkMode') && document.querySelector('body').classList.add('darkMode');
			localStorage.setItem('darkMode', 'on');moonIcon.classList.toggle('visually-hidden');
			sunIcon.classList.toggle('visually-hidden');
			break;
			
		case 'off':
			document.querySelector('body').classList.contains('darkMode') && document.querySelector('body').classList.remove('darkMode');
			localStorage.setItem('darkMode', 'off');
			moonIcon.classList.toggle('visually-hidden');
			sunIcon.classList.toggle('visually-hidden');
			break;
		default: throw new Error('Wrong darkMode value')
	}
}