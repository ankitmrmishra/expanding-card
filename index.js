const mainContainer = document.getElementsByClassName('.main-container');
const imageBox = document.querySelectorAll(".image-box");
const active = document.getElementsByClassName('.active');




imageBox.forEach(image => {
    image.addEventListener('click', () => {
        removeactiveClass()
        image.classList.add('active')
    })
})

function removeactiveClass() {
    imageBox.forEach(image => {
        image.classList.remove('active')
    })
}