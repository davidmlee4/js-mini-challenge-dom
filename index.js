/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
const playerContainer = document.querySelector("div.player-container")
console.log(header)



/***** Deliverable 2 *****/
header.style.color = "red"





/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)


PLAYERS.forEach(player=> {
let p = document.createElement("p")
p.innerHTML = `
<div class="player" data-number="${player.number}">
  <h3>
    ${player.name} (<em>${player.nickname}</em>)
  </h3>
  <img src="${player.photo}" alt="${player.name}">
</div>
`
playerContainer.append(p)

})



// PLAYERS.forEach(player=> addPlayer(player))
// function addPlayer(player){
//     let playerDiv = document.createElement("div")
//     let playerH3 = document.createElement("h3")
//     let playerImage = document.createElement("img")


//     playerDiv.className = "player"
//     playerDiv.dataset.number = `${player.number}`

//     playerH3.innerText = `${player.name} (<em>${player.nickname}</em>)`

//     playerImage.src = player.photo
//     playerImage.alt = player.name

//     playerContainer.append(playerDiv)
//     playerDiv.append(playerH3)
//     playerDiv.append(playerImage)
// }

/***** Deliverable 4 *****/
let raheem = document.querySelector(`[data-number='7']`).remove()