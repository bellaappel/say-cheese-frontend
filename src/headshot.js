const { threadId } = require("worker_threads");

class Headshot{
    constructor(id, image_src ,caption, user_id){
        this.id= id
        this.image_src = image_src
        this.caption = caption 
        this.user_id = user_id
    }

    showHeadshot() {
        CONTENT.innerHTML = '';
        const headshotContainer = document.createElement('div');
        headshotContainer.innerHTML += `${this.image_src}`;
        fetch(`${BASEURL}/headshots/${this.id}`)
        .then(resp => resp.json())
        CONTENT.appendChild(headshotContainer);
    }

    renderHeadshot() {
        CONTENT.innerHTML = '';
        const headshotContainer = document.createElement('div');
        headshotContainer.innerHTML += `${this.image_src}`;
        headshotContainer.className += 'headshot'
        CONTENT.appendChild(headshotContainer);
        headshotContainer.addEventListener('click', () => this.showHeadshot());
    }
}

