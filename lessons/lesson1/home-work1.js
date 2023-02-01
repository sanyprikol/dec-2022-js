// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
//     Вивести кожну змінну за допомогою: console.log

const hello = 'hello';
console.log(hello);

const owu = 'owu';
console.log(owu);

const com = 'com';
console.log(com);

const ua = 'ua';
console.log(ua);

const one = 1;
console.log(one);

const ten = 10;
console.log(ten);

const minus = -999;
console.log(minus);

const ott = 123;
console.log(ott);

const PI = 3.14;
console.log(PI);

const two = 2.7;
console.log(two);

const sixteen = 16;
console.log(sixteen);

const tr = true;
console.log(tr);

const fl = false;
console.log(fl);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

const firstName = 'Olexandr';
const middleName = 'Sergijovich';
const lastName = 'Kolomiichuk';

const person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const name = prompt('first name');
const middle = prompt('middle name');
const age = prompt('age');

const person2 = `${name} ${middle} ${age}`;
console.log(person2);