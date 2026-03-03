function createStar() {
    const starField = document.getElementById('starField');
    const starCount = 300;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        const x = Math.random() * 100; 
        const y = Math.random() * 100; 
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const driftDelay = Math.random() * 20;
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = `${delay}s, ${driftDelay}s`
        starField.appendChild(star)
    }
}

onload = () => {
    setTimeout(() => {
        document.body.classList.remove('not-loaded')
        createStar()
    }, 1000) 
}