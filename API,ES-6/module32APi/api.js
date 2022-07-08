//buton click korle data pawajay
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
//for user
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));

}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}
/*//for automatic call
loadPost();*/
function displayUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li')
        // li.innerText=user.name;//10jn user er name dynamic vhabe dekani hocche
        li.innerText = `name:${user.name} email:${user.email}`;
        ul.appendChild(li);
    }

}