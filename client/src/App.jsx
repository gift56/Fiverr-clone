import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Orders from "./pages/orders/Orders";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Success from "./pages/success/Success";
import Pay from "./pages/pay/Pay";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/join" element={<Register />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/gigs/:id" element={<Gig />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/myGigs" element={<MyGigs />} />
        <Route path="/add" element={<Add />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:id" element={<Message />} />
        <Route path="/pay/:id" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
