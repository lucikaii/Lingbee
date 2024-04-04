'use strict'

const button = document.getElementById('translate-button')


const traduzir = async() => {

    const inputFrom = document.getElementById('translate').value

    console.log(inputFrom)

    const textTraducao = inputFrom
    
    const url = `https://api.mymemory.translated.net/get?q=${textTraducao}&langpair=pt-br|en`

    const response = await fetch(url)

    
    const data = await response.json()

    const result = data.responseData.translatedText

    console.log(result)

    const inputTo = document.getElementById('result')

    inputTo.value = result

    console.log(inputTo)


}

const montarForm = async() => {

    
    const textTraduzido = await traduzir(inputTo.value)


}

// adicionando um ação para quando o input mudar
button.addEventListener('click', traduzir)

