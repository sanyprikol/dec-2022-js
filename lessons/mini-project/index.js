// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра
// має детальну інфорацію про об'єкт на який клікнули

const urlUser = new URL(`https://jsonplaceholder.typicode.com/users`);
fetch(urlUser)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const divElement = document.createElement('div');
            divElement.setAttribute('class', 'wrap');
            const aElement = document.createElement('a');
            divElement.appendChild(aElement);
            aElement.innerText = `${user.id} - ${user.name}`;
            aElement.href = 'user-details.html?data=' + JSON.stringify(user);
            document.body.appendChild(divElement);
        }
    });


