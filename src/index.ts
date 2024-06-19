import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT||3000



app.get('/',(req:Request,res:Response)=>{
    let greeting = 'hi'
    res.send(greeting)
})
app.get('/courses', (req,res)=>{
    res.send('welcome to pur university, choose course you like')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
