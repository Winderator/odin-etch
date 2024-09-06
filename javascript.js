function resize(){
    let userInput = Number(prompt("New pixel width?"))

    let etchContainer = document.querySelector('#etch-container')

    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    }
    
    createGrid(userInput)
}

function createGrid(pixelWidth){

    let etchContainer = document.querySelector('#etch-container')


    for (let i=0; i<Math.min(100,pixelWidth)**2; i++){
        let etchSquare = document.createElement('div')
        etchSquare.classList.add('etch-square')

        etchSquare.style.width = `${900 / pixelWidth}px`
        etchSquare.style.height = `${900 / pixelWidth}px`
        etchSquare.style.opacity = 1

    
        etchSquare.addEventListener('mouseenter', (e) => {
            e.target.style.opacity = Math.max(0,e.target.style.opacity - 0.1)
            e.target.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
        }
        )
        etchContainer.appendChild(etchSquare)
    }

}

let resizeButton = document.querySelector('#resize')
resizeButton.addEventListener('click', resize)

createGrid(16)