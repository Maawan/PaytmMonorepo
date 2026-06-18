import express,{ Request, Response} from "express"

const app = express();

app.get("/", (req : Request, res : Response) => {
    
    res.json(200).json({
        msg : "Server is working fine"
    })
})



app.listen(3001, () => {
    console.log("Server is Running on 3001");
})