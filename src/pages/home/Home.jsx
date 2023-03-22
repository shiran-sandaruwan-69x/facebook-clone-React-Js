import React from 'react';
import NavBar from "../../component/navigation/NavBar";
import LeftPane from "../../component/leftPane/LeftPane";
import PostPane from "../../component/postPane/PostPane";
import RightPane from "../../component/rightPane/RightPane";
import './home.css'

function Home(props) {
    return (
      <>
          <NavBar/>
         <div className="bottomContainer">
             <LeftPane/>
             <PostPane/>
             <RightPane/>
         </div>
      </>
    );
}

export default Home;