
const express = require('express');
const bodyParser = require('body-parser');
const controller = require("./controllers/messages_controller")

const app = express();
app.use(bodyParser.json())


app.post("/api/messages", controller.create)
app.get("/api/messages", controller.read)
app.put("/api/messages/:id", controller.update)
app.delete("/api/messages/:id", controller.delete)

const PORT = 3001;

app.listen(PORT, ()=>{console.log(`Listening on PORT ${PORT} 🎄`);});