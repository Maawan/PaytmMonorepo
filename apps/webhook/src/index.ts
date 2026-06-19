import express,{Response} from "express"

const app = express();

app.get("/", (res : Response) => {
    
    res.status(200).json({
        msg : "Server is working fine...:)"
    })
})



app.listen(3001, () => {
    console.log("Server is Running on 3001");
})