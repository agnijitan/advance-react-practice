function getfactorial(n) {
    let result = 0;
    for(i = 0; i <= n; i++) {
        result =+ result + i;
    }
    return result;
};

console.log(getfactorial(4));