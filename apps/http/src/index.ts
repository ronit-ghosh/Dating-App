import express, { type Application } from "express"
import cors from "cors"
import { router as userRouter } from "./routes/user.routes"
import { router as feedRouter } from "./routes/feed.route"
import { router as swipeRouter } from "./routes/swipe.route"

export const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter) 
app.use("/api/lume/feed", feedRouter) 
app.use("/api/lume/swipe", swipeRouter)