export default (socket, io) => {
  socket.on("new_message", data => {
    console.log("new messsage");
    io.sockets.emit("message", { message: data.message, username: socket.username})
  })
}