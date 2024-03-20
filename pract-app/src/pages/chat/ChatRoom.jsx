import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://192.168.58.42:3001");

function ChatRoom() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const joinRoom = () => {
    socket.emit("joinRoom", roomId, username);
  };

  const sendMessage = () => {
    console.log(roomId, username, message);
    socket.emit("sendMessage", { roomId, username, message });
    setMessage("");
  };

  useEffect(() => {
    // socket.on('message', (msgs) => {
    //   setMessages(msgs);
    // });

    socket.on("message", ({ roomId, username, messages }) => {
      console.log(roomId, username, messages);
      // const substr = ["est", "bob"];
      // substr.forEach((sub) => {
      //   // Create a regular expression with 'g' flag to match all occurrences
      //   const regex = new RegExp(sub, "g");
      //   // Check if the messages contains the current substring
      //   if (messages !== undefined && messages.includes(sub)) {
      //     // Replace all occurrences of the current substring with '*'
      //     messages = messages.replace(regex, "*");
      //   }
      // });

      setMessages((prevMessages) => [...prevMessages, messages]);
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>

      <div>
        {messages}
        {/* {console.log(messages)} */}
        {/* {messages!== undefined ? messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        )) : ''} */}
      </div>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
