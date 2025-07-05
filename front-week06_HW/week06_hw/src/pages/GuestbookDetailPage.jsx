import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const GuestbookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const saved = localStorage.getItem("guestbookMessages");
  const messages = saved ? JSON.parse(saved) : [];
  const message = messages.find((msg) => String(msg.id) === id);

  return (
    <div className="guestbook-deatil-container">
      <button className="guestbook-backbtn" onClick={() => navigate(-1)}>
        ←
      </button>
      <h2>방명록 상세 메시지</h2>
      <div>
        <strong>작성자:</strong> {message.name}
      </div>
      <div>
        <strong>메시지:</strong> {message.message}
      </div>
    </div>
  );
};

export default GuestbookDetailPage;
