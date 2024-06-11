function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let show = document.getElementById("result");

    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    show.innerHTML = `<p>Obrigado por entrar em contato, ${name}!</p>
                      <button class="btn-close" onclick="closeResult()">Fechar</button>`
    show.style.display = "block";
}
function closeResult() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    let show = document.getElementById("result");
    show.style.display = "none";
}

function recarregarPagina() {
    window.location.reload(); 
}
window.onload = function () {

    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
};