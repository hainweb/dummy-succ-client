import React from "react";


function MessageSelf({ props }) {
  const formattedTime = new Date(props.createdAt).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log("MessageSelf timestamp:", props.createdAt, "Formatted:", formattedTime);

  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p className="self-snd-msg" /*style={{ color: "black" }}*/>{props.content}</p>
        <p className="self-timeStamp" style={{ color: "black" }}>
          {formattedTime}
        </p>
      </div>
    </div>
  );
}

export default MessageSelf;
