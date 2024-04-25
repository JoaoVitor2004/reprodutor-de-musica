const audio = document.getElementById('audio')
const botaoPlay = document.getElementById('play')
const botaoVoltar = document.getElementById('voltar')
const botaoAvancar = document.getElementById('avancar')
const imagem = document.getElementById('img')
const titulodaMusica = document.getElementById('titulo')
const nomeBanda = document.getElementById('banda')
const icone = document.getElementById('icone')

let taTocando = false
let musicaAtual = 1
let quantidade = 2
let imagemAtual = 1
const corpo = document.body

function tocarMusica() {
    audio.play()
    icone.classList.add('bi-pause-fill')
    icone.classList.remove('bi-play-fill')
}

function pausarMusica() {
    audio.pause()
    icone.classList.add('bi-play-fill')
    icone.classList.remove('bi-pause-fill')
}

function tocarePausarMusica() {
    if (taTocando === false) {
        taTocando = true
        tocarMusica()
    } else {
        taTocando = false
        pausarMusica()
    }
}

function proximaMusica() {
    if (musicaAtual === quantidade) {
        musicaAtual = 1
        imagemAtual = 1
        titulodaMusica.innerHTML = 'Lost in the City Lights'
        nomeBanda.innerHTML = 'Cosmo Sheldrake'
        corpo.style.background = '#47284A'
        
    } else {
        musicaAtual += 1
        imagemAtual += 1
        titulodaMusica.innerHTML = 'Forest Lullaby'
        titulodaMusica.style.transition = '1s ease-in-out'
        nomeBanda.innerHTML = 'Lesfm'
        corpo.style.background = '#1F011B'
        corpo.style.transition = '0.6s ease-in-out'
    }

    audio.src = 'src/audio/' + musicaAtual + '.mp3'
    imagem.src = 'src/imagens/' + imagemAtual + '.png'
    tocarMusica()
}

function voltarMusica() {
    if (musicaAtual === 1) {
        musicaAtual = quantidade
        imagemAtual = quantidade
        titulodaMusica.innerHTML = 'Forest Lullaby'
        nomeBanda.innerHTML = 'Lesfm'
        corpo.style.background = '#1F011B'
    } else {
        musicaAtual -= 1
        imagemAtual -= 1
        titulodaMusica.innerHTML = 'Cosmo Sheldrake'
        corpo.style.background = '#47284A'
        corpo.style.transition = '0.6s ease-in-out'
    }

    audio.src = `src/audio/${musicaAtual}.mp3`
    imagem.src = 'src/imagens/' + imagemAtual + '.png'
    tocarMusica()
}

botaoPlay.addEventListener('click', () => tocarePausarMusica())
botaoAvancar.addEventListener('click', () => proximaMusica())
botaoVoltar.addEventListener('click', () => voltarMusica())