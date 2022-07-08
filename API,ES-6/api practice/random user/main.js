const searchInput = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))

}
searchInput();
const displayUser = user => {
    console.log(user.name)
}