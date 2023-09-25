import './online.css'

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
              <div className="rightbarImgContainer">
                <img className="rightbarOnlineImg" src={user.profilePicture} alt="" />
                <span className="onlineDot"></span>
                <span className="rightbarUsername">{user.username}</span>
              </div>
            </li>
    </div>
  )
}
