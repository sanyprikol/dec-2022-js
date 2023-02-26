// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(7, 'Igor', 'Popov', 'igor@gmail.com', '0674861235'),
//     new User(8, 'Olga', 'Shevchenko', 'olga@gmail.com', '0674861248'),
//     new User(6, 'Taras', 'Franko', 'taras@gmail.com', '0674861456'),
//     new User(1, 'Ivan', 'Stus', 'ivan@gmail.com', '0674561235'),
//     new User(9, 'Ira', 'Kushnir', 'ira@gmail.com', '0974861235'),
//     new User(3, 'Roma', 'Rebrov', 'roma@gmail.com', '0672561235'),
//     new User(10, 'Masha', 'Fedun', 'masha@gmail.com', '0675551235'),
//     new User(2, 'Dina', 'Smith', 'dina@gmail.com', '0934861235'),
//     new User(5, 'Tolik', 'Isaenko', 'tolik@gmail.com', '0664861235'),
//     new User(4, 'Evgen', 'Petrenko', 'evgen@gmail.com', '0674889891')
// ];
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterId = users.filter((value) => value.id % 2 === 0);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortId = users.sort((a, b) => a.id - b.id)
// console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order) {
//      this.id = id;
//      this.name = name;
//      this.surname = surname;
//      this.email = email;
//      this.phone = phone;
//      this.order = order;
//     }
// }
//
// let clients = [
//     new Client(7, 'Igor', 'Popov', 'igor@gmail.com', '0674861235', ['milk', 'bread']),
//     new Client(8, 'Olga', 'Shevchenko', 'olga@gmail.com', '0674861248', ['lime']),
//     new Client(6, 'Taras', 'Franko', 'taras@gmail.com', '0674861456', ['pasta', 'apple']),
//     new Client(1, 'Ivan', 'Stus', 'ivan@gmail.com', '0674561235', ['tomato', 'pasta', 'bread', 'orange']),
//     new Client(9, 'Ira', 'Kushnir', 'ira@gmail.com', '0974861235', ['lime']),
//     new Client(3, 'Roma', 'Rebrov', 'roma@gmail.com', '0672561235', ['meat', 'orange']),
//     new Client(10, 'Masha', 'Fedun', 'masha@gmail.com', '0675551235', ['apple']),
//     new Client(2, 'Dina', 'Smith', 'dina@gmail.com', '0934861235', ['milk', 'tomato', 'oil']),
//     new Client(5, 'Tolik', 'Isaenko', 'tolik@gmail.com', '0664861235', ['orange', 'pasta']),
//     new Client(4, 'Evgen', 'Petrenko', 'evgen@gmail.com', '0674889891', ['meat', 'bread'])
// ];
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = clients.sort((a, b) => a.order.length -b.order.length)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//     };
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     };
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     }
//
// }
//
// let car = new Car('Audi', 'Germany', '2019', 250, '4')
// console.log(car);
//
// car.drive();
// car.info()
// car.increaseMaxSpeed(100);
// car.changeYear('2020');
// car.addDriver('Sany');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         this.info = function () {
//             for (const item in this) {
//                 console.log(`${item} - ${this[item]}`);
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//         };
//         this.changeYear = function (newValue) {
//             console.log(this.year = newValue);
//         };
//         this.addDriver = function (driver) {
//             console.log(this.driver = driver);
//         }
//     }
// }
//
// let car = new Car('Audi', 'Germany', '2019', 250, '4')
// console.log(car);
//
// car.drive();
// car.info()
// car.increaseMaxSpeed(100);
// car.changeYear('2020');
//  car.addDriver('Sany');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let arrCinderella = [
//     new Cinderella('Anna', 26, 39),
//     new Cinderella('Marina', 59, 41),
//     new Cinderella('Olya', 27, 37),
//     new Cinderella('Inna', 39, 40),
//     new Cinderella('Tamara', 42, 39),
//     new Cinderella('Valja', 15, 33),
//     new Cinderella('Ruslana', 30, 39),
//     new Cinderella('Nina', 35, 38),
//     new Cinderella('Ira', 51, 42),
//     new Cinderella('Lilu', 11, 30)
// ]
//
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize
//     }
// }
// let newPrince = new Prince('Igor', 27, 37);
//
// for (const Cinderella of arrCinderella) {
//     if(Cinderella.age === newPrince.age || Cinderella.size === newPrince.shoeSize) {
//         console.log(Cinderella.name)
//     }
// }
//
// let find = arrCinderella.find(value => value.size === newPrince.shoeSize || value.age === newPrince.age)
// console.log(find);