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