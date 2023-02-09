// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [1, -3, 'hello', true, [3, 5], false, 'OK', 'user', 0, ''];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title:'Harry Potter',
//     pageCount:347,
//     genre:'fantasy'
// };
//     let book2 = {
//     title: 'Mobi dick',
//     pageCount:371,
//     genre:'novel'
// };
//     let book3 = {
//     title:'Hercules',
//     pageCount:265,
//     genre:'adventures'
//}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

// let book1 = {
//      title:'Harry Potter',
//      pageCount:347,
//      genre:'fantasy',
//      authors:[
//          {name:'Rowling', age:35},
//          {name:'Joanne', age:53}]
//  };
// let book2 = {
//     title:'Mobi dick',
//     pageCount:371,
//     genre:'novel',
//     authors:[
//         {name:'Herman', age:46},
//         {name:'Melville', age:64}]
// };
// let book3 = {
//     title:'Hercules',
//     pageCount:347,
//     genre:'adventures',
//     authors:[
//         {name:'legend', age:2000},
//         {name:'history', age:3000}]
// };


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

// let users = [
//     {name:'Tolik', username: 'user0',password:'0000'},
//     {name:'Anna', username: 'user1',password:'1111'},
//     {name:'Dimon', username: 'user2',password:'2222'},
//     {name:'Olya', username: 'user3',password:'3333'},
//     {name:'Sany', username: 'user4',password:'4444'},
//     {name:'Igor', username: 'user5',password:'5555'},
//     {name:'Vasya', username: 'user6',password:'6666'},
//     {name:'Roma', username: 'user7',password:'7777'},
//     {name:'Nastia', username: 'user8',password:'8888'},
//     {name:'Tamara', username: 'user9',password:'9999'},
// ]
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// if (x !== 0) {
//     console.log('Ok');
// }else {
//     console.log('No')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 59;
// if(time > 0 && time <= 15) {
//     console.log('first');
// } else if (time > 15 && time <= 30) {
//     console.log('second');
// } else if ( time > 30 && time <= 45) {
//     console.log('third')
// } else if (time > 45 && time <= 59) {
//     console.log('fourth')
// } else {
//     console.log('WTF')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// const day = 31;
// if (day > 0 && day <= 10) {
//     console.log('first')
// } else if (day >=11 && day <= 20) {
//     console.log('second')
// } else if (day >= 21 && day <= 31) {
//     console.log('third')
// } else {
//     console.log('WTF')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('enter day');
//
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//
//     case 2:
//         console.log('Tuesday');
//         break;
//
//     case 3:
//         console.log('Wednesday');
//         break;
//
//     case 4:
//         console.log('Thursday');
//         break;
//
//     case 5:
//         console.log('Friday');
//         break;
//
//     case 6:
//         console.log('Saturday');
//         break;
//
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('????');
//}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('enter number');
// let b = +prompt('enter number');
//
// if (a > b) {
//     console.log(a)
// } else if (a < b) {
//     console.log(b)
// } else if(a === b) {
//     console.log('equally')
// } else {
//     console.log('?????')
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподібні, тобто приводиться до false)

// let x = '';
// let res = x || 'default';
// console.log(res);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Super')
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Super')
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Super')
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Super')
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Super')
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Super')
// }