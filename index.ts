import Express from "express"
import path from "path"
import { router } from "./routes/router.js"

const App = Express()

const port: Number = 3000

App.use(Express.static(path.join(__dirname, "public")))
App.use("/", router)

App.listen(port, () => {
  console.log(`listening on port ${port}\nAccess: http://localhost:${port}`)
})
