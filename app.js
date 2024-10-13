let despues = document.querySelector('.despues')
let antes = document.querySelector('.antes')
let volver = document.querySelector('.Volver')

despues.addEventListener('click', function(){
    let objetos = document.querySelectorAll('.objeto')
    document.querySelector('.slide').appendChild(objetos[0])
})

antes.addEventListener('click', function(){
    let objetos = document.querySelectorAll('.objeto')
    document.querySelector('.slide').prepend(objetos[objetos.length - 1])
})  

volver.addEventListener('click', function(){
    window.location.href = '../index.html'
})  
