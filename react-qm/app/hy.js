import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Hy extends Component{
    render(){
        return(
            <div className="hy">
                <div className="bt">赋能 - 各行业</div>
                <ul className="content">
                    <li>
                        <Link to="#">
                            <img src="../img/1.jpg"></img>
                            <p>生鲜水果</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/2.jpg"></img>
                            <p>食品酒水</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/3.jpg"></img>
                            <p>服装鞋帽</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/4.jpg"></img>
                            <p>个护美妆</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/5.jpg"></img>
                            <p>母婴用品</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/6.jpg"></img>
                            <p>3C数码</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/7.jpg"></img>
                            <p>家具建材</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/8.jpg"></img>
                            <p>其他</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}