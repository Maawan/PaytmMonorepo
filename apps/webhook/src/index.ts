import express,{Request , Response} from "express"

const app = express();

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        msg: "Server is up and running ..."
    });
});



app.listen(3001, () => {
    console.log("Server is Running on 3001");
})