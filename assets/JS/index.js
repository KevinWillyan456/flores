const body = document.querySelector('body')

function compra() {
    var ele = document.createElement('div')
    ele.classList.add('buy')
    ele.innerHTML = '<p>Parabéns pela compra!</p>'
    ele.addEventListener('animationend', (e) => {
        setTimeout(() => e.target.remove(), 2000)
    })
    body.appendChild(ele)
}

document.querySelector('.open-list').addEventListener('click', () => {
    document.querySelector('.menu-lateral').classList.add('active')
})
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.menu-lateral').classList.remove('active')
})
document.querySelector('.menu-lateral-over').addEventListener('click', () => {
    document.querySelector('.menu-lateral').classList.remove('active')
})
