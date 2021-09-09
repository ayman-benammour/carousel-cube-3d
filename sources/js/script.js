// DOM
const cubeCarouselElement = document.querySelector('.cubeCarousel')
const pivotXElement = cubeCarouselElement.querySelector('.pivotX')
const nav0Element = document.querySelector('.nav0')
const nav1Element = document.querySelector('.nav1')
const nav2Element = document.querySelector('.nav2')
const nav3Element = document.querySelector('.nav3')
const bodyHTMLElement = document.body
const backgroundSoundElement = new Audio('./sources/sounds/background-music.mp3')
const buttonSoundElement = document.querySelector('.buttonSoundEqualizer')

// VARIABLES
let rotateX = 0

// ALL FUNCTIONS
function deltaYNegatif()
{
    rotateX-= 90

    if(rotateX <= 0)
    {
        rotateX = 0
    }

    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
}

function deltaYPositif()
{
    rotateX+= 90

    if(rotateX >= 270)
    {
        rotateX = 270
    }
    
    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
}

function backgroundColor()
{
    if(rotateX == 0)
    {
        document.body.style.backgroundColor = "#d6d6cf";
    }

    if(rotateX == 90)
    {
        document.body.style.backgroundColor = "#d3b1cc";
    }

    if(rotateX == 180)
    {
        document.body.style.backgroundColor = "#e0c477";
    }

    if(rotateX == 270)
    {
        document.body.style.backgroundColor = "#aed59e";
    }
}

function navigationBar()
{
    if(rotateX == 0)
    {
        nav0Element.classList.add('pointIsActive')
        nav1Element.classList.remove('pointIsActive')
        nav2Element.classList.remove('pointIsActive')
        nav3Element.classList.remove('pointIsActive')
    }

    if(rotateX == 90)
    {
        nav0Element.classList.remove('pointIsActive')
        nav1Element.classList.add('pointIsActive')
        nav2Element.classList.remove('pointIsActive')
        nav3Element.classList.remove('pointIsActive')
    }

    if(rotateX == 180)
    {
        nav0Element.classList.remove('pointIsActive')
        nav1Element.classList.remove('pointIsActive')
        nav2Element.classList.add('pointIsActive')
        nav3Element.classList.remove('pointIsActive')
    }

    if(rotateX == 270)
    {
        nav0Element.classList.remove('pointIsActive')
        nav1Element.classList.remove('pointIsActive')
        nav2Element.classList.remove('pointIsActive')
        nav3Element.classList.add('pointIsActive')
    }
}

// SCROLLING
document.addEventListener('wheel', (event) =>
{
    if (event.deltaY < 0)
    {
        deltaYNegatif()
    }

    if (event.deltaY > 0)
    {
        deltaYPositif()
    }

    backgroundColor()

    navigationBar()

});

document.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowUp')
    {
        deltaYNegatif()
    }

    if(event.code == 'ArrowDown')
    {
        deltaYPositif()
    }

    backgroundColor()

    navigationBar()

})

nav0Element.addEventListener('click', (event) =>
{
    rotateX = 0
    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
    navigationBar()
    backgroundColor()
})

nav1Element.addEventListener('click', (event) =>
{
    rotateX = 90
    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
    navigationBar()
    backgroundColor()
})

nav2Element.addEventListener('click', (event) =>
{
    rotateX = 180
    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
    navigationBar()
    backgroundColor()
})

nav3Element.addEventListener('click', (event) =>
{
    rotateX = 270
    pivotXElement.style.transform = `rotateX(${rotateX}deg)`
    navigationBar()
    backgroundColor()
})

// ZOOM
cubeCarouselElement.addEventListener('click', (event) =>
{
    if(rotateX == 0)
    {
        const zPosElement = document.querySelector('.zPos')
        zPosElement.classList.toggle('zPosFaceIsActive')
        cubeCarouselElement.classList.toggle('zPosFaceCubeIsActive')
    }

    if(rotateX == 90)
    {
        const yPosElement = document.querySelector('.yPos')
        yPosElement.classList.toggle('yPosFaceIsActive')
        cubeCarouselElement.classList.toggle('yPosFaceCubeIsActive')
    }

    if(rotateX == 180)
    {
        const zNegElement = document.querySelector('.zNeg')
        zNegElement.classList.toggle('zNegFaceIsActive')
        cubeCarouselElement.classList.toggle('zNegFaceCubeIsActive')
    }

    if(rotateX == 270)
    {
        const yNegElement = document.querySelector('.yNeg')
        yNegElement.classList.toggle('yNegFaceIsActive')
        cubeCarouselElement.classList.toggle('yNegFaceCubeIsActive')
    }
})

// SOUND
buttonSoundElement.addEventListener('click', (event) =>
{
    const buttonSoundBar1Element = document.querySelector('.soundBar1')
    buttonSoundBar1Element.classList.add('soundIsActive')

    const buttonSoundBar2Element = document.querySelector('.soundBar2')
    buttonSoundBar2Element.classList.add('soundIsActive')

    const buttonSoundBar3Element = document.querySelector('.soundBar3')
    buttonSoundBar3Element.classList.add('soundIsActive')

    const buttonSoundBar4Element = document.querySelector('.soundBar4')
    buttonSoundBar4Element.classList.add('soundIsActive')

    backgroundSoundElement.volume = 0.3
    backgroundSoundElement.play()
})