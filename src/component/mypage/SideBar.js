import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Sidebar.css';


function SideBar(){
    return(
        <div>
            <aside className="sidebar">
                <nav className="nav">
                    <ul>
                        <li className="active"><a href="#">Welcome</a></li>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">What We Do</a></li>
                        <li><a href="#">Get In Touch</a></li>
                    </ul>
                </nav>
            </aside>

        </div>
    )
}


export default SideBar;