import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Dl extends Component{
    render(){
        return(
            <div className="dl">
                <div className="header_btn">
                    <span className="line"></span>
                    <Link to="#" className="login_btn">登录</Link>
                    <Link to="#" className="reg_btn">注册</Link>
                </div>
            </div>
        )
    }
}