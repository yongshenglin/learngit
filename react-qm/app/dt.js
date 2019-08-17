import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swiper from "swiper/dist/js/swiper.js";
import "../css/swiper.min.css";
export default class Dt extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: true,
            speed:2000,
        })
    }
    render() {
        return (
            <div className="dt">
                <div className="bt1">千米动态</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide pt">
                            <img src="../img/9.png" />
                            <div className="news">
                                <Link to="#">
                                    <h3>母婴店收银必备，行业插件一网打尽</h3>
                                    <p>
                                        母婴插件是千米推出的一套解决母婴店的整体服务，满足用户在母婴店内使用的场景。购买母婴插件自动开通：
                                        计次卡、预约、寄存、宝宝成长计划等功能，同时在收银页面上也进行了改版，使之更易用，更符合母婴店在
                                        收银过程中的操作习惯，线上线下紧密结合，拉新，留存，实现精准营销，增强客户忠诚度。
                                    </p>
                                </Link>
                                <Link to="#" className="more">更多活动>></Link>
                            </div>
                        </div>
                        <div className="swiper-slide pt">
                            <img src="../img/201712140302_174ed38.jpg" />
                            <div className="news">
                                <h3>媒体动态</h3>
                                <p className="mt">
                                    <Link to="#">腾讯网 | 千米创始人石正川先生荣获2018年南京市优秀民营企业家称号</Link>
                                    <br/>
                                    <Link to="#">腾讯网 | 再添佳绩！千米荣膺2018年度最佳社区零售服务商大奖</Link>
                                    <br/>
                                    <Link to="#">凤凰网 | 千米CEO李宁：新零售升级的两个重点——技术产品化&amp;深度服务客户</Link>
                                    <br/>
                                    <Link to="#">业界 | 千米荣获“ 2018 年中国快消品供应链推荐服务商”大奖</Link>
                                    <br/>
                                    <Link to="#">新零售头条 | CHINASHOP 2018精彩落幕 千米载誉而归</Link>
                                    <br/>
                                    <Link to="#">商界 | “造船人”石正川：死磕，是赋能新零售的唯一航路</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

        )
    }
}