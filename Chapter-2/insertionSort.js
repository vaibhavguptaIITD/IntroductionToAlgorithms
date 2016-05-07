function sort(arr){
	for(var j = 1; j < arr.length; j++){
		var key = arr[j];
		var i = j - 1;
		while(i > -1 && arr[i] > key){
			arr[i + 1] = arr[i];
			i = i - 1;
		}
		arr[i + 1] = key;
	}
}

var arr = [2, 4, 1];
sort(arr);
console.log(arr);