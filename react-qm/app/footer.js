import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Ft extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="footer_about">
                        <h3>关于千米</h3>
                        <ul>
                            <li><Link to="#">关于我们</Link></li>
                            <li><Link to="#">千米历程</Link></li>
                            <li><Link to="#">加入我们</Link></li>
                        </ul>
                    </div>
                    <div className="footer_produce">
                        <h3>产品中心</h3>
                        <ul className="w80">
                            <li className="left">
                                <ul>
                                    <li><Link to="#">云&nbsp;&nbsp;小&nbsp;&nbsp;店</Link></li>
                                    <li><Link to="#">连锁O2O</Link></li>
                                    <li><Link to="#">云&nbsp;&nbsp;分&nbsp;&nbsp;销</Link></li>
                                    <li><Link to="#">云&nbsp;&nbsp;商&nbsp;&nbsp;城</Link></li>
                                </ul>
                            </li>
                            <li className="left">
                                <ul>
                                    <li><Link to="#">云&nbsp;&nbsp;采&nbsp;&nbsp;购</Link></li>
                                    <li><Link to="#">定制方案</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_contact">
                        <h3>联系我们</h3>
                        <p>
                            售前咨询：400-108-1000 转1
                        </p>
                        <p>
                            售前咨询：400-108-1000 转3
                        </p>
                        <p>
                            周一至周六：9:00 ~ 20:00
                        </p>
                        <p>
                            周日：9:30 ~ 17:30
                        </p>
                    </div>
                    <div className="footer_code">
                        <div className="qm_code"></div>
                        <div className="slogan">
                            新零售&nbsp;&nbsp;用千米
                        </div>
                    </div>
                </div>
                <div className="copy">    
                    © Copyright 2013 - 2018 江苏千米网络科技股份有限公司 版权所有 |&nbsp;
                    <Link to="#">苏ICP备13057902号-6</Link>
                </div>
            </footer>
        )
    }
}