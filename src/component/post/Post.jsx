import "./Post.css"
import {MoreVert} from '@mui/icons-material'
import {Users} from '../../dummyData'
import { useState } from "react"

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isliked,setIsLiked] = useState(false)
  
  const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  
  const user = Users.filter(u=>u.id===1)
  return (
    <div className="post">
        <div className="postWraped">
           <div className="postTop">
            <div className="postTopLeft">
              <img className="postPhoto" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
              <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight"></div>
            <MoreVert className="postTopIcon"/>
           </div>
           <div className="postCenter">
            <span className="topCenterText">{post?.desc}</span>
            <img className = "postCenterPost " src={post.photo} alt="" />
           </div>
           <div className="postBottom">
              <div className="postBottomLeft">
                <div className="postBottomIcon">
                  <img className="postBottomIconItems" src="./asserts/like.png" onClick={likeHandler} alt="" />
                  <img className="postBottomIconItems" src="./asserts/heart.png" onClick={likeHandler} alt="" />
                  <span className="postLikeText">{like} people like it</span>
                </div>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
           </div>
        </div>
      
    </div>
  )
}
