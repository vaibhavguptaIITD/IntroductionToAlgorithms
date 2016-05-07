function selectionSort(arr){
	for(var i = 0 ; i < arr.length - 1; i++){
		var smallest = arr[i],
		smallestIndex = i;
		for(var j = i; j < arr.length; j++){
			var key = arr[j];
			if(key < smallest){
				smallest = key;
				smallestIndex = j;
			}
		}
		arr[smallestIndex] = arr[i];
		arr[i] = smallest; 
		console.log(arr);
	}
}

var arr = [5 ,4,3,2, 1 ,2,3, 4,5];
selectionSort(arr);
console.log(arr);