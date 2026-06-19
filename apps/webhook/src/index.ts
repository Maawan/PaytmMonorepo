import "dotenv/config";
import express,{Request , Response} from "express"
const app = express();
import prisma from "@repo/db";

;(async () => {
    try {
        await prisma.$connect()
        console.log('Prisma connected')
    } catch (err) {
        console.error('Prisma connection error:', err)
    }
})();

app.get("/", async (_req: Request, res: Response) => {
        try {
                const users = await prisma.user.findMany();

                res.status(200).json({
                        msg: "Server is up and running",
                        users,
                });
        } catch (err) {
                console.error('Prisma query error:', err)
                res.status(500).json({ error: 'Database query failed' })
        }
});



app.listen(3001, () => {
    console.log("Server is Running on 3001");
})