document.getElementById('add-border').addEventListener('click', function () {
    const ff = document.getElementById('frind-container')
    ff.style.border = '3px solid red'
});
function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementsById('friend-container');
    const divfrnd = document.createElement('div');
    divfrnd.classList.add('friend')
    divfrnd.innerHTML = `
    <h3 class="friend-name">Friend-5</h3>
            <p>Obcaecati</p>
    `
    container.appendchild(divfrnd)
        ;
})