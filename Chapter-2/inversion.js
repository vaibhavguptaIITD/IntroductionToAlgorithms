function inversion(array){
	var result = [];
	for(var i = 0; i < array.length; i++){
		var ai = array[i];
		for(var j = i + 1; j < array.length; j++){
			var aj = array[j];
			if(aj < ai){
				result.push([i, j]);
			}
		}
	}
	return result;
}

var result = inversion([2, 3, 8, 6, 1]);
console.log(result);