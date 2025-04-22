import express, { type Application } from "express"
import cors from "cors"
import { router as userRouter } from "./routes/user.routes"

export const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/user", userRouter) 