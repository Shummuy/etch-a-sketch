let numbersDiv = 256
let pixel = 31.25
let containerPx = 16

const container = document.getElementById('container')
container.style.cssText = `grid-template-columns: repeat(${containerPx}, 1fr); grid-template-rows: repeat(${containerPx}, 1fr);`

for (let i = 0; i < numbersDiv; i++) {
  const div = document.createElement('div')
  div.classList.add('notepad')
  div.style.cssText = `width: ${pixel}px; height: ${pixel}px`
  
  container.appendChild(div)
}

let notepads = document.querySelectorAll('.notepad')

notepads.forEach((notepad) => {
  notepad.addEventListener('mouseover', () => {
    notepad.classList.add('notepad-color')
    console.log(notepad)
  })
})

// O valor do tamanho do pixel é 500 / pela quantidade de pixeis