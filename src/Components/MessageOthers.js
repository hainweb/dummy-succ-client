import React from "react";
import "./myStyles.css";
import { useDispatch, useSelector } from "react-redux";


function MessageOthers({ props }) {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  const formattedTime = new Date(props.createdAt).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log("MessageOthers timestamp:", props.createdAt, "Formatted:", formattedTime);

  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>
          {props.sender.name[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"con-title-chatArea" + (lightTheme ? "" : " dark")}>
            {props.sender.name}
          </p>
          <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>
            {props.content}
          </p>
          <p className={"other-timeStamp" + (lightTheme ? "" : " dark")}>{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
