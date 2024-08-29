// var note = "I am a girl";
// var reverseInitial = note.split(' ').reverse().join(' ');
// console.log(reverseInitial);


var note = "I am a girl";
var reverseInit = note.split(' ').reverse()
console.log(reverseInit);
for(i = 0; i < reverseInit.length; i++) {
    var rev = reverseInit[i].split('').reverse().join('');
   process.stdout.write(rev + ' ');
}