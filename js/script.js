let title = 'JobLearn';
console.log(typeof title);
let screens = 'Простые, Сложные, Интерактивные';
console.log(screens.length)
console.log(screens.toLowerCase().split(', '))
let screenPrice = 300;
console.log(screenPrice);
let rollback = 40;
console.log(rollback);
let fullPrice = 500000;
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive);
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);