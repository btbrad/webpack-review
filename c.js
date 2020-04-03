function c() {
  let btn = document.createElement('button')
  btn.innerHTML = 'click'
  document.body.appendChild(btn)

  btn.addEventListener('click', () => {
    let div = document.createElement('div')
    div.innerHTML = 'strip'
    document.body.appendChild(div)
  })
}

export default c