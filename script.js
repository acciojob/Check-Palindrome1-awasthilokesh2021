// complete the given function

function palindrome(str){
    let str = "race a car"

	let str1 = str.reverse();

	if(str==str1){
		return true
	}
	else{
		return false
	}	
}
module.exports = palindrome



