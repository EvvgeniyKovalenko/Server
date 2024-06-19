import express, {Request, Response} from 'express'

const app = express()
const port = 3000



app.get('/',(req:Request,res:Response)=>{
    let greeting = 'hi'
    res.send(greeting)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
