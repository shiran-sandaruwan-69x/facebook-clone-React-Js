import React from 'react';
import './leftPane.css'
import {MarkUnreadChatAlt} from "@mui/icons-material";
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function LeftPane(props) {
    return (
        <div className="leftPaneBox">
            <div className="leftPaneContainer">
                <div className="leftPaneMenu">

                    <li className="leftPaneMenuItem">
                        <MarkUnreadChatAlt className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">messages</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <GroupIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">groups</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <RssFeedIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">feed</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <FlagIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">pages</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <CalendarMonthIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">events</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <BuildIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">setting</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <SportsEsportsIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">games</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <NewspaperIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">news</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <WorkOutlineIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">jobs</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <AddShoppingCartIcon className="leftPaneMenuIcon"/>
                        <span className="leftPaneMenuText">shopping</span>
                    </li>
                    <hr/>
                    <div className="pagesYouLiked">
                        <h3>page you liked</h3>
                    </div>
                   <div className="pageList">
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                       <li className="pageListItem">
                           <img src="/images/5.jpg" alt="page img" className="pagePic"/>
                           <span className="pageName">code pen</span>
                       </li>
                   </div>

                </div>
            </div>
        </div>
    );
}

export default LeftPane;