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
    
        etchSquare.addEventListener('mouseenter', (e) => e.target.classList.add('darker'))
        etchContainer.appendChild(etchSquare)
    }

}

let resizeButton = document.querySelector('#resize')
resizeButton.addEventListener('click', resize)

createGrid(16)