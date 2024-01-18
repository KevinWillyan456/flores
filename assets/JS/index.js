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

const flores = [
    {
        id: 1,
        url: 'assets/img/image-1.png',
        price: 85,
    },
    {
        id: 2,
        url: 'assets/img/image-2.png',
        price: 30,
    },
    {
        id: 3,
        url: 'assets/img/image-3.png',
        price: 50,
    },
    {
        id: 4,
        url: 'assets/img/image-4.png',
        price: 10,
    },
    {
        id: 5,
        url: 'assets/img/image-5.png',
        price: 50,
    },
    {
        id: 6,
        url: 'assets/img/image-6.png',
        price: 20,
    },
]

function convertToReal(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

flores.forEach((item) => {
    const ele = document.createElement('div')
    ele.classList.add('container')

    const img = document.createElement('img')
    img.src = item.url
    img.alt = 'Flor'

    const price = document.createElement('div')
    price.classList.add('desc')
    price.textContent = convertToReal(item.price)
    price.addEventListener('click', () => {
        compra()
    })

    ele.appendChild(img)
    ele.appendChild(price)
    document.querySelector('.produto').appendChild(ele)
})
