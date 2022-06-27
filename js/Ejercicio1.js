// JavaScript Document
function CantidadMayusculas(){
	var contar = 0;
	var cadena = document.getElementById("password").value;
	var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < mayusculas.length; i++) {
		for (var x = 0; x < cadena.length; x++) {
			if(cadena[x]==mayusculas[i]){
				contar+=1;
			}
		}
	}
	document.write("Se encontraron: "+contar+" mayusculas");
}