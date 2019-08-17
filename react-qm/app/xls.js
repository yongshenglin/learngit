import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Xls extends Component {
    render() {
        return (
            <div className="xls">
                <div className="bt">赋能 - 新零售</div>
                <ul className="mt40 mb40 cb">
                    <li>
                        <Link to="#">
                            <img src="../img/xinlingshou_c5f83c3.png"/>
                            <p className="c999">
                                助力“新零售” <br />
                                线上线下店铺高效联动，挣钱更轻松
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/yunfenxiao_63ecaa8.png"/>
                            <p className="c999">
                                上下游供应链深度协同 <br />
                                内部管理效率提升50%以上
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="../img/xinpinpai_9c0a03d.png"/>
                            <p className="c999">
                                赋能“新品牌” <br />
                                全渠道立体营销，让零库存成为可能
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
} 