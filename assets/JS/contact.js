const errorElement = document.querySelector('#error')
let timeout = null
let canSubmit = true
document.querySelector('#contact-form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    if (!canSubmit) return false

    let nome = document.querySelector('#nome').value.trim()
    let email = document.querySelector('#email').value.trim()
    let assunto = document.querySelector('#assunto').value.trim()
    let mensagem = document.querySelector('#mensagem').value.trim()

    if (!nome || !email || !assunto || !mensagem) {
        errorElement.classList.remove('success')
        errorElement.innerHTML = 'Preencha todos os campos!'
        errorElement.style.display = 'block'

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            errorElement.innerHTML = ''
            errorElement.style.display = 'none'
        }, 3000)

        return false
    }

    if (!validateEmail(email)) {
        errorElement.classList.remove('success')
        errorElement.innerHTML = 'Email inválido!'
        errorElement.style.display = 'block'

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            errorElement.innerHTML = ''
            errorElement.style.display = 'none'
        }, 3000)

        return false
    }

    errorElement.classList.add('success')
    errorElement.innerHTML = 'Enviando...'
    errorElement.style.display = 'block'

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        errorElement.innerHTML = 'Mensagem enviada com sucesso!'
        errorElement.style.display = 'block'
    }, 2000)

    document.querySelector('#contact-form').reset()

    canSubmit = false
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}
