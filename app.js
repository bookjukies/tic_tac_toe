const squares = document.querySelectorAll(`.grid-item`)
let turnHandle = 0
let row1 = []
let row2 = []
let row3 = []
let col1=[]
let col2=[]
let col3=[]
let leftDi=[]
let rightDi=[]

function resultCheck(player){
    const checker = [row1 ,row2 ,row3 ,col1 ,col2 ,col3 ,leftDi ,rightDi]
    checker.forEach((a)=>{
        if (a.length == 3 && a.every(item => item === a[0])){
            console.log(`${player} wins`)
        }  
    })
}

function symbol(square){
    const id = square.id

    function logger (){
    switch (id) {
        
    case `1`:
            row1.push(square.children[0].innerHTML)
            col1.push(square.children[0].innerHTML)
            leftDi.push(square.children[0].innerHTML)

            break;
     case `2`:
            row1.push(square.children[0].innerHTML)
            col2.push(square.children[0].innerHTML)
            break;
    case `3`:
            row1.push(square.children[0].innerHTML)
            col3.push(square.children[0].innerHTML)
            rightDi.push(square.children[0].innerHTML)
            break;  

    case `4`:
            row2.push(square.children[0].innerHTML)
            col1.push(square.children[0].innerHTML)
            break;
     case `5`:
            row2.push(square.children[0].innerHTML)
            col2.push(square.children[0].innerHTML)
            rightDi.push(square.children[0].innerHTML)
            leftDi.push(square.children[0].innerHTML)
            break;
    case `6`:
            row2.push(square.children[0].innerHTML)
            col3.push(square.children[0].innerHTML)
            break; 

    case `7`:
            row3.push(square.children[0].innerHTML)
            col1.push(square.children[0].innerHTML)
            rightDi.push(square.children[0].innerHTML)
            break;
     case `8`:
            row3.push(square.children[0].innerHTML)
            col2.push(square.children[0].innerHTML)
            break;
    case `9`:
            row3.push(square.children[0].innerHTML)
            col3.push(square.children[0].innerHTML)
            leftDi.push(square.children[0].innerHTML)
            break; 
    }
}
    let player = `x`

    if(square.innerHTML){
        alert(`Square is taken !!! click empty square`)
    }else{
        turnHandle++
        if (turnHandle%2 == 0){
            player = `X`
            square.innerHTML = `<p>${player}</p>` 
            logger()
            resultCheck(player)
        }else{
            player = `O`
            square.innerHTML = `<p>${player}</p>`
           logger()
           resultCheck(player)
        } 
    }  
}

squares.forEach((square)=>{
    square.addEventListener(`click`,()=>{
        symbol(square)
    })
})

