// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const newUrl = new URL(location.href);
const json = newUrl.searchParams.get('data');
const user = JSON.parse(json);

const userDiv = document.createElement('div');
userDiv.setAttribute('class', 'user');

function explorer(object) {
    for (const key in object) {
        if (typeof object[key] !== 'object') {
            const userKey = document.createElement('div');
            userKey.innerText = ` ${key} : ${object[key]}`;
            userKey.setAttribute('class', 'key');
            userDiv.append(userKey);
        }
        if (typeof object[key] === 'object') {
            const userObject = document.createElement('div');
            userObject.innerText = `${key} :`;
            userObject.setAttribute('class', 'key')
            userDiv.append(userObject);

            explorer(object[key])
        }
    }
}

explorer(user);

const button = document.createElement('button');
button.innerText = "post of current user";
button.setAttribute('class', 'buttonPost');


const postTitleUrl = new URL(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);

const divTitle = document.createElement('div');
divTitle.setAttribute('class', 'divTitle');
fetch(postTitleUrl)
    .then(value => value.json())
    .then(posts => {

        button.onclick = () => {
            for (const post of posts) {

                const aElementTitle = document.createElement('a');
                const title = document.createElement('div');
                aElementTitle.innerText = `${post.title}`;
                aElementTitle.href = 'post-details.html?data=' + JSON.stringify(post);
                console.log(aElementTitle);
                title.append(aElementTitle);
                aElementTitle.setAttribute('class', 'titlePost');

                button.disabled = true;
                divTitle.append(aElementTitle);
            }
        }
    });

userDiv.append(button);

document.body.append(userDiv, divTitle);

