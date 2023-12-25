document.querySelector('.gameName').innerHTML = localStorage.getItem('gameName');
document.querySelector('.gameText').innerHTML = localStorage.getItem('gameText');
document.querySelector('.gameImage').setAttribute('src', localStorage.getItem('gameImage'));

