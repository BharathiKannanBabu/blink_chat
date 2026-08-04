import React from "react";
import toast from "react-hot-toast";

const ChatPage = () => {
  return <div onClick={() => toast.success("Clicked")}>click me</div>;
};

export default ChatPage;
