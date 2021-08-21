
//consts
const button = document.getElementById('button')
const text = document.getElementById('text-color')


//button event
button.addEventListener('click', generator)



//generator function
function generator() {    
const colors = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
]


//color code function
function colorPicker(){
    let randomColor = '#'
    for(let i=0; i<6; i++){
        const random = Math.floor(Math.random() * colors.length)
        randomColor += colors[random]
    }
    return randomColor
}


//consts
const randomColor1 = colorPicker()
const randomColor2 = colorPicker()
const randomColor3 = colorPicker()
const randomDeg = Math.floor(Math.random() * 361)
document.body.style.background = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`
text.textContent =  `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`
}



generator()

