let despues = document.querySelector('.despues')
let antes = document.querySelector('.antes')

despues.addEventListener('click', function(){
    let objetos = document.querySelectorAll('.objeto')
    document.querySelector('.slide').appendChild(objetos[0])
})

antes.addEventListener('click', function(){
    let objetos = document.querySelectorAll('.objeto')
    document.querySelector('.slide').prepend(objetos[objetos.length - 1])
})  