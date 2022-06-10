const mp3 = document.getElementById('hackingtothegate');
const container = document.querySelector('.container')

container.addEventListener('click', () => {
    mp3.play()
});

container.addEventListener('ontouchstart', () => {
    mp3.play()
});