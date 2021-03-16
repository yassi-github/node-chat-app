import Express from "express"
import path from "path"

const router = Express.Router()

// ルート各処理
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

router.get("/hello", (req, res) => {
  res.status(200).send({ message: "Hello, world" })
})

export { router }
