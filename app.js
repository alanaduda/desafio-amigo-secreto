const listaDeAmigos = document.getElementById('listaAmigos')
let listaDeNomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value;
    const li = document.createElement('li');
    li.textContent = nome;
    listaDeAmigos.appendChild(li);
    listaDeNomes.push(nome)
    input.value = '';
}

function sortearAmigo() {
    const numeroAleatorio = parseInt(Math.random() * listaDeNomes.length + 1);
    const amigoSorteado = listaDeNomes[numeroAleatorio - 1];
    alert(`O amigo sorteado foi ${amigoSorteado} !`);
}

function limpar() {
    listaDeNomes = [];
    listaDeAmigos.innerHTML = '';
}