fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
    const setPost=(posts)=>{
// console.log(posts);
const postContainer=document.getElementById('post-container')
for(const post of posts){
    // console.log(post.title);
    const postDiv = document.createElement('div')
    // postDiv.classList.add(' p-5 m-3 bg-light border border-3 border-primary')
    postDiv.innerHTML=`
    <div class="post p-5 m-3 bg-light border border-3 border-primary">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <p>Post no:${post.id}<p>
    </div>`
    //<p>Post no:${post.id}<p> ,,post er serial num er jonno
    postContainer.appendChild(postDiv)
}
    }