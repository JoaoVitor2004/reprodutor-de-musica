"use strict";
const audio = document.getElementById('audio');
const botaoPlay = document.getElementById('play');
const botaoVoltar = document.getElementById('voltar');
const botaoAvancar = document.getElementById('avancar');
const imagem = document.getElementById('img');
const titulodaMusica = document.getElementById('titulo');
const nomeBanda = document.getElementById('banda');
const icone = document.getElementById('icone');
let taTocando = false;
let musicaAtual = 1;
let quantidade = 2;
let imagemAtual = 1;
const corpo = document.body;
const musicas = [
    { banda: 'Cosmo Sheldrake', musica: 'Lost in the City Lights', cor: '#47284A' },
    { banda: 'Lesfim', musica: 'Forest lullaby', cor: '#1F011B' }
];
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
    if (taTocando === false) {
        taTocando = true;
        tocarMusica();
    }
    else {
        taTocando = false;
        pausarMusica();
    }
}
function proximaMusica() {
    if (musicaAtual === quantidade) {
        musicaAtual = 1;
        imagemAtual = 1;
        if (titulodaMusica)
            titulodaMusica.innerHTML = musicas[0].musica;
        if (nomeBanda)
            nomeBanda.innerHTML = musicas[0].banda;
        corpo.style.background = musicas[0].cor;
    }
    else {
        musicaAtual += 1;
        imagemAtual += 1;
        if (titulodaMusica)
            titulodaMusica.innerHTML = musicas[1].musica;
        if (nomeBanda)
            nomeBanda.innerHTML = musicas[1].banda;
        corpo.style.background = musicas[1].cor;
    }
    if (audio)
        audio.src = 'src/audio/' + musicaAtual + '.mp3';
    if (imagem)
        imagem.src = 'src/imagens/' + imagemAtual + '.png';
    tocarMusica();
}
function voltarMusica() {
    if (musicaAtual === 1) {
        musicaAtual = quantidade;
        imagemAtual = quantidade;
        if (titulodaMusica)
            titulodaMusica.innerHTML = musicas[1].musica;
        if (nomeBanda)
            nomeBanda.innerHTML = musicas[1].banda;
        corpo.style.background = '#1F011B';
    }
    else {
        musicaAtual -= 1;
        imagemAtual -= 1;
        if (titulodaMusica)
            titulodaMusica.innerHTML = musicas[0].musica;
        if (nomeBanda)
            nomeBanda.innerHTML = musicas[0].banda;
        corpo.style.background = musicas[0].cor;
    }
    if (audio)
        audio.src = `src/audio/${musicaAtual}.mp3`;
    if (imagem)
        imagem.src = `src/imagens/${imagemAtual}.png`;
    tocarMusica();
}
botaoPlay === null || botaoPlay === void 0 ? void 0 : botaoPlay.addEventListener('click', () => tocarePausarMusica());
botaoAvancar === null || botaoAvancar === void 0 ? void 0 : botaoAvancar.addEventListener('click', () => proximaMusica());
botaoVoltar === null || botaoVoltar === void 0 ? void 0 : botaoVoltar.addEventListener('click', () => voltarMusica());
