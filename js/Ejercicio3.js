document.write("<p>Arreglo: <strong> 14, 33, 22, 12, 39, 45, 18 </strong></p>");
function OrdenaArray(){
	var arrayNumbers = [14, 33, 22, 12, 39, 45, 18]
	Array.prototype.sortNumbers = function(){
		return this.sort(
			function(a,b){
				return a - b
			}
		);
	}	
	console.log(arrayNumbers.sortNumbers())
	document.write("<p>Resultado de ordenamiento: <strong>"+arrayNumbers+"</strong></p>");
}

