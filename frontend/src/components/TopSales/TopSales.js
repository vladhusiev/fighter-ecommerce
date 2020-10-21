import React from "react";
import "./TopSales.css";

export default function TopSales() {
    return (
        <section className="goods" id="goods">
            <div className="container">
                <div className="goods_top">
                    <h2 className="title">
                        <span className="subtitle">топ продаж</span>
                        Купили на этой неделе
                    </h2>
                    <div className="navs">
                        <button className="prev">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="next">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="goods_slider">
                    <div className="goods_item">
                        <div className="goods_item_upper">
                            <img src="/images/1.jpg" alt="good" />
                            <div className="goods_item_discount">
                                <i className="fas fa-percent"></i>
                            </div>
                        </div>
                        <div className="goods_item_btm">
                            <span className="goods_item_name">MANTO</span>
                            <p className="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span className="goods_item_price">
                                <span className="new_price">1560 грн</span>
                                <span className="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                    <div className="goods_item">
                        <div className="goods_item_upper">
                            <img src="/images/2.jpg" alt="good" />
                            <div className="goods_item_discount">
                                <i className="fas fa-percent"></i>
                            </div>
                        </div>
                        <div className="goods_item_btm">
                            <span className="goods_item_name">MANTO</span>
                            <p className="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span className="goods_item_price">
                                <span className="new_price">1560 грн</span>
                                <span className="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                    <div className="goods_item">
                        <div className="goods_item_upper">
                            <img src="/images/3.jpg" alt="good" />
                            <div className="goods_item_discount">
                                <i className="fas fa-percent"></i>
                            </div>
                        </div>
                        <div className="goods_item_btm">
                            <span className="goods_item_name">MANTO</span>
                            <p className="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span className="goods_item_price">
                                <span className="new_price">1560 грн</span>
                                <span className="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                </div>
                <a className="main_btn goods_btn" href="">
                    Смотреть все товары
                </a>
            </div>
        </section>
    );
}
