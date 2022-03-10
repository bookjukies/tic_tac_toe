const squares = document.querySelectorAll(`.grid-item`)
function symbol(square){
    let player = `x`
    return square.innerHTML = `<p>${player}</p>`
}
squares.forEach((square)=>{
    square.addEventListener(`click`, ()=>{
        symbol(square)
    })
})