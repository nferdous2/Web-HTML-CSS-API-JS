function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadComments();
/*
function displayPosts(comments) {
    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <p>${comment.email}</p>
        `;
        commentContainer.appendChild(div);
        console.log(comment)
    }
}
*/
const displayPosts = comments => {
    const commentContainer = document.getElementById('comments');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>

        <p>${comment.body}</p>
        <button onClick="loadCommentsByemail('${comment.id}')">Details</button>
        `;
        commentContainer.appendChild(div);
    });
}
const loadCommentsByemail = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/id/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => commentDetails(data[0]));
}
const commentDetails = comment => {
    console.log(comment);
    const commentDiv = document.getElementById('comments-details');
    commentDiv.innerText = `
        <p>Id: ${comment.id.details}</p> `
}