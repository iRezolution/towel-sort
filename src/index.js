// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = matrix;
	if (arguments.length != 0) {
	let sortArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (i % 2) {
				for (let j = arr[i].length - 1; j >= 0; j--) {
					sortArr.push(arr[i][j]);
				}
			} else {
				for (let j = 0; j < arr[i].length; j++) {
					sortArr.push(arr[i][j]);
				}
			}	
		}	
		
	return sortArr;	
	
	} else return []
}