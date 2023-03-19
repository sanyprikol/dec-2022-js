// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postUrl = new URL(location.href);
const json = postUrl.searchParams.get('data');
const post = JSON.parse(json);

const division = document.createElement('div');
division.setAttribute('class', 'division');

const postDiv = document.createElement('div');
postDiv.setAttribute('class', 'post');


function explorer(object) {
    for (const key in object) {
        const postKey = document.createElement('div');
        postKey.setAttribute('class', 'postKey');
        postKey.innerText = `${key} - ${object[key]}`;
        postDiv.append(postKey);
    }
}

explorer(post);

const commentsPost = (`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

        const divComments = document.createElement('div');
        divComments.setAttribute('class', 'comments');
fetch(commentsPost)
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            console.log(comment);
            const commentDiv = document.createElement('div');
            commentDiv.setAttribute('class', 'commentDiv');
            divComments.appendChild(commentDiv);
            for (const key in comment) {
                const keyComment = document.createElement('div');
                keyComment.setAttribute('class', 'keyComment');
                keyComment.innerText = `${key} : ${comment[key]}`;
                commentDiv.appendChild(keyComment);
            }
        }
    })

division.append(postDiv, divComments)

document.body.append(division);
