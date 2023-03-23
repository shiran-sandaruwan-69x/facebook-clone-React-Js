import React from 'react';
import './rightpane.css'
function RightPane(props) {
    return (
        <div className="rightPaneBox">
           <div className="rightPaneContainer">
               <div className="adContainer">
                   <span className="sponsored">
                       sponsored by hotel industry
                   </span>
                   <img src="/images/hotel.jpg" alt="ad image" className="sponsoredImage"/>
                   <span className="adText">
                       Best Hotels in Sri Lanka from Your Favourite Sites. Find Your Perfect Hotel Fast! HomeToGo®: Easy Multi-Site Price Comparison. Search and Save up to 75% Now!
                   </span>
               </div>
               <hr className="hrRightPane"/>
               <div className="birthDayContainer">
                   <img src="/images/birthday-cake.png" alt="" className="birthDayImg"/>
                   <span className="birthDayText">
                       <b>shiran sanadaruwan</b> and <b>2 others</b> having birthday today ..!
                   </span>
               </div>
               <div className="friendList">
                   <li className="onlineFriends">
                       <div className="onlineFriendsImageContainer">
                           <img src="/images/3.jpg" alt="" className="onlineFriendImg"/>
                       </div>
                   </li>
               </div>
           </div>
        </div>
    );
}

export default RightPane;