import { useState } from 'react'
import './App.scss'
import Notification from './assets/components/Notification';

type notification = {
  id: number,
  firstName: string, 
  lastName: string, 
  time: string, 
  type: string, 
  post: string | null, 
  message: string | null, 
  image: string | null, 
  group: string | null, 
  read: boolean
}

function App() {
  const [notifications, setNotifications] = useState<notification[]>([
    {
      id: 0,
      firstName: "Mark",
      lastName: "Webber",
      time: "1m",
      type: "react",
      post: "My first tournament today!",
      message: null,
      image: null,
      group: null,
      read: false
    },
    {
      id: 1,
      firstName: "Angela",
      lastName: "Gray",
      time: "5m",
      type: "follow",
      post: null,
      message: null,
      image: null,
      group: null,
      read: false
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thompson",
      time: "1 day",
      type: "join",
      post: null,
      message: null,
      image: null,
      group: "Chess Club",
      read: false
    },
    {
      id: 3,
      firstName: "Rizky",
      lastName: "Hasanuddin",
      time: "5 days",
      type: "message",
      post: null,
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      image: null,
      group: null,
      read: true
    },
    {
      id: 4,
      firstName: "Kimberly",
      lastName: "Smith",
      time: "1 week",
      type: "comment-pic",
      post: null,
      message: null,
      image: "/images/image-chess.webp",
      group: null,
      read: true
    },
    {
      id: 5,
      firstName: "Nathan",
      lastName: "Peterson",
      time: "2 weeks",
      type: "react",
      post: "5 end-game strategies to increase your win rate",
      message: null,
      image: null,
      group: null,
      read: true
    },
    {
      id: 6,
      firstName: "Anna",
      lastName: "Kim",
      time: "2 weeks",
      type: "left",
      post: null,
      message: null,
      image: null,
      group: "Chess Club",
      read: true
    }
  ])

  const unreadNumber = notifications.filter((notification) => notification.read == false).length;
  
  function markAllRead(){
    const currentNotifications = [...notifications];
    currentNotifications.forEach(notification => {
      notification.read = true;  
    });
    setNotifications(currentNotifications);
  }

  function markMessageRead(id : number){
    const currentNotifications = [...notifications];
    const clickedNotification = currentNotifications.findIndex((notification) => id == notification.id);
    currentNotifications[clickedNotification].read = true;
    setNotifications(currentNotifications);
  }

  return (
    <>
      <div className="app">
        <div className="app-header">
          <h1>Notifications</h1>
          {unreadNumber > 0? <span className="unread-count">{unreadNumber}</span> : ''}
          <button onClick={() => {markAllRead()}}>Mark all as read</button>
        </div>
        {notifications.map((notification) => <Notification notification={notification} markMessageRead={markMessageRead} key={notification.id} />)}
      </div>
    </>
  )
}

export default App
