class Headshot{
    constructor(id, image_src ,caption, user_id){
        this.id= id
        this.image_src = image_src
        this.caption = caption 
        this.user_id = user_id
    }
}
const imgUrl = 'http://127.0.0.1:3000/headshots'

function fetchHeadshots() {
    fetch(imgUrl)
    .then(function(resp){
        return resp.json()
    })
    .then(function(json){
        showHeadshots(json)
        console.log(json)
    })
}    

function showHeadshots(imgArray) {
    const container = document.getElementById('headshot-image-container')
    imgArray.forEach(image => {
        const img = document.createElement('img')
        console.log(image)
        img.src = image.image_src
        img.style = "max-width: 25%"
        container.appendChild(img)
    })
}

   

