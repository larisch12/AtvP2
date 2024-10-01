const backgrounds = [
    'imagem1.jpg', 
    'imagem2.jpg',
    'imagem3.jpg',
    'imagem4.jpg',
    'imagem1.jpg',
    'imagem2.jpg',
];

let currentIndex = 0

document.getElementById('changeBackground').addEventListener('click', function() {
    
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`
})

