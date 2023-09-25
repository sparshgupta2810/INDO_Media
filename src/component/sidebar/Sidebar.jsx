import "./Sidebar.css"
import {RssFeed , PlayCircle , Chat , People , Bookmark , HelpOutline , WorkOutline , Event , School} from '@mui/icons-material'
import {Users} from '../../dummyData'
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {

  
  return (
      <div className="sidebar">
         <div className="sidebarWarp">
          <div className="sidebarList">
            <ul className="sidebarListItem">
              <li className="sidebarListIcon">
                <RssFeed className="Icon"/>
                <span className="sidebarItemText">Feed</span>
              </li>
              <li className="sidebarListIcon">
                <Chat className="Icon" />
                <span className="sidebarItemText">Chats</span>
              </li>
              <li className="sidebarListIcon">
                <PlayCircle className="Icon" />
                <span className="sidebarItemText">Videos</span>
              </li>
              <li className="sidebarListIcon">
                <People className="Icon"  />
                <span className="sidebarItemText">Group</span>
              </li>
              <li className="sidebarListIcon">
                <Bookmark className="Icon" />
                <span className="sidebarItemText">Bookmark</span>
              </li>
              <li className="sidebarListIcon">
                <HelpOutline className="Icon" />
                <span className="sidebarItemText">Questions</span>
              </li>
              <li className="sidebarListIcon">
                <WorkOutline className="Icon" />
                <span className="sidebarItemText">Job</span>
              </li>
              <li className="sidebarListIcon">
                <Event className="Icon" />
                <span className="sidebarItemText">Event</span>
              </li>
              <li className="sidebarListIcon">
                <School className="Icon" />
                <span className="sidebarItemText">Courses</span>
              </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="line"/>
            <ui className="sidebarFriendList">
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u}/>
            ))}
            </ui>
          </div>
         </div>
      </div>
  )
}
