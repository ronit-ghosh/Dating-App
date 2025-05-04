import express, { type Application } from "express"
import cors from "cors"
import { router as authRouter } from "./routes/auth.route"
import { router as userRouter } from "./routes/user.routes"
import { router as feedRouter } from "./routes/feed.routes"
import AuthMiddleware from "./middlewares/auth.middleware"

export const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter)
app.use("/api/user", AuthMiddleware, userRouter)
app.use("/api/lume", AuthMiddleware, feedRouter)