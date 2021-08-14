addEventListener('DOMContentLoaded', () => {
	const boton_menu = document.querySelector('.boton_menu')
	if (boton_menu) {
		boton_menu.addEventListener('click', () =>{
			const items = document.querySelector('.items')
			items.classList.toggle('show')
		})
	}
})