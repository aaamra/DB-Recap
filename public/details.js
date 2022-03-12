const postDiv = document.querySelector('#post');

const id = window.location.href.split('/')[4];


fetch(`/posts/${id}`)
.then(data => data.json())
.then(post => {
    
    const h2 = document.createElement('h2');
    h2.textContent = post.username;
    
    const h3 = document.createElement('h2');
    h3.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.content;

    postDiv.append(h2, h3, p);
})
.catch(err => console.log(err));


const commentsDiv = document.querySelector('#comments');

fetch(`/posts/${id}/comments`)
.then(data => data.json())
.then(comments => {
    
    commentsDiv.textContent = '';

    comments.forEach((comment) => {
        const h4 = document.createElement('h4');
        h4.textContent = comment.username;
        
        const p = document.createElement('p');
        p.textContent = comment.content;

        const section = document.createElement('section');
        section.append(h4,p);

        const hr = document.createElement('hr');

        commentsDiv.append(section);
        commentsDiv.append(hr);
    });
    
})
.catch(err => console.log(err));


const commentUsername = document.querySelector('#comment-username');
const commentContent = document.querySelector('#comment-content');

const saveCommentButton = document.querySelector('#save-comment-button');

saveCommentButton.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(`/posts/${id}/comments`, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            userName: commentUsername.value ===  '' ? null : commentUsername.value,
            content: commentContent.value
        })
    }).then((data) => data.json())
    .then(({ data, message }) => {


        commentContent.value = '';
        commentUsername.value = '';

        swal('new comment from ' + data.username, message, 'success');

        const h4 = document.createElement('h4');
        h4.textContent = data.username;
        
        const p = document.createElement('p');
        p.textContent = data.content;

        const section = document.createElement('section');
        section.append(h4,p);

        const hr = document.createElement('hr');

        commentsDiv.append(section);
        commentsDiv.append(hr);

    }).catch(() => console.log('err'));
});