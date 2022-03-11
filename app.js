const squares = document.querySelectorAll(`.grid-item`)
let turnHandle = 0
let xcheck = []
let ocheck = []

function resultCheck(square){
    console.log(square.id)
}

function symbol(square){
    let player = `x`

    if(square.innerHTML){
        alert(`Square is taken !!! click empty square`)
    }else{
        turnHandle++
        if (turnHandle%2 == 0){
            player = `X`
            xcheck.push(square.id)

            resultCheck(square)
            square.innerHTML = `<p>${player}</p>` 
        }else{
            player = `O`
            ocheck.push(square.id)

            resultCheck(square)
            square.innerHTML = `<p>${player}</p>`    
        }
        
    }  

}

squares.forEach((square)=>{
    square.addEventListener(`click`,()=>{
        symbol(square)
    })
})