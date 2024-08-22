function sum1(x,y,z){
    return x+y+z
};

const numbers = [1,2,3];
const newNumbers = [...numbers, 4]
console.log(newNumbers);
const result1 = (sum1(...newNumbers));
console.log(result1);


function sum(...numbers){
    numbers.map((n, index) => console.log(n +" is at position = " + index))
    return numbers.reduce((a,b) => a+b, 0)
}
const result = sum(10,20,33,14,35,96,37);
console.log(result);