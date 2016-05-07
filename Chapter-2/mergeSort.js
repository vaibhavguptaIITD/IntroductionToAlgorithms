function mergeSort(arr, p, r){
	if(p < r){
		var n = r - p + 1,
		q = p + Math.floor(n/2); // 
		mergeSort(arr, p, q - 1);	
		mergeSort(arr, q, r);
		merge(arr, p, q, r);
	}
}

function merge(arr, p , q, r){
	var n1 = q - p,
	n2 = r - q + 1,
	left = [],
	right = [];
	for(var i = 0; i < n1; i++){
		left[i] = arr[p + i];
	}
	for(var j = 0 ; j < n2; j++){
		right[j] = arr[q + j];
	}
	console.log("left", left);
	console.log("right", right);
	var _l = 0,
	_r = 0;
	for(var k = p; k < r + 1; k++){
		if(_l < left.length && _r < right.length){
			if(left[_l] < right[_r]){
				arr[k] = left[_l];
				_l++; 
			}
			else{
				arr[k] = right[_r];
				_r++;
			}
		}
		else if(_l === left.length){
			arr[k] = right[_r];
			_r++;
		}
		else{
			arr[k] = left[_l];
			_l++;
		}
	}
	console.log("arr", arr);

}
var arr = [6, 5,4,3, 2, 1];
mergeSort(arr, 0, 5);
