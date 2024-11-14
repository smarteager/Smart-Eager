import React from "react";
import Layout from "./components/Layout/Layout";
import WhatsAppIcon from "./components/Whatsapp/Whatsapp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout />
      <WhatsAppIcon />
      <ToastContainer />
    </>
  );
}

export default App;
