const audio= document.getElementById('audio') as HTMLElement | null
const botaoPlay = document.getElementById('play') as HTMLButtonElement | null
const botaoVoltar = document.getElementById('voltar') as HTMLButtonElement | null
const botaoAvancar = document.getElementById('avancar') as HTMLButtonElement | null
const titulodaMusica = document.getElementById('titulo') as HTMLElement | null
const nomeBanda= document.getElementById('banda') as HTMLElement | null
const imagem = document.getElementById('img')
const icone= document.getElementById('icone') as HTMLElement | null

let taTocando: boolean = false
let musicaAtual: number = 1
let quantidade: number = 2
const corpo = document.body

// Criei um objeto para colocar os nomes das muisca bandas e cores quando eu avançar uma música e voltar
const musicas = [
    {banda: 'Cosmo Sheldrake', musica: 'Lost in the City Lights', cor: '#47284A'},
    {banda: 'Lesfim', musica: 'Forest lullaby', cor: '#1F011B'}
]

function atualizarInterface(): void {
    if (titulodaMusica) titulodaMusica.innerHTML = musicas[musicaAtual - 1].musica // Esse if verifica se ele é nulo primeiro
    if (nomeBanda) nomeBanda.innerHTML = musicas[musicaAtual - 1].banda
    corpo.style.background = musicas[musicaAtual - 1].cor
    if (audio) audio.src = `src/audio/${musicaAtual}.mp3` // Já coloca direto o caminho do audio nessa função
    if (imagem) imagem.src = `src/images/${musicaAtual}.png` // Já coloca direto o caminho da imagem nessa função
}

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
    taTocando ? pausarMusica() : tocarMusica() // verifica se ele é verdadeiro se for pausa musica se não toca musica, com condição ternaria.
    taTocando = !taTocando // Deixa ele falso novamente.
}

function proximaMusica(): void {
    musicaAtual = musicaAtual === quantidade ? 1 : musicaAtual + 1 
    atualizarInterface()
    tocarMusica()
}

function voltarMusica(): void {
    musicaAtual = musicaAtual === 1 ? quantidade : musicaAtual - 1
    atualizarInterface()
    tocarMusica()
}

botaoPlay?.addEventListener('click', () => tocarePausarMusica())
botaoAvancar?.addEventListener('click', () => proximaMusica())
botaoVoltar?.addEventListener('click', () => voltarMusica())