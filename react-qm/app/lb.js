import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default class Lb extends Component {
    componentDidMount() {
        $(".item").mouseover(function(){
            $(this).addClass("btm");
            $(this).siblings().removeClass("btm");
            let i=$(this).index();
            console.log(i)
            $(".slide").eq(i-1).addClass("up").siblings().removeClass("up");
            $(".slide").eq(i-1).removeClass("down").siblings().addClass("down");
        })
    }
    render() {
        return (
            <section className="sbanner">
                <div className="banner-wrap">
                    <div className="banner">
                        <div className="slide item1 up">
                            <img src="../img/pc_Ban00bj_40d7a3b.jpg"></img>
                            <Link to="#">
                                <img src="../img/pc_Ban00qj_c5b4f62.png"></img>
                            </Link>
                        </div>
                        <div className="slide item2">
                            <div className="slideCons">
                                <Link to="#" className="tu">
                                    <img src="../img/indexBan009_d02c883.png"></img>
                                </Link>
                                <figure className="product-title">
                                    <figcaption className="cfff">云商城</figcaption>
                                    <p className="cfff">
                                        为品牌商量身定制的全渠道品牌商城 <br />
                                        全面服务微商的微商城 <br />
                                        自有品牌和自有会员的自由生意
                                    </p>
                                </figure>
                                <Link to="#" className="btn-ysc btn100">立即体验</Link>
                                <Link to="#" className="btn1-ysc btn100">了解详情</Link>
                            </div>
                        </div>
                        <div className="slide item3">
                            <div className="slideCons">
                                <Link to="#" className="tu">
                                    <img src="../img/indexBan010_7767f6f.png"></img>
                                </Link>
                                <figure className="product-title">
                                    <figcaption className="cfff">云小店</figcaption>
                                    <p className="cfff">
                                        面向实体小店 <br />
                                        新零售转型升级 <br />
                                        坪效人效体验全面起飞
                                    </p>
                                </figure>
                                <Link to="#" className="btn-ydh btn100">立即体验</Link>
                                <Link to="#" className="btn1-ydh btn100">了解详情</Link>
                            </div>
                        </div>
                        <div className="slide item4">
                            <div className="slideCons">
                                <Link to="#" className="tu">
                                    <img src="../img/indexBan011_0e68c4d.png"></img>
                                </Link>
                                <figure className="product-title">
                                    <figcaption className="cfff">云分销</figcaption>
                                    <p className="cfff">
                                    天下没有难做的B2B  <br />
                                    一站式B2B解决方案 
                                    </p>
                                </figure>
                                <Link to="#" className="btn-ysc btn100">立即体验</Link>
                                <Link to="#" className="btn1-ysc btn100">了解详情</Link>
                            </div>
                        </div>
                        <div className="slide item5">
                            <div className="slideCons">
                                <Link to="#" className="tu">
                                    <img src="../img/indexBan012_e1195f0.png"></img>
                                </Link>
                                <figure className="product-title">
                                    <figcaption className="cfff">连锁O2O</figcaption>
                                    <p className="cfff">
                                    混合连锁O2O一体化方案  <br />
                                    直营加盟统一管理 
                                    </p>
                                </figure>
                                <Link to="#" className="btn-o2o btn100">立即体验</Link>
                                <Link to="#" className="btn1-o2o btn100">了解详情</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner-tab">
                        <Link to="#" className="kb"></Link>
                        <Link to="#" className="item bj1 btm">
                            <p>
                                新零售&nbsp;&nbsp;用千米
                            </p>
                        </Link>
                        <Link to="#" className="item">
                            <i className="iconfont icon-yunshangcheng"></i>
                            <span>云商城</span>
                        </Link>
                        <Link to="#" className="item">
                            <i className="iconfont icon-dianpu_"><span id="ri"></span></i>
                            <span>云小店</span>
                        </Link>
                        <Link to="#" className="item">
                            <i className="iconfont icon-yundinghuo"></i>
                            <span>云分销</span>
                        </Link>
                        <Link to="#" className="item">
                            <i className="iconfont icon-headquarter"><span id="ri"></span></i>
                            <span>连锁O2O</span>
                        </Link>
                        <Link to="#" className="kb"></Link>
                    </div>
                </div>
            </section>
        )
    }
}