// import '@babel/polyfill'

import a from './a'
import b from './b'
import c from './c'
import pic from './images/test.png'
import './css/index.css'
import './sass/index.scss'
import axios from 'axios'
import counter from './counter'
import number from './number'
import './hello.jsx'
import { add } from './method'
import _ from 'lodash'
import md5 from 'md5'
// import click from './click'

console.log('lodash测试', _.join(['a', 'b', 'c'], '*****'))
console.log('md5测试', md5('hello'))

add(1,2)
let root = document.querySelector('#root')

// let img = new Image()
// img.src = pic
// root.appendChild(img)
// console.log('pic', pic)

const str = 'babel Test'
const p = new Promise(resolve => {
  console.log('promise')
})


function sayHello () {
  console.log('Hello Webpack')
  // console.log(a)
  a()
  console.log(b)
}

sayHello()
c()

counter()
number()

console.log('是否开启HMR', module.hot)
if (module.hot) {
  module.hot.accept("./number", () => {
    console.log('更新了')
    document.body.removeChild(document.querySelector('#number'))
    number()
  })
}
// axios.get('/api/info').then(res=>{
//  console.log(res)
// })
document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click').then(({default: func})=>{
    func()
  })
})