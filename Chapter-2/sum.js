function sum(arr1, arr2){
	var sumArr = [];
	var carry = 0;
	for(var i = arr1.length - 1; i > -1; i--){
		var a1 = arr1[i],
		a2 = arr2[i],
		_sum = a1 + a2 + carry;
		sumArr[i+1] = _sum % 2;
		carry = Math.floor(_sum / 2);
	}
	sumArr[i + 1] = carry;
	return sumArr;
}

console.log(sum([1,0,1], [1, 0 ,1]));