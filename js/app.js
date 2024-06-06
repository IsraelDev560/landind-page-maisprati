function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    let show = document.getElementById("result");

    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    show.innerHTML = `<p>Obrigado por entrar em contato, ${name}!</p>
                      <button class="btn-close" onclick="closeResult()">Fechar</button>`
    show.style.display = "block";
}
function closeResult() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    var show = document.getElementById("result");
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