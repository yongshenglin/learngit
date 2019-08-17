import React,{Component} from "react";
import {Link} from "react-router-dom";
import Ej from "./ejdh.js";
import $ from 'jquery';
export default class Nav extends Component{
    componentDidMount(){
        $(".nav").children("li").mouseover(function(){
            $(this).children(".drop").stop().slideDown(300)
        })
        $(".nav").children("li").mouseout(function(){
            $(this).children(".drop").stop().slideUp(300)
        })
    }
    render(){
        return(
            <div className="header_nav">
                <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/cpzx" className="list">产品中心</Link><Ej/></li>
                    <li><Link to="/lszb">新零售周边</Link></li>
                    <li><Link to="/cshhr">城市合伙人</Link></li>
                    <li><Link to="#">下载</Link></li>
                </ul>
            </div>
        )
    }
}