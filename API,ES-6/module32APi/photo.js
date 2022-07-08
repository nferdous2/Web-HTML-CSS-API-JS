function photoLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))

}
photoLoad();

const search = () => {
    const searchText = document.getElementById('search-field').value;
    photoLoad(searchText);
    document.getElementById('search-field').value='';

}
// function displayPhoto(photos) {
//     const photoContainer = document.getElementById('photos');
//     for (const photo of photos) {
//         const div = document.createElement('div');
//         div.classList.add('photo');
//         div.innerHTML = `
//         <h3>${photo.title}</h3>
//         <p>${photo.body}</p>
//         `;
//         photoContainer.appendChild(div);
//         console.log(photo)
//     }
// }
const displayPhoto = photos => {
    const getDiv = document.getElementById('photos');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('photo');
        div.innerHTML = `
        <img src= "${photo.thumbnailUrl}" class="card-img-top " alt="...">
        <h3>${photo.albumId}</h3>
        <p>${photo.id}</p>
<button onclick="loadDetails('${photo.title}')">click me</button>     
    `;
        getDiv.appendChild(div);
    });
}
const loadDetails = photoTitle => {
    console.log(photoTitle)
}
