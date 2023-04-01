let createFullName = (firstName, lastName) => `${firstName}` `${lastName}`;

let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

console.log('EL', 'BRETADO');
console.log(someFunction(`Hello`, 3));
