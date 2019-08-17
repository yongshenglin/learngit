import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Ej extends Component {
    render() {
        return (
            <div className="drop">
                <div className="ejdh">
                    <div className="dropdown-list">
                        <ul>
                            <li>
                                <Link to="#">
                                    <span className="bg1">
                                        <i className="iconfont icon-yunshangcheng"></i>
                                    </span>
                                    <h3>云商城</h3>
                                    <p>面向品牌客户的全渠道品牌商城</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className="bg2">
                                        <i className="iconfont icon-yundinghuo"></i>
                                    </span>
                                    <h3>云分销</h3>
                                    <p>面向多层级分销客户的B2B系统</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className="bg3">
                                        <i className="iconfont icon-caigoushangpin"></i>
                                    </span>
                                    <h3>云采购<span className="free">免费</span></h3>
                                    <p>面向采购团队的在线采购系统</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className="bg4">
                                        <i className="iconfont icon-dianpu_"></i>
                                    </span>
                                    <h3>云小店<div className="hot"></div></h3>
                                    <p>面向实体小店的销量提升解决方案</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className="bg5">
                                        <i className="iconfont icon-headquarter"></i>
                                    </span>
                                    <h3>连锁O2O<div className="hot1"></div></h3>
                                    <p>面向连锁店的混合连锁一体化方案</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <span className="bg6">
                                        <i className="iconfont icon-jiejuefangan"></i>
                                    </span>
                                    <h3>定制方案</h3>
                                    <p>面向中大型企业的个性化定制解决方案</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}