// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let square = (a, b) => a * b;
// console.log(square(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let square = (r) => P * (r*r)
//     let P = 3.14
//
// console.log(square(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let square = (r, h) => 2 * P * r * h;
//     let P = 3.14
//
// console.log(square(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = ['Inna', 'Sany', 'Olya', 'Dimon', 'Igor', 'Tanya', 'Julia', 'Tolik', 'Oleg', 'Artem'];
// let foo = (arr) => {
//     for (const element of arr) {
//         document.write(`<h2>${element}</h2>`)
//     }
// }
// foo(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let foo = (text) => {
//     let html = `<p>${text}</p>`;
//     document.write(html);
// }
// foo('HELLO')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let foo = (text) => {
//
//     let html = `<ul>
//         <li>${text}<li>
//         <li>${text}<li>
//         <li>${text}<li>
//     </ul>`;
//     document.write(html);
// }
// foo('HELLO')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// let foo = (text, index) =>{
//         document.write(`<ul>`);
//          for (let i = 0; i < index; i++) {
//         document.write(`<li>${text}</li>`)}
//         document.write(`</ul`);
// }
// foo('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [4, 78, 'hello', true, 'Vasya'];
// let foo = (arr) => {
//     for (const element of array) {
//          document.write(`<ol><li>${element}</li></ol>`)
//     }
// }
// foo(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
//  ];
//
// let foo = (array) => {
//     for (const element of array) {
//             document.write(`<div>${element.id} - ${element.name} - ${element.age}</div>`)
//         }
// }
// foo(users)

// - створити функцію яка повертає найменьше число з масиву

// let arr = [2, 17, -6, -97, 23, 8];
// let foo = (numbers) => {
//     let numMin = numbers[0];
//     for (const number of numbers) {
//         if(numMin > number){
//             numMin = number
//         }
//     }
//     return numMin;
// }
// console.log(foo(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let arr = [1, 5, 79];
// let sum = (numbers) => {
//     let xxx = 0;
//     for (const number of numbers) {
//         xxx = xxx + number
//     }
//     return xxx
// }
// console.log(sum(arr))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let array = [11, 22, 33, 44]
// let swap = (arr, index1, index2) => {
//     let ind1 = arr[index1];
//     let ind2 = arr[index2];
//
//     arr[index1] = ind2;
//     arr[index2] = ind1;
//     return arr
// }
// console.log(swap(array, 0, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if(item.currency === exchangeCurrency) {
//             return sumUAH / item.value;
//         }
//     }
// }
// console.log(exchange(10000,
//     [{currency:'USD',value:40},
//                  {currency:'EUR',value:42}],
//     'USD'));