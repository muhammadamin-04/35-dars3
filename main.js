let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    let gameName = btn.parentElement.parentElement.children[1].innerHTML;
    let gameText = btn.parentElement.parentElement.children[3].children[0].innerHTML;
    let gameImage = btn.parentElement.parentElement.children[2].children[0].getAttribute('src');
    localStorage.setItem("gameName", gameName);
    localStorage.setItem("gameText", gameText);
    localStorage.setItem("gameImage", gameImage);
        window.location = 'page.html'
    })
});
