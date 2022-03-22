/* const boton = document.getElementsByClassName('boton');
const colores = ["red", "blue", "green", "#F5F6F8"];

for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarFondo);
}

function cambiarFondo(button){
    const indice = Math.floor((Math.random() * colores.length));
    const contenedor = this.parentNode;
    //console.log(contenedor);
    contenedor.style.backgroundColor = colores[indice];
    
    const texto = this.parentNode.childNodes[1];
    texto.innerHTML = colores[indice];

    //console.log(texto)
    //console.log(this);
} */
const boton = document.getElementsByClassName('boton');

for (let index = 0; index < boton.length; index++) {
    const element = boton[index];
    element.addEventListener("click", cambiarFondo);
}
function cambiarFondo(button){
	
    let simbolos = "0123456789ABCDEF";
	let color = "#";
    const contenedor = this.parentNode;

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	contenedor.style.backgroundColor = color;
    const texto = this.parentNode.childNodes[1];
    texto.innerHTML = `Hex: ${color}`;
    
}
