import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
export default class Xz extends Component{
    componentDidMount(){
        $(".box").mouseover(function(){
            $(this).children(".float").css({"display":"block"});
        })
        $(".box").mouseout(function(){
            $(this).children(".float").css({"display":"none"});
        })
    }
    render(){
        return(
            <div className="xz">
                <div className="bt">产品下载</div>
                <div className="block-wrap">
                    <aside className="box">
                        <i className="iconfont icon-windows_download c1"></i>
                        <p>Windows</p>
                        <span className="float">
                            <Link to="#" className="btn100 btn">下载</Link>
                        </span>
                    </aside>
                    <aside className="box">
                        <i className="iconfont _icon-mac_download c2"></i>
                        <p>MacOS</p>
                        <span className="float">
                            <Link to="#" className="btn100 btn">下载</Link>
                        </span>
                    </aside>
                    <aside className="box">
                        <i className="iconfont icon-yidongduan c3"></i>
                        <p>Windows</p>
                        <span className="float">
                            <img src="../img/qianmi_pc_app_485d9ec.png"/>
                        </span>
                    </aside>
                    <aside className="box">
                        <i className="iconfont icon-hd_download c4"></i>
                        <p>Windows</p>
                        <span className="float">
                            <img src="../img/2718344512f4.jpg"/>
                        </span>
                    </aside>
                </div>
            </div>
        )
    }
}