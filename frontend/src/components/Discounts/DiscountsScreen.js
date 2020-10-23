import React from 'react'
import './DiscountsScreen.css'

export default function DiscountsScreen() {
    return (
        <section className="discounts" id="discounts">
            <div className="container">
                <h2 className="title">
                    <span className="subtitle">скидки</span>
                    Успей купить выгодно
                </h2>
                <div className="discounts_wrap">
                    <div className="discounts_left">
                        <img src="/images/discount.png" alt="discount image" />
                    </div>
                    <div className="discounts_right">
                        <div className="discounts_item">
                            <div className="discounts_image">
                                <img src="/images/3.jpg" alt="discount image" />
                            </div>
                            <div className="discounts_price">
                                <span className="new_price">999 грн</span>
                                <span className="old_price">1560 грн</span>
                            </div>
                        </div>
                        <div className="discounts_item">
                            <div className="discounts_image">
                                <img src="/images/3.jpg" alt="discount image" />
                            </div>
                            <div className="discounts_price">
                                <span className="new_price">999 грн</span>
                                <span className="old_price">1560 грн</span>
                            </div>
                        </div>
                        <div className="discounts_item">
                            <div className="discounts_image">
                                <img src="/images/3.jpg" alt="discount image" />
                            </div>
                            <div className="discounts_price">
                                <span className="new_price">999 грн</span>
                                <span className="old_price">1560 грн</span>
                            </div>
                        </div>
                        <div className="discounts_item">
                            <div className="discounts_image">
                                <img src="/images/3.jpg" alt="discount image" />
                            </div>
                            <div className="discounts_price">
                                <span className="new_price">999 грн</span>
                                <span className="old_price">1560 грн</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="main_btn discounts_btn" href="">Смотреть все товары</a>
            </div>
        </section>
    )
}
