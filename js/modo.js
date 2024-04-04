
'use strict'

const chk = document.getElementById('teste')
const input = document.getElementById('translate')
const result = document.getElementById('result')

chk.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  input.classList.toggle('translate-Dark')
  result.classList.toggle('translate-Dark')
})


// function teste (){
//     document.body.classList.toggle('dark')
//     body.classList.add('body.dark')
//     Selection.classList.add('selection.dark')
// }

// 'use strict'

// // o evento "DOMContentLoaded" garante que o HTML seja totalmente carregado antes do código ser executado
// document.addEventListener("DOMContentLoaded", async() => {

//     // recebe o elemento HTML
//     const darkMode = document.getElementById('dark-mode')
   
//    const inputFrom = document.getElementById('translate')
//    const inputTo = document.getElementById('result')
   
//     const body = document.body

//     let modoEscuro = false

//     darkMode.addEventListener('click', async() => {

//         // muda a variável de false para true
//         modoEscuro = !modoEscuro

//         // modoEscuro ativado
//         if(modoEscuro){

//            // img sol no modo escuro
//          //   darkMode.src = '../'

//             // muda para fundo preto
//             body.style.background = 'black'

//             // muda a cor do texto dos inputs para branco
//             inputFrom.style.color = 'white'
//             inputTo.style.color = 'white'

//         } else {

//             //  quando o modo escuro tiver desativado, define a imagem da lua
//          //   darkMode.src = '../'

//             // reverte ao padrão
//             body.style.background = ''

//             // reverte ao padrão
//             inputFrom.style.color = 'white'
//             inputTo.style.color = 'white'

//         }

//     })
