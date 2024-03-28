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