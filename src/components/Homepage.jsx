import React from 'react';
import brand from "./kindpng.png";
import design from "./css/Homepage.module.css";
import "./css/Homepage.css";
import clip from "./photos/Alexandra Daddario explains the spirit of the Porsche 911 (1).mp4"
//import Back from "./photos/icons/less-than-solid.svg"

export default function Homepage (){


return (
    <div>
        <div className={design.header}>
        <img className={design.leaf} src= {brand} alt=""/>
        </div>
<div className={design.sidebar}>
      <div className={design.sidebarOption}>
        <span className="material-icons"> home </span>
        <h2>Home</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> search </span>
        <h2>Find</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> notifications_none </span>
        <h2>Notifications</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> mail_outline </span>
        <h2>Chat</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> bookmark_border </span>
        <h2>Bookmarks</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> list_alt </span>
        <h2>Favourites</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> perm_identity </span>
        <h2>Profile</h2>
      </div>

      <div className={design.sidebarOption}>
        <span className="material-icons"> add </span>
        <h2>More</h2>
      </div>
    </div>
   
    
    </div>
);
};

