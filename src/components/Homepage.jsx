import React from 'react';
import styles from "./css/Homepage.module.css"
import Laptop from "./photos/Laptop.png";
import Basketball from "./photos/Basketball.jpg";
import Beer from "./photos/Beer.jpg";
import Flour from "./photos/Flour.jpg";
import Search from "./photos/icons/search.svg";
import Menu from "./photos/icons/hamburger-menu.svg"
import Notify from "./photos/icons/notifications.svg"
import Headphones from "./photos/Headphones.jpg"
import Nike from "./photos/Nike.jpg"
import Orangejuice from "./photos/Orange.jpeg"
import Painting from "./photos/Painting.jpg"

const Homepage = () => {
return (
<div className={styles.main}>
    <div className={styles.header}>
    <div className={styles.leftsection}>
    <button className={styles.Menubutton}><img className={styles.Menuicon} src={Menu} alt=""/></button>  
    </div>
    <div className={styles.middlesection}> <input className={styles.searchbar} placeholder="Find" type="text"/>
        <button className={styles.searchbutton}><img className={styles.searchicon} src={Search} alt=""/></button>
    </div>
    <div className={styles.rightsection}><button className={styles.notifybutton}><img className={styles.notifyicon} src={Notify} alt=""/></button>  
    </div>
    </div>
   <div className={styles.productgrid}>
    <div className={styles.productinfo}>
        <img className={styles.product} src={Beer} alt=""/>
        <div className={styles.textinfo}>
            <p className={styles.productname}>Heineken beer</p>
            <p className={styles.productprice}>500</p>
        </div>
        </div>
   
        <div className={styles.productinfo}>
            <img className={styles.product} src={Headphones} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Headphones</p>
                <p className={styles.productprice}>1,500</p>
            </div>
           
        </div>
        <div className={styles.productinfo}> 
            <img className={styles.product} src={Nike} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Nike shorts</p>
                <p className={styles.productprice}>1,000</p>
            </div>
           
        </div> 
        <div className={styles.productinfo}>
            <img className={styles.product} src={Orangejuice} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Orange juice</p>
                <p className={styles.productprice}>150</p>
            </div>
           
        </div>

   </div>
   <div className={styles.productgrid}>
    <div className={styles.productinfo}>
        <img class={styles.product} src={Basketball} alt=""/>
        <div className={styles.textinfo}>
            <p className={styles.productname}>Basketball shorts</p>
            <p className={styles.productprice}>500</p>
        </div>
        </div>
   
        <div className={styles.productinfo}>
            <img class={styles.product} src={Painting} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Painting</p>
                <p className={styles.productprice}>100,000</p>
            </div>
           
        </div>
        <div className={styles.productinfo}>
            <img class={styles.product} src={Flour} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Unga</p>
                <p className={styles.productprice}>100</p>
            </div>
           
        </div> 
        <div className={styles.productinfo}>
            <img class={styles.product} src={Laptop} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Laptop</p>
                <p className={styles.productprice}>30,000</p>
            </div>
           
        </div>

   </div>
</div>
);
};

export default Homepage;

