import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriendItems">
                <img src={user.profilePicture} alt="" className="sideFriendpic" />
                <span className="sidebarFriendname">{user.username}</span>
    </li>
  )
}
