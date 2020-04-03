function counter() {
  let div = document.createElement('div')
  div.setAttribute('id', 'counter')
  div.innerHTML = 1

  div.addEventListener('click', () => {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1
  })

  document.body.appendChild(div)
}

export default counter