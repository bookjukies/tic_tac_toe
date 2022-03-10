const squares = document.querySelectorAll(`.grid-item`)
squares.forEach((square)=>{
    square.addEventListener(`click`, (event)=>{
        square.innerHTML=`o`
    })
})