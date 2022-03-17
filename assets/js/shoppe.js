


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal')
const btnRegister = $('.js-form-register')
const authForms = $('.auth-form')
const btnLogin = $('.js-form-login')
console.log(btnLogin)


btnRegister.onclick = function() {
    modal.classList.add('open')
}


modal.onclick = function(){
    modal.classList.remove('open')
}

authForms.addEventListener('click', function (event) {
    event.stopPropagation()
})

btnLogin.onclick = function(){
    modal.classList.add('open')
}



const obj = {
    name: "dongba",
    age: 18,
    isDev:true
}
console.log(JSON.stringify(obj , null))









