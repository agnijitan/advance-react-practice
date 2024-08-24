var name = "Agni";
var reverseName = name.split("").reverse().join("");
console.log("My reversed string: ", reverseName);

function reverseString(str) {
    let newStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    } return newStr;
};

console.log("The Reverse String is here : ", reverseString("Palak") );