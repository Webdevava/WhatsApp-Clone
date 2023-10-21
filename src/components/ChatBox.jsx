import React from "react";
import styles from "../styles/chatbox.module.css";

import vdocall from "../assets/vdocall.svg";
import call from "../assets/call.svg";
import emoji from "../assets/emoji.svg";
import upload from "../assets/upload.svg";
import send from "../assets/send.svg";

const ChatBox = () => {
  return (
    <div className={styles.chatbox}>
      <nav className={styles.nav}>
        <div className={styles.profile}>
          <img src="https:github.com/Webdevava.png" alt="" className={styles.proPic} />
          <p className={styles.name}>Ankur</p>
        </div>
        <div className={styles.navActions}>
          <button className={styles.callContainer}>
            <img src={call} alt="" className={styles.call} />
          </button>
          <button className={styles.vdocallContainer}>
            <img src={vdocall} alt="" className={styles.vdocall} />
          </button>
        </div>
      </nav>
      <div className={styles.chatArea}>
      <div className={styles.msg1}>
      <div className={styles.received}>hi hello</div>
      </div>
      <div className={styles.msg2}>
      <div className={styles.sent}>hi hhh</div>
      </div>
      </div>
      <div className={styles.inputArea}>
        <button className={styles.emojiBtn}>
          <img src={emoji} alt="" />
        </button>
        <button className={styles.uploadBtn}>
          <img src={upload} alt="" />
        </button>
        <input
          type="text"
          className={styles.input}
          placeholder="Type a message"
        />
        <button className={styles.sendBtn}>
          <img src={send} alt="" className={styles.sendSvg}/>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
