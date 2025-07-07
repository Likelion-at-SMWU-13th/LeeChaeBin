import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestbookPage = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameInputRef = useRef();

  useEffect(() => {
    const saved = localStorage.getItem("guestbookMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("guestbookMessages", JSON.stringify(messages));
  }, [messages]);

  const handleRegister = () => {
    const newMessage = {
      id: Date.now(),
      name,
      message,
    };
    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    nameInputRef.current.focus();
  };

  return (
    <div className="guestbook-container">
      <h2>미니 방명록</h2>
      <div className="guestbook-form">
        <input
          className="guestbook-input"
          ref={nameInputRef}
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="guestbook-input"
          type="text"
          placeholder="메시지"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="guestbook-btn" onClick={handleRegister}>
          등록
        </button>
      </div>

      <ul className="guestbook-list">
        {messages.map((msg) => (
          <li className="guestbook-item" key={msg.id}>
            <Link className="guestbook-link" to={`/guestbook/${msg.id}`}>
              <b>{msg.name}</b>: {msg.message}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestbookPage;
