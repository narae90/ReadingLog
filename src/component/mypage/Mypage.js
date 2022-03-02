import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Mypage.css';

import Grid from './Grid';
import SideBar from './SideBar';



function Mypage () {

    
    return(

        <div>
            <h1>마이페이지</h1>
            <SideBar />

            <Route path="/mypage">
                <Grid />
            </Route>

        </div>

    )

}




export default Mypage;