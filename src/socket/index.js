import { io } from "socket.io-client";

const options = {
  "force new connections": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websockets"],
};

export default socket = io("http://localhost:5000", options);
