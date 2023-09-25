import "./Rightbar.css"
import {Users} from '../../dummyData'
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
  const user = Users.filter(u=>u.id===1)
  return (
    <div className="rightbar">
      <div className="birthdayWarped">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./asserts/gift.png" alt="" />
          <span className="birthdayText">Your <b>3 friends</b> have a <b>Birthday</b> today</span>
        </div>
        <div className="rightbarAd">
          <img className="rightbarAdvertisement" src="./asserts/ad.png" alt="" />
        </div>
        <h4 className="rightbartitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </div>
    </div>
  );
};
const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/1.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/2.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/3.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/4.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/5.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="asserts/photo/6.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  );
};
return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
);
}

