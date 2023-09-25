import "./Topbar.css"
import {Person,Search,Notifications,Chat} from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topleftbar">
        <span className="topbarlogo">Indomedia</span>
      </div>
      <div className="topcenterbar">
        <div className="searchbar">
        <Search className="search"/>
        <input placeholder="search a post and friends" className="searchInput" />
        </div>
      </div>
      <div className="toprightbar">
         <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
         </div>
         <div className="topbarIcons">
          <Person/>
          <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIcons">
          <Chat/>
          <span className="topbarIconBadge">2</span>
         </div>
         <div className="topbarIcons">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
         </div>
         <img src="/asserts/photo/1.jpg" alt="" />
      </div>
    </div>
  )
}
