const io = require("socket.io")(8000, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  // add new users to the activeUser
  socket.on("new-user-add", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    console.log("Connected users", activeUsers);
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User disconnected", activeUsers);
    io.emit("get-users", activeUsers);
  });

  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to : ", receiverId);
    console.log("Data", data);
    if (user) {
      io.to(user.socketId).emit("receive-message", data);
    }
  });
});
