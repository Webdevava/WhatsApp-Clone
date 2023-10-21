import React from 'react'
import styles from '../styles/contactitem.module.css'

const ContactItem = (props) => {
    const {name,image} = props;

    function generateRandomMessage() {
        const messages = [
          "Hey there! How's it going?",
          "Do you have any plans for the weekend?",
          "What's new in your life?",
          "Hi, long time no see!",
          "How's the weather today?",
          "Let's catch up soon!",
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
      }
      
  return (
    <div className={styles.item}>
    <img src={image} alt="" className={styles.pic} />
    <div className={styles.info}>
    <p className={styles.name}>{name}</p>
    <p className={styles.msg}>{generateRandomMessage()}</p>
    </div>
  
    </div>
  )
}

export default ContactItem
