const cheatButton = document.querySelector('.cheat');
const popup = document.querySelector('.popup-container');
const popupSecond = document.querySelector('.popup-container2');
const popupThird = document.querySelector('.popup-container3')
const closeButtons = document.querySelectorAll('.close-button');
const iconClose = document.getElementById('close')
const iconClose2 = document.getElementById('close2')
const iconClose3 = document.getElementById('close3')
const bubble = document.querySelector('.bubble')
const bubbleText = document.querySelector('.text')

cheatButton.addEventListener('click', () => {
    popup.classList.add('popup-show')
})
iconClose.addEventListener('click', () => {
    popup.classList.remove('popup-show')
    popupSecond.classList.add('popup-show')
})

iconClose2.addEventListener('click', () => {
    popupSecond.classList.remove('popup-show')
    popupThird.classList.add('popup-show')
})

iconClose3.addEventListener('click', () => {
    bubble.classList.add('popup-show')
    bubbleText.classList.add('popup-show')
})

for (let closeButton of closeButtons)
    closeButton.addEventListener('click', () => {
    popup.classList.remove('popup-show')
    popupSecond.classList.remove('popup-show')
        popupThird.classList.remove('popup-show')
        if (bubble.classList.contains('popup-show')) {
            bubble.classList.remove('popup-show')
        }
        if (bubbleText.classList.contains('popup-show')) {
            bubbleText.classList.remove('popup-show')
        }
})