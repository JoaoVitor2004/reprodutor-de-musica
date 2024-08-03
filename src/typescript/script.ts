const audio: HTMLElement | null = document.getElementById('audio')
const botaoPlay: HTMLButtonElement | null = document.getElementById('play') as HTMLButtonElement | null
const botaoVoltar: HTMLButtonElement | null = document.getElementById('voltar') as HTMLButtonElement | null
const botaoAvancar: HTMLButtonElement | null = document.getElementById('avancar') as HTMLButtonElement | null
const imagem: HTMLElement | null = document.getElementById('img')
const titulodaMusica: HTMLElement | null = document.getElementById('titulo')
const nomeBanda: HTMLElement | null = document.getElementById('banda')
const icone: HTMLElement | null = document.getElementById('icone')

let taTocando: boolean = false
let musicaAtual: number = 1
let quantidade: number = 2
let imagemAtual: number = 1
const corpo = document.body

const musicas= [
    {banda: 'Cosmo Sheldrake', musica: 'Lost in the City Lights', cor: '#47284A'},
    {banda: 'Lesfim', musica: 'Forest lullaby', cor: '#1F011B'}
]

function tocarMusica(): void {
    audio?.play()
    icone?.classList.add('bi-pause-fill')
    icone?.classList.remove('bi-play-fill')
}

function pausarMusica(): void {
    audio?.pause()
    icone?.classList.add('bi-play-fill')
    icone?.classList.remove('bi-pause-fill')
}

function tocarePausarMusica(): void {
    if (taTocando === false) {
        taTocando = true
        tocarMusica()
    } else {
        taTocando = false
        pausarMusica()
    }
}

function proximaMusica(): void {
    if (musicaAtual === quantidade) {
        musicaAtual = 1
        imagemAtual = 1
        if (titulodaMusica) titulodaMusica.innerHTML = musicas[0].musica
        if (nomeBanda) nomeBanda.innerHTML = musicas[0].banda
        corpo.style.background = musicas[0].cor

    } else {
        musicaAtual += 1
        imagemAtual += 1
        if (titulodaMusica) titulodaMusica.innerHTML = musicas[1].musica
        if (nomeBanda) nomeBanda.innerHTML = musicas[1].banda
        corpo.style.background = musicas[1].cor
    }

    if (audio) audio.src = 'src/audio/' + musicaAtual + '.mp3'
    if (imagem) imagem.src = 'src/imagens/' + imagemAtual + '.png'
    tocarMusica()
}

function voltarMusica(): void {
    if (musicaAtual === 1) {
        musicaAtual = quantidade
        imagemAtual = quantidade
        if (titulodaMusica) titulodaMusica.innerHTML = musicas[1].musica
        if (nomeBanda) nomeBanda.innerHTML = musicas[1].banda
        corpo.style.background = '#1F011B'
    } else {
        musicaAtual -= 1
        imagemAtual -= 1
        if (titulodaMusica) titulodaMusica.innerHTML = musicas[0].musica
        if (nomeBanda) nomeBanda.innerHTML = musicas[0].banda
        corpo.style.background = musicas[0].cor
    }

    if (audio) audio.src = `src/audio/${musicaAtual}.mp3`
    if (imagem) imagem.src = `src/imagens/${imagemAtual}.png`
    tocarMusica()
}

botaoPlay?.addEventListener('click', () => tocarePausarMusica())
botaoAvancar?.addEventListener('click', () => proximaMusica())
botaoVoltar?.addEventListener('click', () => voltarMusica())