'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?',);
let screenPrice = +prompt('Сколько будет стоить данная работа?',);
let rollback = 10;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?',);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?',);
const allServicePrices = getAllServicesPrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (fullPrice > 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%"
    } else if (fullPrice <= 15000 && fullPrice > 0) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}
function getAllServicesPrices() {
    return servicePrice1 + servicePrice2
}
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}
function getTitle() {
    if (title.length === 0) return title;
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}
function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - (fullPrice * (rollback / 100))
}


console.log(getTitle());
console.log(getRollbackMessage(fullPrice));
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens);
console.log(servicePercentPrice);

console.log(" Стоимость верстки экранов " + screenPrice + " рублей/юаней/долларов ")