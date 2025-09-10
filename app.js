let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
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
    let listaAmigos = document.getElementById('listaAmigos');
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
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: ${sorteado}!</li>`;
}

// Extra: Para apertar Enter e adicionar nome
let nomeInput = document.getElementById('amigo');
nomeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') adicionarAmigo();
});
