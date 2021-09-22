const sayHello = () => {
    setTimeout(() => {
        console.log('A');
        console.timeEnd('proceso asincrono');
    }, 1000);
};

console.time('all');
console.time('proceso asincrono');
sayHello();
console.log('B');
console.log('C');
console.timeEnd('all');
