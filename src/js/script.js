"use strict";
const audio = document.getElementById('audio');
const botaoPlay = document.getElementById('play');
const botaoVoltar = document.getElementById('voltar');
const botaoAvancar = document.getElementById('avancar');
const titulodaMusica = document.getElementById('titulo');
const nomeBanda = document.getElementById('banda');
const imagem = document.getElementById('img');
const icone = document.getElementById('icone');
let taTocando = false;
let musicaAtual = 1;
let quantidade = 2;
const corpo = document.body;
const musicas = [
    { banda: 'Cosmo Sheldrake', musica: 'Lost in the City Lights', cor: '#47284A' },
    { banda: 'Lesfim', musica: 'Forest lullaby', cor: '#1F011B' }
];
function atualizarInterface() {
    if (titulodaMusica)
        titulodaMusica.innerHTML = musicas[musicaAtual - 1].musica;
    if (nomeBanda)
        nomeBanda.innerHTML = musicas[musicaAtual - 1].banda;
    corpo.style.background = musicas[musicaAtual - 1].cor;
    if (audio)
        audio.src = `src/audio/${musicaAtual}.mp3`;
    if (imagem)
        imagem.src = `src/images/${musicaAtual}.png`;
}
function tocarMusica() {
    audio === null || audio === void 0 ? void 0 : audio.play();
    icone === null || icone === void 0 ? void 0 : icone.classList.add('bi-pause-fill');
    icone === null || icone === void 0 ? void 0 : icone.classList.remove('bi-play-fill');
}
function pausarMusica() {
    audio === null || audio === void 0 ? void 0 : audio.pause();
    icone === null || icone === void 0 ? void 0 : icone.classList.add('bi-play-fill');
    icone === null || icone === void 0 ? void 0 : icone.classList.remove('bi-pause-fill');
}
function tocarePausarMusica() {
    taTocando ? pausarMusica() : tocarMusica();
    taTocando = !taTocando;
}
function proximaMusica() {
    musicaAtual = musicaAtual === quantidade ? 1 : musicaAtual + 1;
    atualizarInterface();
    tocarMusica();
}
function voltarMusica() {
    musicaAtual = musicaAtual === 1 ? quantidade : musicaAtual - 1;
    atualizarInterface();
    tocarMusica();
}
botaoPlay === null || botaoPlay === void 0 ? void 0 : botaoPlay.addEventListener('click', () => tocarePausarMusica());
botaoAvancar === null || botaoAvancar === void 0 ? void 0 : botaoAvancar.addEventListener('click', () => proximaMusica());
botaoVoltar === null || botaoVoltar === void 0 ? void 0 : botaoVoltar.addEventListener('click', () => voltarMusica());
