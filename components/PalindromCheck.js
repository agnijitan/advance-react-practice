function checkPalindrome(nm) {
    if(nm.split("").reverse().join("") === nm){
        console.log("Palindrome");
    }else {
        console.log("Not a Palindrome");
    }
}

function getSplit(str){
    var reverseName = "";
    for(i = str.length-1; i >= 0; i--){
        console.log("The value of i: ", i)
        reverseName += str[i];
        console.log("The value of reverseName: ", reverseName)
    }
    console.log("Reverse Name : ", reverseName);
    if(reverseName === str){
        console.log("It is a Palindrome no");
    } else {
        console.log("Not a Palindrome no");
    }
}
    

checkPalindrome("MADAM")
getSplit("Agni");