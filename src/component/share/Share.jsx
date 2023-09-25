import "./Share.css"
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'


export default function Share() {
  return (
    <div className="share">
        <div className="shareWraped">
            <div className="shareTop">
                <div className="shareProfile">
                    <img className="ProfilePhoto" src="./asserts/photo/1.jpg" alt="" />
                    <input placeholder="What is in your mind ?" className="shareProfiletext" />
                </div>
                <hr className="shareHr"/>
            </div>
            <div className="shareBottom">
                <div className="shareOption">
                    <div className="shareIconsItems">
                     <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="sharephoto">Photo and Vedios</span>
                    </div>
                    <div className="shareIconsItems">
                     <Label htmlColor="blue" className="shareIcon"/>
                        <span className="sharephoto">Tags</span>
                    </div>
                    <div className="shareIconsItems">
                     <Room htmlColor="green" className="shareIcon"/>
                        <span className="sharephoto">Locations</span>
                    </div>
                    <div className="shareIconsItems">
                     <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="sharephoto">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
      
    </div>
  )
}
