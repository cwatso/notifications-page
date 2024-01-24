import './Notification.scss';
import Avatar from './Avatar';
import getImageURL from '../utils/getImageURL';

type appProps = {
  notification : { 
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
  },
  markMessageRead : (id: number) => void;
}

function Notification({notification, markMessageRead} : appProps) {

  function renderText(type : string) {
    switch(type) {
      case 'react': return <> reacted to your recent post <a href="#">{notification.post}</a></>;
      case 'follow': return ` followed you`;
      case 'join': return <> has joined your group <a href="#">{notification.group}</a></>;
      case 'message': return ` sent you a private message`;
      case 'comment-pic': return ` commented on your picture`;
      case 'comment': return ` commented on your post`;
      case 'left': return <> left the group <a href="#">{notification.group}</a></>;
  
      default: return null;
    }
  }

  return (
    <>
    <div className={`notification ${notification.read? '' : 'unread'}`} onClick={() => markMessageRead(notification.id)}><Avatar firstName= {notification.firstName} lastName = {notification.lastName}/> 
    <div className="notification-text">
      <p><a className="name" href={`#${notification.firstName}+${notification.lastName}`}>{notification.firstName} {notification.lastName}</a>
        {renderText(notification.type)}
        {notification.read? '' : <span className="notification-unread-marker"> &#9679;</span>}
      </p>
      <span>{notification.time} ago</span>
      {notification.type == 'message'? <a className="notification-message" href="#">{notification.message}</a> : ''}
    </div>
      {notification.type == 'comment-pic'? <a className="notification-image-link" href="#" style={{backgroundImage: `url(${getImageURL(notification.image)})`}}></a> : ''}
    </div>
    </>
  )
}

export default Notification