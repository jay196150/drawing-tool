import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === "production" ? "https://drawing-server-36fp.onrender.com" :  "http://localhost:5000"

export const socket = io( URL )