import express from 'express'
const app=express()
const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    return res.send("hii jaanu")
})

app.listen(PORT,()=>console.log(`Server start at port ${PORT}`))

