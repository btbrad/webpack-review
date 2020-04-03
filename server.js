const express = require('express')
const port = '9092'

const app = express()

app.get('/api/info', (req,res)=>{
  res.json({
    name:'学习webpack',
    age:5,
    msg:'少壮不努力, 老大美滋滋, 与君共勉'
  })
})

app.listen(port, ()=>{ console.log(`server is running at http://localhost:${port}`) })
