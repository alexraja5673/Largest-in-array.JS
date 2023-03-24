let arr=[20,15,26,25,45,30,26];
let big=0;
function large(arr,big){
	for (i=0;i<arr.length;i++){
			if (arr[i]>big){
				 big=arr[i];
		}
	}
	console.log(big);
}
large(arr,big);


