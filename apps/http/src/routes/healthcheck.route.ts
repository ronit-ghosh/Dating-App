import { Router } from "express"

export const router = Router()

router.post("/", (req, res) => {
    const value = req.body.value
    res.json({ msg: "Up and Running...", value })
});