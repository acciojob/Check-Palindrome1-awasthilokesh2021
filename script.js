// complete the given function

function palindrome(str){
    let rev = str.split("").reverse().join("");
    console.log(rev);
    if(str==rev){
        console.log("true");
    }
    else{
        console.log("false");
    }
module.exports = palindrome



