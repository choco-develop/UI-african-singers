
let nameArtist=document.querySelector('#name')
let url=`http://localhost:8000/singers/?name=${nameArtist}`
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
