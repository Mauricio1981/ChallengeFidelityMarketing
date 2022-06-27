function CopyArray(){
	let array = [1,2,3,4,5,7]
	let array2 = []
	let i = 0
	while(i < array.length){
		array2.push(array[i] + 1)
		i++
	}
	console.log(array2)
	document.write("<p>Datos origen: "+array+"</p>");
	document.write("<p>Resultado: <strong>"+array2+"</strong></p>");
}