
const btn = document.querySelector('#btn')
const detener = document.querySelector('#detener')

btn.addEventListener('click', () => {
    console.log('holamundo')
    const inicio = document.querySelector('.inicio').value
    const contador = document.querySelector('#contador')

    function temporizador(tiempo) {
        if (inicio === '') {
            return alert('No has digitado tiempo')
        } else {
           a = setTimeout(temporizador, 1000,tiempo-1)
            console.log(tiempo)
            contador.innerHTML= `${tiempo}`
            if(tiempo === 0){
                clearInterval(a)
            }
    
        }

    }
    temporizador(inicio)
})
