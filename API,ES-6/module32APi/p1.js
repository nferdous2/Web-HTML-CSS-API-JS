function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))

}
const displayPhoto = photos => {
    const photoContainer = document.getElementById("photo-container")
    for (const photo of photos) {
        const name = photo.title;
        const pic = photo.url;
        const div = document.createElement('div')
        div.innerHTML = `<img src = ${pic} width ='200px'
    <h3>Name:${name.slice(1, 8)}</h3>
    <button onclick=loadDetails(${photo.id})>detais</button>`
        photoContainer.appendChild(div)
    }
}
//new write function
const loadDetails=id=> {
    url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}
const showDetails = details => {
    const detailContainer = document.getElementById('details-container')
    const p = document.createElement('p')
    p.innerHTML = `<h5>Name:${details.title}
    <img src=${details.url} width='100px'`
    detailContainer.appendChild(p);
}