
import React, { useState } from "react";
import {Link} from "react-router-dom"

const Menu = () => {

  const[selectMenu,setselectMenu]=useState(0);
  const[isProfileDropdownopen,setisProfileDropdownopen]=useState(false);

  const handleProfileClick=(index)=>{
    setisProfileDropdownopen(!isProfileDropdownopen);
  }
  const menuClick=(index)=>{
    setselectMenu(index)
  }
  const menuClass="menu";
  const activeClass="menu selected"
  return (
    <div className="menu-container">
      <img src="public/kite-logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>menuClick(0)}
            >
            <p className={menuClick===0?activeClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>menuClick(1)}
            >
            <p className={menuClick===1?activeClass:menuClass}>Orders</p>
            </Link>
            
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>menuClick(2)}
            >
            <p className={menuClick===2?activeClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>menuClick(3)}
            >
            <p className={menuClick===3?activeClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>menuClick(4)}
            >
            <p className={menuClick===4?activeClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>menuClick(5)}
            >
            <p className={menuClick===5?activeClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
