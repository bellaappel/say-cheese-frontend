document.addEventListener("DOMContentLoaded", () => {

})

const BASEURL = 'http://127.0.0.1:3000'
const CONTENT = document.getElementById('content')

const headshotsNav = document.getElementById('headshots-nav');
const usersNav = document.getElementById('users-nav');

headshotsNav.addEventListener('click', () => fetchHeadshots(), {once: true});
usersNav.addEventListener('click', () => fetchUsers());