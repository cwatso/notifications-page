import getImageURL from '../utils/getImageURL';
import './Avatar.scss';

const Avatar = ({firstName, lastName} : {firstName : string, lastName: string}) => {

  const imgUrl = `${firstName.toLowerCase()}-${lastName.toLowerCase()}.webp`

  return (
    <img src={getImageURL('/images/avatar-' + imgUrl)} className="avatar" alt={`${firstName} ${lastName}`}/>
  )
}

export default Avatar