let amigos = [];

let nomeInput = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos'); 
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nome = nomeInput.value.trim();
    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    amigos.push(nome);
    atualizarLista();
    nomeInput.value = '';
    nomeInput.focus();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: ${sorteado}!</li>`;
}
