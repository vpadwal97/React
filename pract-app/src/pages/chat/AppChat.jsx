import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// import Input from "../../components/Input";
// import { Button } from "react-bootstrap";
import axios from "axios";

const socket = io("http://192.168.58.42:3001"); // Replace with your server address

function AppChat() {
  let [messages, setMessages] = useState([]);
  let [name, setName] = useState("");
  let [newMessage, setNewMessage] = useState("");

  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    // Function to prompt user for input when component mounts
    const getnameInput = () => {
      const nameInput = prompt("Enter Your Name:");
      if (nameInput !== null && nameInput.trim() !== "") {
        setName(nameInput);
      } else {
        getnameInput();
      }
    };

    getnameInput(); // Trigger the prompt

    async function fetchIpAddress() {
      try {
        const response = await axios.get("https://ipinfo.io/ip");
        setIpAddress(response.data.trim());
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    }
    fetchIpAddress();

    socket.on("message", (data) => {
      const substr = ["est", "bob"];
      substr.forEach((sub) => {
        // Create a regular expression with 'g' flag to match all occurrences
        const regex = new RegExp(sub, "g");
        // Check if the data contains the current substring
        if (data.includes(sub)) {
          // Replace all occurrences of the current substring with '*'
          data = data.replace(regex, "*");
        }
      });

      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up event listeners
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      newMessage = `${ipAddress} ${name} :- ${newMessage}`;
      // Send message to the server
      socket.emit("message", newMessage);
      console.log(newMessage);
      setNewMessage("");
    }
  };

  return (
    <>
      <> hellow {name}</>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <form className="d-flex mt-2" onSubmit={handleSendMessage}>
        <div className="form-group m-0">
          <input
            className="form-control shadow-none rounded-0 m-0"
            id="Type_your_message..."
            type="text"
            placeholder=""
          value={`${newMessage}`}
          onChange={handleInputChange}
          />
          <label htmlFor="Type_your_message...">Type your message...</label>
        </div>
        <button type="submit" className="rounded-0 btn btn-primary">
          Send
        </button>
      </form>

      {/* <div className="d-flex">
        <Input
          label="Type your message..."
          class="mt-2 rounded-0 m-0"
          type="text"
          value={`${newMessage}`}
          onChange={handleInputChange}
          placeholder=""
        />
        <Button className="rounded-0" onClick={handleSendMessage}>
          Send
        </Button>
      </div> */}
    </>
  );
}

export default AppChat;
