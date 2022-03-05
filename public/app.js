const postsDiv = document.querySelector('#posts');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const saveButton = document.querySelector('#save-button');


saveButton.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('/posts', {
        method : "POST",
        headers: { "Content-Type": 'application/json'},
        
        body: JSON.stringify({
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value
        })
    }).then(data => data.json())
    .then(({post, message}) => {

        swal('Great', message , 'success');

        usernameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';

        const h2 = document.createElement('h2');
        h2.textContent = post.username;
        
        const h3 = document.createElement('h2');
        h3.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.content;
        
        const a = document.createElement('a');
        a.textContent = 'read more';
        a.href = `/posts/${post.id}/show`;
        
        const section = document.createElement('section');
        section.appendChild(h2);
        section.appendChild(h3);
        section.appendChild(p);
        section.appendChild(a);
        
        const hr = document.createElement('hr');

        postsDiv.appendChild(section);
        postsDiv.appendChild(hr);
    }).catch(err => console.log(err));
});



fetch('/posts')
    .then(data => data.json())
    .then(posts => {
        postsDiv.textContent = '';

        posts.forEach(post => {

            const h2 = document.createElement('h2');
            h2.textContent = post.username;
            
            const h3 = document.createElement('h2');
            h3.textContent = post.title;

            const p = document.createElement('p');
            p.textContent = post.content;
            
            const a = document.createElement('a');
            a.textContent = 'read more';
            a.href = `/posts/${post.id}/show`;
            
            const section = document.createElement('section');
            section.appendChild(h2);
            section.appendChild(h3);
            section.appendChild(p);
            section.appendChild(a);
            
            const hr = document.createElement('hr');

            postsDiv.appendChild(section);
            postsDiv.appendChild(hr);
        });
    })
    .catch(err => console.log(err));
