import React from "react";
import "./TopSales.css";

export default function TopSales() {
    return (
        <section class="goods" id="goods">
            <div class="container">
                <div class="goods_top">
                    <h2 class="title">
                        <span class="subtitle">топ продаж</span>
                        Купили на этой неделе
                    </h2>
                    <div class="navs">
                        <button class="prev">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <button class="next">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div class="goods_slider">
                    <div class="goods_item">
                        <div class="goods_item_upper">
                            <img src="/images/1.jpg" alt="good" />
                            <div class="goods_item_discount">
                                <i class="fas fa-percent"></i>
                            </div>
                        </div>
                        <div class="goods_item_btm">
                            <span class="goods_item_name">MANTO</span>
                            <p class="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span class="goods_item_price">
                                <span class="new_price">1560 грн</span>
                                <span class="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                    <div class="goods_item">
                        <div class="goods_item_upper">
                            <img src="/images/2.jpg" alt="good" />
                            <div class="goods_item_discount">
                                <i class="fas fa-percent"></i>
                            </div>
                        </div>
                        <div class="goods_item_btm">
                            <span class="goods_item_name">MANTO</span>
                            <p class="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span class="goods_item_price">
                                <span class="new_price">1560 грн</span>
                                <span class="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                    <div class="goods_item">
                        <div class="goods_item_upper">
                            <img src="/images/3.jpg" alt="good" />
                            <div class="goods_item_discount">
                                <i class="fas fa-percent"></i>
                            </div>
                        </div>
                        <div class="goods_item_btm">
                            <span class="goods_item_name">MANTO</span>
                            <p class="goods_item_desc">
                                Футболка T-shirt 20 black
                            </p>
                            <span class="goods_item_price">
                                <span class="new_price">1560 грн</span>
                                <span class="old_price">1900 грн</span>
                            </span>
                        </div>
                    </div>
                </div>
                <a class="main_btn goods_btn" href="">
                    Смотреть все товары
                </a>
            </div>
        </section>
    );
}
