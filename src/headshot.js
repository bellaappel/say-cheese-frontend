class Headshot{
    constructor(id, image_src ,caption, user_id){
        this.id = id
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
    imgArray.forEach(image => {
        const container = document.createElement('div')
        container.classList += "headshot-wrapper"
        CONTENT.appendChild(container)
        const img = document.createElement('img')
        // console.log(image)
        img.src = image.image_src
        img.style = "max-width: 25%"
        container.appendChild(img) 
        attachTheaterMasks(container)  
    })
}

function attachTheaterMasks(parentElement) {
    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList += "checkbox-wrapper"
    parentElement.appendChild(checkboxContainer)

    const comedyCheck = document.createElement("INPUT")
    comedyCheck.setAttribute("type","checkbox")
    checkboxContainer.appendChild(comedyCheck)
    const comedyGlyph = document.createElement("img")
    comedyGlyph.src ="https://img.icons8.com/office/40/000000/comedy.png"
    checkboxContainer.appendChild(comedyGlyph)
    
    const dramaCheck = document.createElement("INPUT")
    dramaCheck.setAttribute("type","checkbox")
    checkboxContainer.appendChild(dramaCheck)
    const dramaGlyph = document.createElement("img")
    dramaGlyph.src = "https://img.icons8.com/office/40/000000/drama.png"
    checkboxContainer.appendChild(dramaGlyph)
}




