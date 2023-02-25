// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let upperCaseA = a.toUpperCase();
// let upperCaseB = b.toUpperCase();
// let upperCaseC = c.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// let lowerCaseA = a.toLowerCase();
// let lowerCaseB = b.toLowerCase();
// let lowerCaseC = c.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map((value)=> {
//     return value = value.toString()
// })
// console.log(map);
// console.log(arr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let ascending = nums.sort((a,b) => a - b);
// let descending = nums.sort((a, b) =>b - a);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sort = coursesAndDurationArray.sort((a, b) =>{
//     return a.monthDuration - b.monthDuration
//     }
// );
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// let map = coursesAndDurationArray.map((value, index) => {
//     return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
// });

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let cardArr = [
//     {cardSuit: 'spade',
//         value: '6',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: '7',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: '8',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: '9',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: '10',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: 'king',
//         color: 'black'},
//     {cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'},
//     {cardSuit: 'diamond',
//         value: '6',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: '7',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: '8',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: '9',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: '10',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'},
//     {cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: '6',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: '7',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: '8',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: '9',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: '10',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: 'king',
//         color: 'red'},
//     {cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'},
//     {cardSuit: 'clubs',
//         value: '6',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: '7',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: '8',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: '9',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: '10',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'},
//     {cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'}
// ]

//let aceCard = cardArr.filter(value => value.value === 'ace' && value.cardSuit === "spade");
//let allSix = cardArr.filter(value => value.value === '6');
//let diamond = cardArr.filter(value => value.cardSuit === 'diamond');
//let clubs = cardArr.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.cardSuit === 'clubs' && value.value ==='10');

// let reduce = cardArr.reduce((accumulator, value) => {
//     if (value.cardSuit === 'spade') {
//         accumulator.spades.push(value)
//     } else if (value.cardSuit === 'diamond') {
//         accumulator.diamonds.push(value)
//     } else if (value.cardSuit === 'heart') {
//         accumulator.hearts.push(value)
//     } else if (value.cardSuit === 'clubs') {
//         accumulator.clubs.push(value)
//     }
//     return accumulator
// }, {spades: [], diamonds: [], hearts: [], clubs: []});

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sassModules = coursesArray.filter((value) => value.modules.includes('sass'))
console.log(sassModules);

let dockerModules = coursesArray.filter(value => value.modules.includes('docker'));
console.log(dockerModules)