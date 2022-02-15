const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");
const cors = require("cors");
const { v4 } = require("uuid");
const http = require("http");

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Socket connection established");
  socket.on("join-room", ({ roomId, userId }) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(serveStatic(path.join(__dirname, "/dist")));

app.post("/share", (req, res) => {
  const id = v4();
  res.send({ streamId: id });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist", "index.html"));
});

server.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
