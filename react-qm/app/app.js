import React, { Component } from "react";
import ReactDom from "react-dom";
import App from './sy.js';
import Cpzx from './cpzx.js';
import Nav from "./nav.js";
import Dl from './dl.js';
import Lszb from './lszb.js';
import Hhr from './cshhr.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import "../css/index.css";
import "../css/iconfont.css";
ReactDom.render(
    <BrowserRouter>
        <div>
            <header>
                <div className="cblack">
                    <Link to="/" className="header_logo"><img src="../img/sylogo_8dbb412.png"></img></Link>
                    <Nav />
                    <Dl />
                </div>
            </header>
            <Route exact path="/" component={App} />
            <Route path="/cpzx" component={Cpzx} />
            <Route path="/lszb" component={Lszb}/>
            <Route path="/cshhr" component={Hhr}/>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
)