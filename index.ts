import Express from "express"

const App = Express()

const port: Number = 3000

App.get("/", (req, res) => {
  res.send("Hello, world!")
})

App.listen(port, () => {
  console.log(`listening on port ${port}\nAccess: http://localhost:${port}`)
})
