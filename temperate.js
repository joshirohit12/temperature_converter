let celciusinput = document.querySelector('#celcius > input')
let farenhiteinput = document.querySelector('#Farenhite > input')
let kelvininput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

celciusinput.addEventListener('input',function(){
    let cetemp = parsefloat(celciusinput.value)
    let fatemp = (cetemp*(9/5)) +32
    let ketemp = cetemp + 273.15

    farenhiteinput.value = roundnumber(fatemp)
    kelvininput.value = roundnumber(ketemp)
})
farenhiteinput.addEventListener('input',function(){
    let fatemp = parsefloat(farenhiteinput.value)
    let cetemp = (fatemp - 32) * (5/9)
    let ketemp = (fatemp - 32) * (5/9) + 273.15

    farenhiteinput.value = roundnumber(cetemp)
    kelvininput.value = roundnumber(ketemp)
})

kelvininput.addEventListener('input',function(){
    let ketemp = parsefloat(kelvininput.value)
    let cetemp = ketemp - 273.15
    let fatemp = (ketemp - 273.15) * (9/5) + 32

    celciusinput.value = roundnumber(cetemp)
    farenhiteinput.value = roundnumber(fatemp)
})

btn.addEventListener('click', ()=>{
    celciusinput.value = ""
    farenhiteinput.value = ""
    kelvininput.value = ""
})