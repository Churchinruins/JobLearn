'use strict';

let title = prompt('Как называется ваш проект?');
console.log(title);
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);
console.log(screens.toLowerCase().split(', '));
let screenPrice = prompt('Сколько будет стоить данная работа?', 7000);
console.log(screenPrice);
let rollback = 40;
console.log(rollback);
let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);
let service1 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service1);
let servicePrice1 = prompt('Сколько это будет стоить?', 2000);
console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service2);
let servicePrice2 = prompt('Сколько это будет стоить?', 4000);
console.log(servicePrice2);
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let rebateService = 2000;
let servicePercentPrice = Math.ceil(fullPrice - rebateService)
console.log(servicePercentPrice)
if (fullPrice > 30000) {
    console.log('Даем скидку в 10%')
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}