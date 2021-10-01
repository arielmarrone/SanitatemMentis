const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');


	//Guardamos el modo en localstorage
	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'true');
	} else{
		localStorage.setItem('dark-mode', 'false');
	}
});

//obtenemos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');	
} else{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

//Boton menu
addEventListener('DOMContentLoaded', () =>{
	const boton_menu = document.querySelector('.boton_menu')
	if (boton_menu) {
		boton_menu.addEventListener('click', () =>{
			const menu_items = document.querySelector('.items')
			menu_items.classList.toggle('show')
		})
	}
})