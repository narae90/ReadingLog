import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Grid from './Grid';
import './Sidebar.css';


function SideBar(){
    return(
        <div>
            <aside className="sidebar">
                <nav className="nav">
                    <ul>
                        <li className="active"><a href="#">회원정보 변경</a></li>
                        <li><a href="/mypage">독서 기록장</a></li>
                        <li><a href="/todo">To Do List</a></li>
                        <li><a href="#">스크랩 / 좋아요</a></li>
                        <li><a href="#">내가 쓴 글 / 댓글</a></li>
                    </ul>
                </nav>
            </aside>

        </div>
    )
}


export default SideBar;