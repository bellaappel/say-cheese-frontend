class User {
    constructor(username, name){
        this.username = username
        this.name = name
    }
}

const userUrl = 'http://127.0.0.1:3000/users'

function fetchUsers() {
    fetch(userUrl)
    .then(function(resp){
        return resp.json()
    })
    .then(function(json){
        showUsers(json)
        console.log(json)
    })
}  

function showUsers(userArray) {
    const userContainer = document.createElement('div')
    userContainer.classList += "user-wrapper"
    CONTENT.appendChild(userContainer)
    const ul = document.createElement('ul')
    userArray.forEach (user => {
        const li = document.createElement('li')
        li.innerHTML = user.username
        ul.appendChild(li)
    })
}