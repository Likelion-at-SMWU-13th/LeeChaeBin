import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestbookPage from "./pages/GuestbookPage";
import GuestbookDetailPage from "./pages/GuestbookDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestbookPage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />

        <Route path="/guestbook/:id" element={<GuestbookDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
